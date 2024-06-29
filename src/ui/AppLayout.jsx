import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "../ui/Loader";
import Header from "./Header";
import BottomFooter from "./BottomFooter";
import MainFooter from "./MainFooter";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="relative">
        <main>
          <Outlet />
        </main>
        <div className="fixed bottom-20 right-1.5">
          <CartOverview />
        </div>
      </div>
      <footer className="bg-gray-800 px-6 py-12">
        <div className="mx-auto max-w-screen-xl px-6">
          <MainFooter />
          <BottomFooter />
        </div>
      </footer>
    </div>
  );
}
export default AppLayout;
