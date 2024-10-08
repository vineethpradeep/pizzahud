import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCart, clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <section className="sectionsection mx-auto my-24 max-w-screen-xl px-6">
      <LinkButton to="/menu">Back to menu</LinkButton>
      {!cart.length ? (
        <EmptyCart />
      ) : (
        <>
          <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>

          <div className="mt-6 justify-normal space-x-4">
            <Button type="primary" to="/order/new">
              Ready to Order
            </Button>
            <Button type="secondary" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
