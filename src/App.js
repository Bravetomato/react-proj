import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter";
import Popup from "./Popup";
import ProdList from "./ProdList";
import NoRecord from "./NoRecord";

import "./App.css";

function App() {
  return (
    <>
      {/* <StopWatch /> */}
      {/* <NumberCounter /> */}
      {/* <Popup /> */}
      {/* <ProdList className="container mx-auto" /> */}
      {/* container 사용으로 화면 크기 상관없이 여백 보장-> prodlist에서 설정해줘야함*/}
      <NoRecord />
    </>
  );
}

export default App;
