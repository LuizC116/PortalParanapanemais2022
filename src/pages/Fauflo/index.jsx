import { Alert, Accordion } from "react-bootstrap";
import Carrosselfauflo from "../../components/CarrosselFF/index";
import bannerfauflo from "../../assets/bannerfauflo.png";
import Cardhist from "../../components/Cardhist/index";
import Cardptur from "../../components/Cardptur/index";
import "./styles.css";

export default function Fauflo() {
  return (
    <>
      <div className="margem">
        <div className="mx-auto mt-3 mb-3 card text">
          <h1 className="card-tittle"> Fauna e Flora </h1>
          <img src={bannerfauflo} alt="banner" className="banner" />
          <p className="paragrafo">
            <br />
            A região do Pontal faz parte do bioma da Mata Atlântica, mais
            especificamente, a Mata Atlântica do interior.
            <br /> O clima é marcado uma dupla estacionalidade climática, com
            períodos de chuva acentuados seguidos por um tempo de estiagem, no
            geral, temperaturas variam entre 12 °C à 24 °C nas estações mais
            frias, e 25 °C e acima nas estações mais quentes.
            <br />
            <Alert variant="warning w-100 mx-auto m-3">
              {" "}
              <details>
                <summary>Importante...</summary>
                <br />
                Para a informação do leitor, vale ressaltar que mais de 70% da
                cobertura original da Mata Atlântica foi removida em prol das
                atividades agrícolas na região, deixando muitas espécies
                desabrigadas e na beira da extinção, como foi caso do
                Mico-leão-preto.
                <br />
                <br />A atividade agrícola, e o desenvolvimento das indústrias e
                centros urbanos continua sendo um dos maiores problemas
                ecológicos para a região do estado de São Paulo.
              </details>
            </Alert>
            Outra característica que chama atenção da Mata Atlântica é a sua
            imensa biodiversidade, e no pontal isso não é menos aparente,
            podemos observar uma grande diversidade na fauna, como antas,
            onças-pintadas, capivaras, corujas, queixadas, papagaios, tucanos,
            pumas, e bugios, além do ícone do pontal, o mico-leão-preto.
            <br />
            <br />A flora do Pontal do Paranapanema também impressiona, até 50%
            da vegetação é classificado como caducifólia, ou seja, suas folhas
            secam e caem nas estações mais frias, para nascer de novo na
            primavera, assim deixando as paisagens dos períodos secos e chuvosos
            bem marcados. Hoje o pontal é referência em preservação da mata no
            estado, possui a maior reserva ambiental do país, o "Morro do
            Diabo", além de possuir 84% da mata original de todo o Planalto
            Paulista.
            <br />
            <br />
            <Carrosselfauflo />
            <br />
            <br />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Veja Também:</Accordion.Header>
                <Accordion.Body>
                  <Cardhist />
                  <br />
                  <Cardptur />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </p>
        </div>
      </div>
    </>
  );
}
