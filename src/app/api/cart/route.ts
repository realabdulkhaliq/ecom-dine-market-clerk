"force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .insert(cartTable)
      .values({
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        product_kind: req.product_kind,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
      })
      .onConflictDoUpdate({
        target: [cartTable.product_id, cartTable.user_id],
        set: {
          product_quantity: req.product_quantity,
          product_price: req.product_price,
        },
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const GET = async (request: NextRequest) => {
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong in GET" });
  }
};

export const DELETE = async (request: NextRequest) => {
  // const uid = request.nextUrl.searchParams.get("user_id") as string;
  const req = await request.json();
  try {
    const res = await db
      .delete(cartTable)
      .where(
        and(
          eq(cartTable.user_id, req.user_id),
          eq(cartTable.product_id, req.product_id)
        )
      )
      .returning();
    return NextResponse.json("Deleted", { status: 200 });
  } catch (error) {
    return NextResponse.json("Server Error", { status: 500 });
  }
};
