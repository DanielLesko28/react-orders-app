import { Route, Routes } from "react-router";
import "./App.css";
import MyOrders from "./pages/MyOrders";
import Faktury from "./pages/Faktury";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MyOrders />} />
          <Route path="/faktury" element={<Faktury />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
