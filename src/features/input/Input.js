import { useSelector, useDispatch } from "react-redux";
import { setInput, clearInput } from "./inputSlice";
import { addTask } from "../task/taskSlice";
import { selectInputSlice } from "./inputSlice";

const Form = () => {
  const inputSlice = useSelector(selectInputSlice);
  const dispatch = useDispatch();

  // Update the Input
  const handleInput = (e) => dispatch(setInput(e.target.value));

  // Add Task on Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputSlice) return;

    dispatch(addTask(inputSlice));

    dispatch(clearInput(""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputSlice}
        onChange={handleInput}
        placeholder="Add Task..."
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
