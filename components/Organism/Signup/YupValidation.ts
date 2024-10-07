import * as Yup from "yup";

export const YupValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number()
    .required("Phone number is required")
    .min(10, "Phone number must be 10 digits"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  termAndCondition: Yup.boolean().oneOf(
    [true],
    "Please accept the terms and conditions"
  ),
});
