import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Cardfauflo() {
  return (
    <Card className="fundcardff">
      <Card.Body className="cbody">
        <Card.Title className="cart">Fauna e Flora</Card.Title>
        <Card.Text className="subcart">A biodiversidade da Região.</Card.Text>
        <Link to="/faunaflora" className="linkcr2">
          {" "}
          Conferir
        </Link>
      </Card.Body>
    </Card>
  );
}
