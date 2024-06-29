import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency, isValidPhone } from "../../utils/helpers";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import LinkButton from "../../ui/LinkButton";
import store from "../../store";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

function CreateOrder() {
  const {
    username,
    position,
    address,
    status: geoStatus,
    error: addressError,
  } = useSelector((state) => state.user);
  const [withPriority, setWithPriority] = useState(false);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const formError = useActionData();
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const submitting = navigation.state === "submitting";
  const priorityprice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityprice;
  const isLoadingGeoStatus = geoStatus === "loading";

  return (
    <section className="mx-auto my-24 max-w-screen-xl px-6">
      {!cart.length ? (
        <>
          <LinkButton to="/menu">Back to menu</LinkButton>
          <EmptyCart />
        </>
      ) : (
        <>
          <h2 className="poppins pb-4 text-4xl">Ready to order? Let's go!</h2>
          <Form method="POST">
            <div className="py-4">
              <label className="mb-3 block text-black">First Name</label>
              <input
                name="customer"
                required
                type="text"
                placeholder="First Name"
                className="input"
                defaultValue={username}
              />
            </div>
            <div className="py-4">
              <label className="mb-3 block text-black">Phone number</label>
              <input
                name="phone"
                required
                type="text"
                placeholder="Phone number"
                className="input"
              />
              {formError?.phone && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {formError.phone}
                </p>
              )}
            </div>
            <div className="py-4">
              <label className="mb-3 block text-black">Address</label>
              <div className="relative">
                <input
                  name="address"
                  required
                  type="text"
                  placeholder="Address"
                  className="input"
                  disabled={isLoadingGeoStatus}
                  defaultValue={address}
                />
                {geoStatus === "error" && (
                  <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                    {addressError}
                  </p>
                )}
                {!position.latitude && !position.longitude && (
                  <span className="absolute right-1 top-[3px] z-50">
                    <Button
                      type="geoBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(fetchAddress());
                      }}
                      disabled={isLoadingGeoStatus}
                    >
                      Get Location
                    </Button>
                  </span>
                )}
              </div>
            </div>
            <div className="mb-12 flex items-center gap-5 py-4">
              <input
                className="focus:ring-focus:ring-red-400 h-6 w-6 accent-red-400 focus:outline-none focus:ring-offset-2"
                type="checkbox"
                name="priority"
                value={withPriority}
                onChange={(e) => setWithPriority(e.target.checked)}
              />
              <label htmlFor="priority">
                Want to prioritise your order? You will be subject to an
                additional <strong> 20% </strong>charge.
              </label>
            </div>

            <div>
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <input
                type="hidden"
                name="position"
                value={
                  position.latitude && position.longitude
                    ? `${position.latitude}, ${position.longitude}`
                    : ""
                }
              />
              <Button disabled={submitting} type="primary">
                {submitting
                  ? "placing order..."
                  : `Order now from ${formatCurrency(totalPrice)}`}
              </Button>
            </div>
          </Form>
        </>
      )}
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please provide the correct phone number";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  console.log(newOrder);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
