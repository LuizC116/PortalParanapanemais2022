import { Carousel } from "react-bootstrap";
import img1 from "../../assets/5a.png";
import img2 from "../../assets/5b.png";
import "./styles.css";

export default function Carrosselfigueiral() {
  return (
    <Carousel className="carrossel" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Balneário de Rosana" />
        <Carousel.Caption className="carropt">
          <h3> Parque Figueiral </h3>
          <p className="sub"> Presidente Epitácio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Balneário de Rosana" />
        <Carousel.Caption className="carropt">
          <h3> Parque Figueiral </h3>
          <p className="sub"> Presidente Epitácio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mapai">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14824.602097708388!2d-52.0609511!3d-21.7356894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8558035547f886d!2sParque%20O%20Figueiral!5e0!3m2!1spt-BR!2sbr!4v1670091171989!5m2!1spt-BR!2sbr"
          className="mapap"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Carousel.Caption className="carropt">
          <h3> Parque Figueiral </h3>
          <p className="sub"> Presidente Epitácio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
