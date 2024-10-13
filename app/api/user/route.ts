import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { hash } from "bcrypt";

export async function GET() {
  const result = await db.user.findMany();
  return NextResponse.json({ result });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, password } = body;

    //check user email already exist
    const checkUserEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (checkUserEmail) {
      return NextResponse.json(
        { message: "Email already exist", user: null },
        {
          status: 409,
        }
      );
    }

    // check user phone already exist
    const checkUserPhone = await db.user.findUnique({
      where: {
        phone: phone,
      },
    });
    if (checkUserPhone) {
      return NextResponse.json(
        { message: "Phone number already exist", user: null },
        {
          status: 409,
        }
      );
    }

    // create a user
    const hashPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name: fullName,
        email: email,
        phone: phone,
        isAdmin: false,
        password: hashPassword,
        referralCode: "6MT2N",
      },
    });

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          isAdmin: newUser.isAdmin,
          referralCode: newUser.referralCode,
        },
        message: "User created successfully",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    // Error handling
    return NextResponse.json(
      { message: String(e), error: "An error occurred" },
      { status: 500 }
    );
  }
}
