import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

/**
 * Componente principal da aplicação, exibindo a barra de navegação e o conteúdo principal.
 * @returns {JSX.Element} O elemento JSX do componente.
 */
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;