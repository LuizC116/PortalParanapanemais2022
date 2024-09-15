import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./styles.css";

export default function Cartoes() {
  return (
    <Row className="fileira">
      <Col>
        <Card className="cardoej">
          <Card.Body>
            <Card.Title className="cardtit">Objetivo</Card.Title>
            <Card.Text className="cardt">
              Este sítio foi criado com o princípio de criar um guia de viagens
              da região do Pontal do Paranapanema de São Paulo
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="cardoej">
          <Card.Body>
            <Card.Title className="cardtit">Escopo</Card.Title>
            <Card.Text className="cardt">
              Um Guia Turístico da região, realçando os pontos turísticos,
              culturas, e economia das principais cidades
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="cardoej">
          <Card.Body>
            <Card.Title className="cardtit">Justificativa</Card.Title>
            <Card.Text className="cardt">
              Esse tema foi escolhido para o sítio com intenção de trazer mais
              atenção para a região do pontal, e reunir as principais
              informações
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
