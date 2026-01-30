import type { CartItemItem } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";

interface CartItemProps {
  item: CartItemItem;
}

function CartItem({ item }: CartItemProps) {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
