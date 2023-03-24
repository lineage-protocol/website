import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import NotFound from "./pages/Error/NotFound";
import Works from "./pages/Works";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Works />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
