import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Index";
import Modal from "react-modal";
import { Sliderbar } from "./components/Menu/Sliderbar";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Pages/home";
Modal.setAppElement("#root");
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
