import { useDispatch } from "react-redux";
import { toggleComplete, removeTask } from "./taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  // Toggle the Compeleted State
  const handleComplete = () => dispatch(toggleComplete(task));

  // Remove Task
  const handleRemove = () => dispatch(removeTask(task));

  return (
    <div
      style={{
        textDecoration: task.completed ? "line-through" : "",
        opacity: task.completed ? "0.5" : "",
      }}
    >
      {task.text}
      <br />
      <button style={{ backgroundColor: "lime" }} onClick={handleComplete}>
        Complete
      </button>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default Task;
