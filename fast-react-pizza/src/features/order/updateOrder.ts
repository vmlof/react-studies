import type { ActionFunctionArgs } from "react-router";
import { updateOrder } from "../../services/apiRestaurant";

export async function action({ params }: ActionFunctionArgs) {
  const data = { priority: true };
  await updateOrder(params.orderId!, data);
  return null;
}
