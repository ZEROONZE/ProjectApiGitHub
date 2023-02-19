import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Index";
import Modal from "react-modal";
import { Sliderbar } from "./components/Menu/Sliderbar";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Pages/home";
import DataGridDemo from "./Pages/TESTE";
import { Repositorys } from "./components/Repositorys";
Modal.setAppElement("#root");
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sliderbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teste" element={<DataGridDemo />} />
          <Route path="/repo" element={<Repositorys />} />
        </Routes>
      </Sliderbar>
    </BrowserRouter>
  );
}

export default App;
