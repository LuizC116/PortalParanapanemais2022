import { Carousel } from "react-bootstrap";
import img1 from "../../assets/4a.png";
import img2 from "../../assets/4b.png";
import img3 from "../../assets/4c.png";
import "./styles.css";

export default function Carrosselcorrego() {
  return (
    <Carousel className="carrossel" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Córrego do Veado" />
        <Carousel.Caption className="carropt">
          <h3> Reserva Florestal Córrego do Veado </h3>
          <p className="sub"> Teodoro Sampaio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Córrego do Veado" />
        <Carousel.Caption className="carropt">
          <h3> Reserva Florestal Córrego do Veado </h3>
          <p className="sub"> Presidente Epitácio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Córrego do Veado" />
        <Carousel.Caption className="carropt">
          <h3> Reserva Florestal Córrego do Veado </h3>
          <p className="sub"> Presidente Epitácio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mapai">
        <iframe
          className="mapap"
          src="https://www.youtube.com/embed/JjKvNJym8L8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Carousel.Caption className="carropt">
          <h3> Reserva Florestal Córrego do Veado </h3>
          <p className="sub"> Presidente Epitácio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mapai">
        <iframe
          className="mapap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19984.040903660352!2d-52.013259232727044!3d-21.69556249120243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81c37ca219de8a8c!2zMjHCsDQyJzQ5LjEiUyA1MsKwMDEnMzMuNSJX!5e1!3m2!1spt-BR!2sus!4v1670087812756!5m2!1spt-BR!2sus"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Carousel.Caption className="carropt">
          <h3> Reserva Florestal Córrego do Veado </h3>
          <p className="sub"> Presidente Epitácio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
