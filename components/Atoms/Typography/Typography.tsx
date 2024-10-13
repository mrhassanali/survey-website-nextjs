import {
  typographyVariants,
  type TypographyVariants,
} from "./typography-variants";

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props extends object = object
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props extends object = object
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, TypographyVariants>;

type TypographyComponent = <C extends React.ElementType = "p">(
  props: TypographyProps<C>
) => React.ReactElement | null;

export const Typography: TypographyComponent = <
  C extends React.ElementType = "p"
>({
  as,
  variant,
  weight,
  align,
  color,
  className,
  children,
  ...props
}: TypographyProps<C>) => {
  const Component = as || "p";

  return (
    <Component
      className={typographyVariants({
        variant,
        weight,
        align,
        color,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
