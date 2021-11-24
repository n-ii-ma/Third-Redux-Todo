import RemainingTasks from "../features/remainingTasks/RemainingTasks";
import Input from "../features/input/Input";
import List from "../components/List";
import "../App.css";

function App() {
  return (
    <div className="App">
      <br />
      <RemainingTasks />
      <br />
      <Input />
      <br />
      <List />
    </div>
  );
}

export default App;
