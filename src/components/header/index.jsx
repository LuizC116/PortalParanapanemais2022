import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";
import logo from "../../assets/logotipo.png";
import principal from "../../assets/principal.png";
import historia from "../../assets/historia.png";
import florafauna from "../../assets/florafauna.png";
import pturisticos from "../../assets/pturisticos.png";
import tpedagogico from "../../assets/tpedagogico.png";
import sobre from "../../assets/sobre.png";
import conteudo from "../../assets/conteudo.png";
import fotoperfil from "../../assets/fotoperfil.png";
import "./styles.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas
} from "react-bootstrap";

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"
          className="headerfixo"
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="logotipo">
              <img src={logo} alt="logotipo" className="logotipo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanv"
            >
              <Offcanvas.Header
                closeButton
                closeVariant="white"
              ></Offcanvas.Header>
              <Offcanvas.Body>
                <Navbar.Collapse>
                  <Nav className="me-auto my-2 my-lg-0">
                    <NavDropdown
                      title={
                        <span>
                          <img
                            src={conteudo}
                            alt="pagina principal"
                            className="emojis"
                          />
                          Conteúdo
                        </span>
                      }
                      style={{ maxHeight: "500px" }}
                      menuVariant="dark"
                      className="drop"
                    >
                      <NavDropdown.Item as={Link} to="/" className="dropit">
                        <img
                          src={principal}
                          alt="pagina principal"
                          className="emojis"
                        />
                        Página Principal
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        as={Link}
                        to="/historia"
                        className="dropit"
                      >
                        <img src={historia} alt="historia" className="emojis" />
                        História
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/faunaflora"
                        className="dropit"
                      >
                        <img
                          src={florafauna}
                          alt="fauna e flora"
                          className="emojis"
                        />
                        Fauna e Flora
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/pturisticos"
                        className="dropit"
                      >
                        <img
                          src={pturisticos}
                          alt="pontos turísticos"
                          className="emojis"
                        />
                        Pontos Turísticos
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/about">
                      <img src={sobre} alt="sobre mim" className="emojis" />
                      Sobre Mim
                    </Nav.Link>
                    <Nav.Link as={Link} to="/tema">
                      <img
                        src={tpedagogico}
                        alt="tema pedagógico"
                        className="emojis"
                      />
                      Tema Pedagógico
                    </Nav.Link>
                  </Nav>
                  <Navbar.Brand className="perfildiv">
                    {user?.id ? (
                      <>
                        {" "}
                        <img
                          src={fotoperfil}
                          alt="foto de perfil"
                          className="fperfil"
                        />
                        <div className="overflow">
                          <Navbar.Brand className="nomeusu">
                            {" "}
                            {user.usu_nome}
                          </Navbar.Brand>
                          <button onClick={signOut} className="botaohead">
                            {" "}
                            Sair{" "}
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="overflow">
                        <Navbar.Brand className="nomeusu">
                          Modo Visitante
                        </Navbar.Brand>
                        <button
                          onClick={() => navigate("/signin")}
                          className="botaohead"
                        >
                          {" "}
                          Entrar{" "}
                        </button>
                      </div>
                    )}
                  </Navbar.Brand>
                </Navbar.Collapse>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/*<Nav>
              {user?.id ? (
                <>
                  {" "}
                  <Navbar.Brand> Olá, {user.usu_nome} </Navbar.Brand>
                  <button onClick={signOut}> Sair </button>
                </>
              ) : (
                <button onClick={() => navigate("/signin")}> Entrar </button>
              )}
              </Nav>*/}
          </Container>
        </Navbar>
      ))}
    </>
  );
}
