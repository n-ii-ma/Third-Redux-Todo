import RemainingTasks from "./features/remainingTasks/RemainingTasks";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RemainingTasks />
      <Form />
      <List />
    </div>
  );
}

export default App;
