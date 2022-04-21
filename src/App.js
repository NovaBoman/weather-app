import "./App.css";
import Forecast from "./components/Forecast";
import Current from "./components/Current";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Current />
      <Forecast />
    </div>
  );
};

export default App;
