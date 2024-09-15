import { Carousel } from "react-bootstrap";
import img1 from "../../assets/1ff.png";
import img2 from "../../assets/2ff.png";
import img3 from "../../assets/3ff.png";
import img4 from "../../assets/4ff.png";
import img5 from "../../assets/5ff.png";
import img6 from "../../assets/6ff.png";
import "./styles.css";

export default function Carrosselfauflo() {
  return (
    <Carousel className="carrossel" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Onça Pintada" />
        <Carousel.Caption className="carropt">
          <h3> Onça Pintada </h3>
          <p className="sub"> Fauna e Flora </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Capivara" />
        <Carousel.Caption className="carropt">
          <h3> Capivara </h3>
          <p className="sub"> Fauna e Flora </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Tamanduá" />
        <Carousel.Caption className="carropt">
          <h3> Tamanduá </h3>
          <p className="sub"> Fauna e Flora </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Mico-leão-preto" />
        <Carousel.Caption className="carropt">
          <h3> Mico-leão-preto </h3>
          <p className="sub"> Fauna e Flora </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Vegetação da reserva do Morro do Diabo "
        />
        <Carousel.Caption className="carropt">
          <h3> Vegetação da reserva do Morro do Diabo </h3>
          <p className="sub"> Fauna e Flora </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt=" Florestas estacionais caducifólias"
        />
        <Carousel.Caption className="carropt">
          <h3> Florestas estacionais caducifólias </h3>
          <p className="sub"> Fauna e Flora </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
