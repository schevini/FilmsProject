import { useEffect, useState } from "react";
import "../styles/modal.css";
import Carregando from "./carregando";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Modal({ imdbID, setExibirModal }) {
  const [detalhesFilme, setDetalheFilme] = useState({});
  const [loading, setLoading] = useState(false);
  const [favoritado, setFavoritado] = useState(false);

  async function buscarDetalhes(imdbID) {
    setLoading(true);
    const startTime = Date.now(); // Marca o tempo de início

    try {
      const resposta = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
      );
      const detalhesFilme = await resposta.json();
      setDetalheFilme(detalhesFilme);
      console.log(detalhesFilme);
    } catch (erro) {
      console.error(erro);
    } finally {
      // Garantir que o loading dure pelo menos 5 segundos
      const elapsedTime = Date.now() - startTime;
      const remainingTime = 3000 - elapsedTime;

      if (remainingTime > 0) {
        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      } else {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    buscarDetalhes(imdbID);
  }, [imdbID]);

  return (
    <div className="fundo-modal" onClick={() => setExibirModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <Carregando cor="#000000" />
        ) : (
          <>
            <div id="modal-titulo">
              <h1>
                {detalhesFilme.Title} ({detalhesFilme.Year})
              </h1>
                <div className="favorito">
                  <button onClick={() => setFavoritado(!favoritado)}>
                    {favoritado ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#ff4757"
                      >
                        <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Z" />
                      </svg>
                    ) : (
                      // Coração vazio
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#1f1f1f"
                      >
                        <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z" />
                      </svg>
                    )}
                  </button>
                </div>

                <span onClick={() => setExibirModal(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#1f1f1f"
                    >
                      <path d="m329.08-286.54-42.54-42.54L437.46-480 286.54-629.92l42.54-42.54L480-521.54l149.92-150.92 42.54 42.54L521.54-480l150.92 150.92-42.54 42.54L480-437.46 329.08-286.54Z"/>
                    </svg>
                </span>

            </div>
            <div id="modal-conteudo">
              <img src={detalhesFilme.Poster} alt={detalhesFilme.Title} />
              <div id="modal-mais-detalhes">
                <p>
                  <strong>Avaliação IMDb:</strong> {detalhesFilme.imdbRating}/10
                </p>
                <p>
                  <strong>Gênero:</strong> {detalhesFilme.Genre}
                </p>
                <p>
                  <strong>Duração:</strong> {detalhesFilme.Runtime}
                </p>
                <p>
                  <strong>Diretor:</strong> {detalhesFilme.Director}
                </p>
                <p>
                  <strong>Roteirista:</strong> {detalhesFilme.Writer}
                </p>
                <p>
                  <strong>Atores:</strong> {detalhesFilme.Actors}
                </p>
                <p>
                  <strong>Classificação:</strong> {detalhesFilme.Rated}
                </p>
                <p>
                  <strong>Lançamento:</strong> {detalhesFilme.Released}
                </p>
                <p>
                  <strong>País:</strong> {detalhesFilme.Country}
                </p>
                <p>
                  <strong>Idioma:</strong> {detalhesFilme.Language}
                </p>
                {detalhesFilme.Awards && detalhesFilme.Awards !== "N/A" && (
                  <p>
                    <strong>Prêmios:</strong> {detalhesFilme.Awards}
                  </p>
                )}
                {detalhesFilme.BoxOffice &&
                  detalhesFilme.BoxOffice !== "N/A" && (
                    <p>
                      <strong>Bilheteria:</strong> {detalhesFilme.BoxOffice}
                    </p>
                  )}
                {detalhesFilme.Plot && (
                  <div>
                    <strong>Sinopse:</strong>
                    <p>{detalhesFilme.Plot}</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
