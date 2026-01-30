import { getMenu } from "../../services/apiRestaurant";
import type { Pizza } from "../../types/types";

export async function menuLoader() {
  const menu: Pizza[] = await getMenu();
  return menu;
}
