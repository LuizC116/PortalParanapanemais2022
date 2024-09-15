import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";
import "./styles.css";
import logo from "../../assets/logotipo.png";
import Mensagem from "../../components/Mensagem/index";
import { useState } from "react";

export default function Signin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      signIn({ user, password });
      navigate(from, { replace: true });
    } catch (error) {
      console.log("Erro de login");
      setUser("");
      setPassword("");
    }
  };
  const handleLimpar = (evt) => {
    evt.preventDefault();
    setUser("");
    setPassword("");
  };
  return (
    <div className="content">
      <Mensagem />
      <div class="card text">
        <img src={logo} alt="logotipo" className="logof" />
        <div>
          <h1 className="msgsin"> Digite suas credenciais </h1>
          <form className="formulario">
            <input
              value={user}
              onChange={(evt) => setUser(evt.target.value)}
              placeholder="Usuário"
            />
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
            <button onClick={handleSubmit} className="botaopa">
              Acessar Conta
            </button>
            <button onClick={handleLimpar} className="botaopa">
              Limpar Campos
            </button>
          </form>
        </div>
        <Link to="/signup" className="linkpa">
          Efetuar cadastro no sítio
        </Link>
        <Link to="/" className="linkpa">
          {" "}
          Retornar a Página Inicial
        </Link>
      </div>
    </div>
  );
}
