import type { LoaderFunctionArgs } from "react-router";
import { getOrder } from "../../services/apiRestaurant";
import type { IOrder } from "../../types/types";

export async function orderLoader({ params }: LoaderFunctionArgs) {
  const order: IOrder = await getOrder(params.orderId!);
  return order;
}
