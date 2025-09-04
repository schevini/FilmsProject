import { useState } from "react";
import "../styles/filme.css";
import Modal from "./modal";

export default function Filme({ filme }) {
  const [exibirModal, setExibirModal] = useState(false);

  return (
    <>
      <div
        id={filme.imdbID}
        className="filme"
        onClick={() => setExibirModal(true)}
      >
        <img src={filme.Poster} />

        <div className="title-favorito">
          <p>{filme.Title}</p>
        </div>
      </div>

      {exibirModal && (
        <Modal imdbID={filme.imdbID} setExibirModal={setExibirModal} />
      )}
    </>
  );
}
