import Mensagemdev from "../Mensagemdev/index";
import { Container, Form, Card } from "react-bootstrap";
import cadEmail from "../../assets/cademail.png";
import "./styles.css";

export default function FaixaEmail() {
  return (
    <div className="finteiro">
      <Container className="cadcont">
        <div>
          <img src={cadEmail} alt="Email" className="iconcademail" />
        </div>
        <div>
          <Container>
            <Form>
              <Form.Group className="subem" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="exemplo@gmail.com" />
                <Form.Text className="text-muted">
                  Insira o seu correio eletrônico para receber as últimas
                  notícias do Portal!
                </Form.Text>
              </Form.Group>
            </Form>
            <Mensagemdev />
          </Container>
        </div>
      </Container>
    </div>
  );
}
