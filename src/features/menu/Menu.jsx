import { useLoaderData, useNavigation } from "react-router-dom";
import MenuItem from "./MenuItem";
import Skeleton from "../../ui/Skeleton";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <section className="mx-auto my-24 max-w-screen-xl px-6">
      <h1 className="poppins pb-4 text-4xl">Select your tasty menu.</h1>
      <p className="poppins w-2/4 text-sm text-gray-500">
        Barton waited twenty always repair in within we do. AN delighted
        offending curiosity my is dashwoods at. Boy prosperous increasing
        surrounded.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {menu.map((pizza) =>
          loading ? (
            <Skeleton key={pizza.id} />
          ) : (
            <MenuItem pizza={pizza} key={pizza.id} />
          ),
        )}
      </div>
    </section>
  );
}
export async function loader() {
  const menu = await getMenu();
  console.log(menu);
  return menu;
}
export default Menu;
