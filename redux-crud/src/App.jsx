import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
