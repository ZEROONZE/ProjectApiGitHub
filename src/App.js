import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Header } from "./components/Header/Index";

import { Sliderbar } from "./components/Menu/Sliderbar";
import Disparos from "./Pages/DisparosM";
import { MensageText } from "./Pages/MensageText/Home";
import { useTheme } from "./hooks/theme";
import { MenssageArquivo } from "./Pages/MenssagemArquivo";

import { MenssageFoto } from "./Pages/MenssagemFoto";

import light from "./styles/themes/light";
import { Boot } from "./Pages/Boot/index";

import { App2 } from "./Pages/Diagrama";
import TextUpdaterNode from "./Pages/Diagrama/TextUpdaterNode";
import Flow from "./Pages/Diagrama/Flow";
import { Diagrama } from "./Pages/Diagrama/Diagrama";

function App() {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <Header />
      <Sliderbar>
        <Routes>
          <Route path="/diagrama" element={<Diagrama />} />
          <Route path="/multiplos" element={<Disparos />} />
          <Route path="/boot" element={<Boot />} />
          <Route path="/arquivo" element={<MenssageArquivo />} />
          <Route path="/texto" element={<MensageText />} />
          <Route path="/foto" element={<MenssageFoto />} />
        </Routes>
      </Sliderbar>
    </BrowserRouter>
  );
}

export default App;
