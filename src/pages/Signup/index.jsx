import "./styles.css";
import logo from "../../assets/logotipo.png";

import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="content">
      <div class="card text">
        <img src={logo} alt="logotipo" className="logof" />
        <div>
          <h1 className="msgsin"> Preencha os campos com seus dados. </h1>
          <form className="formulario">
            <input placeholder="Nome Completo" />
            <input placeholder="Correio Eletrônico" type="email" />
            <input placeholder="Senha" type="password" />
            <input placeholder="Contra Senha" rtype="password" />
            <button className="botaopa">Criar Conta</button>
            <button className="botaopa">Limpar Campos</button>
          </form>
        </div>
        <Link to="/signin" className="linkpa">
          Iniciar Sessão no síito
        </Link>
        <Link to="/" className="linkpa">
          Retornar a Página Inicial
        </Link>
      </div>
    </div>
  );
}
