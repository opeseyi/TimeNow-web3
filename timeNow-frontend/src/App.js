import { Route, Routes } from "react-router-dom";
import FeaturePage from "./component/Pages/FeaturePage";
import PricePage from "./component/Pages/PricePage";
import ConnectButton from "./Practice-wagmi/ConnectButton";
import ReadAndWrite from "./Practice-wagmi/ReadAndWrite";

const App = () => {
  return (
    // <div>
    //   <h1>Make me</h1>
    // </div>
    <>
      <ReadAndWrite />
      <Routes>
        <Route path="/" element={<FeaturePage />} />
        <Route path="/pricepage" element={<PricePage />} />
      </Routes>
    </>
  );
};

export default App;
