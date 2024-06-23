import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser({ logInUser }) {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigateTo("/menu");
  }

  function getGreetingBasedOnTime() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon";
    } else if (currentHour >= 18 && currentHour < 21) {
      return "Good Evening";
    } else {
      return "Good Day";
    }
  }

  return (
    <div className="flex bg-amber-300 py-12 text-center">
      <div className="mx-auto max-w-screen-xl from-inherit px-6">
        <form onSubmit={handleSubmit}>
          <p className="poppins pb-4 text-center text-4xl">
            {!logInUser
              ? "Step right up to Pizza Hud! Order the pizza with your name"
              : `${getGreetingBasedOnTime()}, ${logInUser}! Proceed with the order.`}
          </p>

          {/* <p>{getGreetingBasedOnTime()}</p> */}
          {!logInUser && (
            <input
              className="input w-[30%]"
              type="text"
              placeholder="Your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          {logInUser && (
            <div className="pt-8">
              <Button type="primary" to="/menu">
                Continue Ordering
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
