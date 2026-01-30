import { redirect, type ActionFunctionArgs } from "react-router";
import { createOrder } from "../../services/apiRestaurant";
import type { NewOrder } from "../../types/types";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order: NewOrder = {
    customer: String(data.customer),
    phone: String(data.phone),
    address: String(data.address),
    priority: data.priority === "on",
    cart: JSON.parse(String(data.cart)),
  };

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
