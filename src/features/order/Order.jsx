import { useFetcher, useLoaderData } from "react-router-dom";
import UpdateOrder from "./UpdateOrder";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import { useEffect } from "react";

function Order() {
  const fetcher = useFetcher();
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );
  console.log(fetcher.data);
  console.log(order);

  return (
    <section className="mx-auto my-24 max-w-screen-xl px-6">
      <div className="space-y-8 px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Order #{id} status</h2>
          <div className="space-x-2">
            {priority && (
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
                Priority
              </span>
            )}
            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
              {status} order
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
          <p className="font-medium">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-xs text-stone-500">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>
        <ul className="dive-stone-200 divide-y border-b border-t">
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.pizzaId}
              isLoadingIngredients={fetcher.state === "loading"}
              ingredients={
                fetcher?.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
            />
          ))}
        </ul>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-sm">
            <p>
              <span className="font-bold">Price pizza:</span>
            </p>
            <p className="font-bold">{formatCurrency(orderPrice)}</p>
          </div>

          {priority && (
            <div className="flex items-center justify-between gap-2 text-sm">
              <p>
                <span className="font-bold">Price priority:</span>
              </p>
              <p className="font-bold">{formatCurrency(priorityPrice)}</p>
            </div>
          )}
          <div className="flex h-10 items-center justify-between gap-2 border-b border-t border-amber-500 text-sm">
            <p>
              <span className="font-bold">To pay on delivery:</span>
            </p>
            <p className="font-bold">
              {formatCurrency(orderPrice + priorityPrice)}
            </p>
          </div>
        </div>
        {!priority && <UpdateOrder />}
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
