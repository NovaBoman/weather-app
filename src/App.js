import "./App.css";
import Forecast from "./components/Forecast";
import Current from "./components/Current";

const App = () => {
  return (
    <div>
      <Current />
      <Forecast />
    </div>
  );
};

export default App;
