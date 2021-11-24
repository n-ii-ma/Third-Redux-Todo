import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRemainingTasksSlice,
  updateRemainingTasks,
} from "./remainingTasksSlice";
import { selectTaskSlice } from "../task/taskSlice";

const RemainingTasks = () => {
  const dispatch = useDispatch();
  const remainingTasksSlice = useSelector(selectRemainingTasksSlice);
  const taskSlice = useSelector(selectTaskSlice);

  useEffect(() => {
    // Number of Incompleted Tasks
    const incompletedTasks = taskSlice.filter((task) => !task.completed).length;

    // Update the Remaining Tasks
    dispatch(updateRemainingTasks(incompletedTasks));
  }, [taskSlice, dispatch]);

  return (
    <div>
      {remainingTasksSlice > 1
        ? `${remainingTasksSlice} Tasks Remaining`
        : `${remainingTasksSlice} Task Remaining`}
    </div>
  );
};

export default RemainingTasks;
