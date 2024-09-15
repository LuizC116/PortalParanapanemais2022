import { Carousel } from "react-bootstrap";
import img1 from "../../assets/1a.png";
import img2 from "../../assets/1c.png";
import "./styles.css";

export default function Carrosselrosana() {
  return (
    <Carousel className="carrossel" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Balneário de Rosana" />
        <Carousel.Caption className="carropt">
          <h3> Balneário de Rosana </h3>
          <p className="sub"> Rosana - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Balneário de Rosana" />
        <Carousel.Caption className="carropt">
          <h3> Balneário de Rosana </h3>
          <p className="sub"> Rosana - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mapai">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2008.8212666005554!2d-53.064513283303064!3d-22.57183251404607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948dc1ea50c3635b%3A0x8f7c39d3da2e4577!2sBalneario%20de%20Rosana%20SP!5e0!3m2!1spt-BR!2sbr!4v1670039247706!5m2!1spt-BR!2sbr"
          className="mapap"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Carousel.Caption className="carropt">
          <h3> Balneário de Rosana </h3>
          <p className="sub"> Rosana - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
