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
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <Header />
        <Sliderbar>
          <Routes>
            <Route path="/multiplos" element={<Disparos />} />
            <Route path="/arquivo" element={<MenssageArquivo />} />
            <Route path="/texto" element={<MensageText />} />
            <Route path="/foto" element={<MenssageFoto />} />
          </Routes>
        </Sliderbar>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
