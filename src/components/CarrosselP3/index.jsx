import { Carousel } from "react-bootstrap";
import img1 from "../../assets/3a.png";
import img2 from "../../assets/3b.png";
import "./styles.css";

export default function Carrosselmorro() {
  return (
    <Carousel className="carrossel" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Morro do Diabo" />
        <Carousel.Caption className="carropt">
          <h3> Parque Estadual do Morro do Diabo </h3>
          <p className="sub"> Teodoro Sampaio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Morro do Diabo" />
        <Carousel.Caption className="carropt">
          <h3> Parque Estadual do Morro do Diabo </h3>
          <p className="sub"> Teodoro Sampaio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mapai">
        <iframe
          className="mapap"
          src="https://www.youtube.com/embed/2PDA-TTMgoY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Carousel.Caption className="carropt">
          <h3> Parque Estadual do Morro do Diabo </h3>
          <p className="sub"> Teodoro Sampaio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mapai">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14741.358168056586!2d-52.2974988!3d-22.5289501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe55ed9546648fa35!2sParque%20Estadual%20do%20Morro%20do%20Diabo!5e0!3m2!1spt-BR!2sbr!4v1670086382552!5m2!1spt-BR!2sbr"
          className="mapap"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Carousel.Caption className="carropt">
          <h3> Parque Estadual do Morro do Diabo </h3>
          <p className="sub"> Teodoro Sampaio - SP </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
