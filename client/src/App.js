import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./components/MainLayout";
import MyOrders from "./pages/MyOrders";
import Faktury from "./pages/Faktury";
import SeznamPrani from "./pages/SeznamPrani";
import SlevoveKody from "./pages/SlevoveKody";
import VernostniProgram from "./pages/VernostniProgram";
import NastaveniUctu from "./pages/NastaveniUctu";

function App() {
  return (
    <>
      <h1 className="text-black text-4xl">Moje objednávky</h1>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MyOrders />} />
          <Route path="/faktury" element={<Faktury />} />
          <Route path="/seznam-prani" element={<SeznamPrani />} />
          <Route path="/slevove-kody" element={<SlevoveKody />} />
          <Route path="/vernostni-program" element={<VernostniProgram />} />
          <Route path="/nastaveni-uctu" element={<NastaveniUctu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
