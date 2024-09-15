import { Carousel } from "react-bootstrap";
import img1 from "../../assets/2a.png";
import img2 from "../../assets/2b.png";
import img3 from "../../assets/2c.png";
import "./styles.css";

export default function Carrosselusina() {
  return (
    <Carousel className="carrossel" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Usina Hidrelétrica de Porto Primavera"
        />
        <Carousel.Caption className="carropt">
          <h3> Usina Hidrelétrica de Porto Primavera </h3>
          <p className="sub"> Rosana - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Usina Hidrelétrica de Porto Primavera"
        />
        <Carousel.Caption className="carropt">
          <h3> Usina Hidrelétrica de Porto Primavera </h3>
          <p className="sub"> Rosana - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Usina Hidrelétrica de Porto Primavera"
        />
        <Carousel.Caption className="carropt">
          <h3> Usina Hidrelétrica de Porto Primavera </h3>
          <p className="sub"> Rosana - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mapai">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9842.535629515047!2d-52.95778391622979!3d-22.474701112944388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6becf8510abd8a9!2sUsina%20Hidrel%C3%A9trica%20Porto%20Primavera!5e0!3m2!1spt-BR!2sbr!4v1670083949096!5m2!1spt-BR!2sbr"
          className="mapap"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Carousel.Caption className="carropt">
          <h3> Usina Hidrelétrica de Porto Primavera </h3>
          <p className="sub"> Rosana - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
