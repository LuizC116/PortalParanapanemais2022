import "./styles.css";
import "../../global.css";
import bannermain from "../../assets/bannermain.png";
import Carrosselmain from "../../components/Carrossel/index";

export default function Main() {
  return (
    <div className="margem">
      <div className="mx-auto mt-3 mb-3 card text">
        <h1 className="card-tittle"> Página Príncipal </h1>
        <img src={bannermain} alt="banner" className="banner" />
        <p className="paragrafo">
          <br />
          Bem-vindo ao Portal Paranapanemais, o seu site de turismo da região do
          Pontal de escolha.
          <br />
          <br />
          <br />
          Localizada no Interior do estado de São Paulo, a região do Pontal do
          Paranapanema possuí 18.844,60 km² de extensão, abrangendo 32
          municípios, com sua população somada em 583 mil habitantes em seu
          território, destes, 90% vivem em áreas urbanas segundo o Censo do IBGE
          realizado em 2010.
          <br />
          <br />
          <div class="map-responsive">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1AvEq7lf635BfrrGoYU_FXMF8L2BwZds&ehbc=2E312F"></iframe>
          </div>
          <div className="mapat"> </div>
          <br />
          O território é cercado pelos estados do Mato Grosso do Sul ao oeste, e
          do Paraná ao sul, e é banhado pelo epônimo Rio Paranapanema, que
          delimita as fronteiras do estado, e é uma das mais importantes bacias
          hidrográficas do Sudeste Brasileiro. <br />
          <br />
          No pontal as atividades predominantes variam do setor, no setor
          terciário predomina o comércio e prestação de serviços, poucos e
          pequenas indústrias no setor secundário e no setor primário, e
          pequenos produtores rurais com ênfase na criação de gado
          leiteiro(pecuária), e hortifrúti no setor terciário.
          <br />
          <br />
          Visite as nossas páginas sobre a região:
          <br />
          <br />
          <Carrosselmain />
        </p>
      </div>
    </div>
  );
}
