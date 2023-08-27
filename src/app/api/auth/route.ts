import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  const { userId } = getAuth(req);
  console.log(userId);
  // Load any data your application needs for the API route
  return NextResponse.json({ userId: userId });
};
