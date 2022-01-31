import "./App.css";
import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import Order from "./Page/Order";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
