import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

/**
 * Componente da barra de navegação, exibindo o logotipo e o campo de pesquisa.
 * @returns {JSX.Element} O elemento JSX do componente.
 */
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

    /**
   * Manipula o envio do formulário de pesquisa.
   * @param {React.FormEvent<HTMLFormElement>} e - O evento de envio do formulário.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;