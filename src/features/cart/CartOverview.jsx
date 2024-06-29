import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { BsCart2 } from "react-icons/bs";

function CartOverview() {
  const totalItem = useSelector(getTotalCartPrice);
  const totalQuantity = useSelector(getTotalCartQuantity);

  if (!totalQuantity) return null;
  return (
    <div className="flex flex-grow items-center justify-center space-x-12">
      <Button type="cartBtn" to="/cart">
        <BsCart2 className="h-6 w-6 cursor-pointer text-gray-700" />
        <p className="space-x-4">
          <span>{totalQuantity} pizzas</span>
          <span>{formatCurrency(totalItem)}</span>
        </p>
      </Button>
    </div>
  );
}

export default CartOverview;
