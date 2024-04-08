import { NextResponse } from "next/server";
import sequelize from "@/config/db";

export async function GET() {
  await sequelize.sync();

  return NextResponse.json({ message: "Hello" });
}
