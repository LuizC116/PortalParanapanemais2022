import Cartoes from "../../components/Cartoes/index";
import "./styles.css";
import logo from "../../assets/logotipo.png";

export default function Temap() {
  return (
    <div className="janelatema">
      <div className="mx-auto mt-3 mb-3 card text">
        <h1 className="card-tittle"> Tema Pedagógico </h1>
        <img src={logo} alt="logotipo" className="logo" />
        <div className="cards">
          <Cartoes />
        </div>
      </div>
    </div>
  );
}
