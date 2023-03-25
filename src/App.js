// import { Route } from "react-router-dom";
// import ColorBox from "./components/ColorBox";
// import Count from "./components/Counter";
import PrinfObjectIsConvertedFromArray from "./components/Learn-reduce/ConvertArrayToObject";
import PrinfTheLongestWord from "./components/Learn-reduce/FindWord";
import Sum from "./components/Learn-reduce/Sum";

function App() {
  return (
    <div className="App">
      {/* <Route path="./ColorBox" component={ColorBox} />
      <Route path="./Counter" component={Count} /> */}
      <Sum />
      <PrinfTheLongestWord />
      {/* <PrinfObjectIsConvertedFromArray /> */}
    </ div>
  );
}

export default App;
