import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Cardhist() {
  return (
    <Card className="fundcardh">
      <Card.Body className="cbody">
        <Card.Title className="cart">História</Card.Title>
        <Card.Text className="subcart">A História da Região.</Card.Text>
        <Link to="/historia" className="linkcr2">
          {" "}
          Conferir
        </Link>
      </Card.Body>
    </Card>
  );
}
