import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Closed from "./pages/Closed";
import Available from "./pages/Available";

function App() {
  const properties = ["101 House St", "202 Home Ct"];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/available" element={<Available />} />
        <Route path="/closed" element={<Closed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
