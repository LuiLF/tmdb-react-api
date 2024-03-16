import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

/**
 * Formata a média de votos para uma nota com uma casa decimal.
 * @param {number} voteAverage - A média de votos.
 * @returns {number} A nota formatada.
 */
const formatVoteAverage = (voteAverage) => {
  return Math.round(voteAverage * 10) / 10;
}

/**
 * Componente para exibir informações de um filme em um cartão.
 * @param {{ movie: Object, showLink?: boolean }} props - As propriedades do componente.
 * @returns {JSX.Element} O elemento JSX do componente.
 */
const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {formatVoteAverage(movie.vote_average)}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;