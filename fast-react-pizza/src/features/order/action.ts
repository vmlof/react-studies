import { redirect, type ActionFunctionArgs } from "react-router";
import { createOrder } from "../../services/apiRestaurant";
import type { NewOrder } from "../../types/types";
import store from "../../store";
import { clearCart } from "../cart/cartSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order: NewOrder = {
    customer: String(data.customer),
    phone: String(data.phone),
    address: String(data.address),
    priority: data.priority === "true",
    cart: JSON.parse(String(data.cart)),
  };

  const errors: Record<string, string> = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  //If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Do NOT overuse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
