import { Carousel } from "react-bootstrap";
import img1 from "../../assets/carromain1.png";
import img2 from "../../assets/carromain2.png";
import img3 from "../../assets/carromain3.png";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Carrosselmain() {
  return (
    <Carousel className="carrossel" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="História" />
        <Carousel.Caption className="carromens">
          <h3> História </h3>
          <p className="sub"> A História da Região. </p>
          <Link to="/historia" className="linkcr">
            {" "}
            Conferir
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Fauna e Flora" />
        <Carousel.Caption className="carromens">
          <h3> Fauna e Flora </h3>
          <p className="sub"> A biodiversidade da Região. </p>
          <Link to="/faunaflora" className="linkcr">
            {" "}
            Conferir
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Pontos Turísticos" />
        <Carousel.Caption className="carromens">
          <h3> Pontos Turísticos </h3>
          <p className="sub"> Os principais pontos turísticos para visitar. </p>
          <Link to="/pturisticos" className="linkcr">
            {" "}
            Conferir
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
