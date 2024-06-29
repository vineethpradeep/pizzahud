import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getOrderQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateQuantity from "../cart/UpdateQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentOrderQuantity = useSelector(getOrderQuantityById(id));
  const isInCart = currentOrderQuantity > 0;
  function handleAddCart() {
    const newCart = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newCart));
  }

  return (
    <div className="relative transform rounded-lg border border-gray-100 bg-white p-4 transition duration-700 hover:scale-105 hover:shadow-xl">
      <img
        className={`mx-auto w-64 transform transition duration-300 hover:scale-105 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt=""
      />
      <div className="my-3 flex flex-col items-center space-y-2">
        <h1 className="poppins text-lg text-gray-900">{name}</h1>
        <p className="poppins text-center text-sm capitalize text-gray-500">
          {ingredients.join(", ")}
        </p>
        <h2 className="poppins text-2xl font-bold text-gray-900">
          {soldOut ? "Sold Out" : formatCurrency(unitPrice)}
        </h2>
        {isInCart && (
          <div className="grid justify-items-center">
            <UpdateQuantity
              pizzaId={id}
              currentQuantity={currentOrderQuantity}
            />
            <DeleteItem pizzaId={id} />
          </div>
        )}
        {!soldOut && !isInCart && (
          <Button
            type="primary"
            className="bg-primary poppins mt-24 transform rounded-full px-8 py-2 text-white transition duration-300 hover:scale-105 focus:outline-none"
            onClick={handleAddCart}
          >
            Order Now
          </Button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
