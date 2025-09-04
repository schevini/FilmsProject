import "./styles/App.css";
import BarraDePesquisa from "./components/barra-de-pesquisa";
import { useState } from "react";
import Filme from "./components/filme";
import Carregando from "./components/carregando";

function App() {
  const [resultado, setResultado] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <BarraDePesquisa setLoading={setLoading} setResultado={setResultado} />

      {loading ? <Carregando /> : (
        <div id="resultados">
          {resultado.map((filme) => (
            <Filme key={filme.imdbID} filme={filme} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
