import "../styles/barra-de-pesquisa.css";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function BarraDePesquisa({ setLoading, setResultado }) {
  const [filme, setFilme] = useState("");

  async function buscarFilmes() {
    setLoading(true);
    const startTime = Date.now();
    
    try {
      const resposta = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${filme}&type=movie`
      );
      const resultados = await resposta.json();

      if (resultados.Error) {
        return;
      }

      setResultado(resultados.Search);
    } catch (erro) {
      console.error(erro);
    } finally {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = 2000 - elapsedTime;
      
      if (remainingTime > 0) {
        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      } else {
        setLoading(false);
      }
    }
  }

  return (
    <div>
      <div id="componente-central">
        <div id="barra-de-pesquisa-componente">
          <input
            type="text"
            placeholder="Pesquise um filme"
            onChange={(e) => setFilme(e.target.value)}
          />
          <svg
            onClick={() => {
              buscarFilmes();
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#1f1f1f"
          >
            <path d="M762.69-160.92 524.46-399.16q-30 22.77-65.79 35.27-35.79 12.5-73.87 12.5-93.58 0-159.11-65.51-65.53-65.51-65.53-159.04 0-93.52 65.51-159.1 65.51-65.57 159.04-65.57 93.52 0 159.1 65.53 65.57 65.53 65.57 159.11 0 39.23-12.88 75.02-12.89 35.8-34.89 64.64l238.23 238.23-37.15 37.16ZM384.77-403.38q72.31 0 122.46-50.16 50.16-50.15 50.16-122.46t-50.16-122.46q-50.15-50.16-122.46-50.16t-122.46 50.16Q212.15-648.31 212.15-576t50.16 122.46q50.15 50.16 122.46 50.16Z" />
          </svg>
        </div>
        <div id="favoritos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#1f1f1f"
          >
            <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
