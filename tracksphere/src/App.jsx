import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./pages/Map";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/Map"} element={<Map />}></Route>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
