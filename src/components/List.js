import { useSelector } from "react-redux";
import { selectTaskSlice } from "../features/task/taskSlice";
import Task from "../features/task/Task";

const List = () => {
  const taskSlice = useSelector(selectTaskSlice);

  return (
    <div>
      {!taskSlice.length ? (
        <p>No Task to Show</p>
      ) : (
        taskSlice.map((task) => <Task task={task} key={task.id} />)
      )}
    </div>
  );
};

export default List;
