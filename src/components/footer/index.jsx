import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import email from "../../assets/email.png";
import FaixaEmail from "../Caixaemail/index";

export default function Footer() {
  return (
    <>
      <Navbar className="footer" variant="dark">
        <Container className="limf">
          <Container className="cred">
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Brand as={Link} to="/about" className="botf">
              <h1 className="ftexto">Portal Paranapanemais </h1>
              <h2 className="ftexto2">
                Etec Professor Milton Gazzetti - Presidente Venceslau
              </h2>
              <h2 className="ftexto2">Luiz Carlos Lucas Júnior</h2>
              <h2 className="ftexto2">2022</h2>
            </Navbar.Brand>
            <Navbar.Brand className="compartilhe">
              <span>Compartilhe:</span>
            </Navbar.Brand>
            <div className="cred2">
              <Navbar.Brand className="icone">
                <a href="https://api.whatsapp.com/send?text=https://o0veqx.csb.app/">
                  <img src={whatsapp} alt="whatsapp" className="icons" />
                </a>
              </Navbar.Brand>
              <Navbar.Brand className="icone">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://o0veqx.csb.app/">
                  <img src={facebook} alt="facebook" className="icons" />
                </a>
              </Navbar.Brand>
              <Navbar.Brand className="icone">
                <a href="https://twitter.com/share?url=https://o0veqx.csb.app/&text=Eu+Visitei+o+Portal+Paranapanemais,+venha+conferir!">
                  <img src={twitter} alt="twitter" className="icons" />
                </a>
              </Navbar.Brand>
              <Navbar.Brand className="icone">
                <a href="mailto:?subject=Venha Visitar o Portal Paranapanemais!&body=Eu visitei o Portal Paranapanemais, Venha conferir!:https://o0veqx.csb.app/">
                  <img src={email} alt="email" className="icons" />
                </a>
              </Navbar.Brand>
            </div>
          </Container>
          <Container className="colu">
            <h1 className="ftexto3"> Cadastre o seu Correio Eletrônico </h1>
            <FaixaEmail />
          </Container>
        </Container>
      </Navbar>
    </>
  );
}
