import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Index";

import { Sliderbar } from "./components/Menu/Sliderbar";

import { Home } from "./Pages/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sliderbar>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Sliderbar>
    </BrowserRouter>
  );
}

export default App;
