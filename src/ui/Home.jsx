import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Banner from "../ui/Banner";

import AboutUs from "./AboutUs";

function Home() {
  const { username } = useSelector((state) => state.user);
  return (
    <>
      <Banner />
      <CreateUser logInUser={username} />
      <AboutUs />
    </>
  );
}

export default Home;
