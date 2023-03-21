import ColorBox from "./components/ColorBox";
import Count from "./components/Counter";

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <ColorBox color="green" ></ColorBox>
      <ColorBox color="blue"></ColorBox>
      <Count></Count>
    </>
  );
}

export default App;
