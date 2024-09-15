import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Cardptur() {
  return (
    <Card className="fundcardptur">
      <Card.Body className="cbody">
        <Card.Title className="cart">Pontos Turísticos</Card.Title>
        <Card.Text className="subcart">
          Os principais pontos turísticos para visitar.
        </Card.Text>
        <Link to="/pturisticos" className="linkcr2">
          {" "}
          Conferir
        </Link>
      </Card.Body>
    </Card>
  );
}
