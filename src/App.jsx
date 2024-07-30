import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Currencies from "./pages/Currencies";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price/:symbol" element={<Price />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </>
  );
}

export default App;
