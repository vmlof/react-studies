import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

interface CheckouButtonProps {
  bookingId: number;
}

function CheckoutButton({ bookingId }: CheckouButtonProps) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      $variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
