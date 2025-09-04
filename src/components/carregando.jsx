import "../styles/carregando.css";

export default function Carregando({ cor = "#ffffff" }) {
  return (
    <>
      <div className="loader">
        <div 
          className="justify-content-center jimu-primary-loading"
          style={{"--loading-color": cor}}
        ></div>
      </div>
    </>
  );
}
