import { Route, Routes } from "react-router";
import "./App.css";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyOrders />} />
      </Routes>
    </>
  );
}

export default App;
