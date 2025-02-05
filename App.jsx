import "./App.css";
import Colors from "./components/Colors";

const App = () => {
  const colors = [
    {
      id: 0,
      name: "pink",
    },
    {
      id: 1,
      name: "blue",
    },
    {
      id: 2,
      name: "orange",
    },
    {
      id: 3,
      name: "yellow",
    },
    {
      id: 4,
      name: "green",
    },
    {
      id: 4,
      name: "red",
    },
  ];

  return <Colors colors={colors} />;
};

export default App;
