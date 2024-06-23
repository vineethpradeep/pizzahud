import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <RiDeleteBin5Line
      onClick={handleDelete}
      className="cursor-pointer text-lg"
    />
  );
}

export default DeleteItem;
