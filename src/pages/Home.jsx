import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

// URL da API e chave da API obtidas do arquivo .env
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

/**
 * Componente principal da página inicial, exibindo os filmes com as melhores avaliações.
 * @returns {JSX.Element} O elemento JSX do componente.
 */
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  /**
   * Busca os filmes com as melhores avaliações.
   * @param {string} url - A URL da API para buscar os filmes.
   */
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  // Busca os filmes com as melhores avaliações quando o componente é montado
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  // Exibe os filmes com as melhores avaliações
  console.log(topMovies);

  return (
    <div className="container">
      <h2 className="title">Melhores avaliações:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
