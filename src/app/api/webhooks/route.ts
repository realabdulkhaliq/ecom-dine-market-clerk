import Stripe from "stripe";
import { db, cartTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

const endPointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
export async function POST(req: any, res: any) {
  const headerslist = headers();

  try {
    const rawBody = await req.text();
    const sig = headerslist.get("stripe-signature");

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2023-08-16",
    });

    let event;

    try {
      if (!sig || !endPointSecret) {
        return new Response(`Webhook Signature Or Endpoint Secret is Missing`, {
          status: 400,
        });
      }

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        sig,
        endPointSecret
      );
    } catch (error: any) {
      console.log(`Somthing Wrong with Webhook sig`);
      return new Response("webhooks signature / endpoint secret missing", {
        status: 400,
      });
    }

    if ("checkout.session.completed" === event.type) {
      const session = event.data.object;
      // @ts-ignore
      const customerData = await stripe.customers.retrieve(session.customer);
      // @ts-ignore
      const userId = customerData.metadata.userId;

      await db.delete(cartTable).where(eq(cartTable.user_id, userId));

      console.log("payment success ---", session);

      const line_Items = await stripe.checkout.sessions.listLineItems(
        // @ts-ignore
        event.data.object!.id
      );

      return new Response("Payment Confirmation Router Reciept", {
        status: 200,
      });
    } else {
      res.setHeader("Allow", "POST");
    }
  } catch (error: any) {
    console.log("Error in webhook ---:", error);
    // res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
}
