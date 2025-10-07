import { Route, Routes } from "react-router-dom";
import Payment from "./components/Payment";
import Success from "./components/Success";
import Failure from "./components/Failure";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failure" element={<Failure />} />
      </Routes>
    </>
  )
}

export default App;