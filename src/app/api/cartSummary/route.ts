import { db, cartTable } from "@/lib/drizzle";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const result = await db
      .select({
        price: sql<number>`sum(${cartTable.product_price})`,
        quant: sql<number>`sum(${cartTable.product_quantity})`,
      })
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json([{ price: 0, quant: 0 }], { status: 500 });
  }
}
