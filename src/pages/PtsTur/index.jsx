import "./styles.css";
import { Accordion } from "react-bootstrap";
import bannerpturisticos from "../../assets/bannerpturisticos.png";
import Carrosselrosana from "../../components/CarrosselP1/index";
import Carrosselusina from "../../components/CarrosselP2/index";
import Carrosselmorro from "../../components/CarrosselP3/index";
import Carrosselcorrego from "../../components/CarrosselP4/index";
import Carrosselfigueiral from "../../components/CarrosselP5/index";
import Cardfauflo from "../../components/Cardfauflo/index";
import Cardhist from "../../components/Cardhist/index";

export default function Ptstur() {
  return (
    <div className="margem">
      <div className="mx-auto mt-3 mb-3 card text">
        <h1 className="card-tittle"> Pontos Turísticos </h1>
        <img src={bannerpturisticos} alt="banner" className="bannermain" />
        <p className="paragrafo">
          O Pontal do Paranapanema também reside vários pontos turísticos e
          atrações para a toda a família, alguns são naturais, outros são obra
          de mãos humanas, mas todos unicamente especiais!
          <br />
          <br />
          <span className="listit">Balneário de Rosana</span>
          <br />
          <br />
          O balneário do município de Rosana é um lugar perfeito para se banhar
          nas águas do Rio Parana, além de ter a opção de acampar na praia,
          também é possível pagar uma linda balça para a Ilha Jurerê no meio do
          rio!
          <br />
          <Carrosselrosana />
          <br />
          <span className="listit">Usina Hidrelétrica de Porto Primavera</span>
          <br />
          <br />
          Também conhecida como Usina Hidrelétrica Engenheiro Sérgio Motta,
          localizada em Rosana, entrou em operação em 2003 e possui a barragem
          mais extensa do Brasil, tem 10.186,20 m de comprimento e seu
          reservatório, 2.250 km² , ela conta com 10 unidades geradoras em
          funcionamento, produzindo 1.008 megawatts de energia, que é
          distribuída pelo estado inteiro, agende já sua visita!
          <br />
          <br />
          <Carrosselusina />
          <br />
          <span className="listit">Parque Estadual do Morro do Diabo</span>
          <br />
          <br />
          O Parque Estadual do Morro do Diabo foi inaugurado em 1986, que
          anteriormente servia como uma Reserva Estadual, está localizado no
          município de Teodoro Sampaio, e tem o objetivo de preservar 34 mil
          hectares da cobertura original da Mata Atlântica, nela vivem espécies
          altamente ameaçadas graças ao desmatamento, em destaque o mico-leão
          preto que é endêmico da região, e outras espécies que você pode
          conferir nas trilhas do parque, agende sua visita!
          <br />
          <br />
          <Carrosselmorro />
          <br />
          <span className="listit">Reserva Florestal Córrego do Veado</span>
          <br />
          <br />
          Não para ser confundido com a reserva de mesmo nome de Pinheiros no
          Espiríto Santo, localizado no Município de Presidente Epitácio, a
          reserva florestal do Córrego do Veado está localizada na foz do
          córrego de mesmo nome, possuí dez mil quilômetros, sua maior
          característica é a vegetação transitória entre Mata Atlântica e do
          Cerrado, podemos ver isso em plantas como o Jatobá, Canelinha,
          Quixabeira, e Mandacaru, além de abrigar um projeto de reflorestamento
          de espécies raras, aqui também foi encontrado um sítio arqueológico
          dos índios Caiuá datado a mais de dois mil anos atrás, venha conferir!
          <br />
          <br />
          <Carrosselcorrego />
          <br />
          <span className="listit">Parque Figueiral</span>
          <br />
          <br />
          O Parque municipal de Presidente Epitácio, também conhecido como
          Parque Figueiral, localizado 5 quilômetros na cidade, o parque é uma
          ótima escolha para descontrair nos finais de semana e feriados, a
          praia é banhada pela água doce do Rio Parana, e oferece restaurantes e
          lanchonetes, banheiros públicos, uma quadra poliesportiva e um campo
          de areia, além de uma área de recreação garantem muita diversão para
          toda a família!
          <br />
          <br />
          <Carrosselfigueiral />
          <br />
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Veja Também:</Accordion.Header>
              <Accordion.Body>
                <Cardfauflo />
                <br />
                <Cardhist />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </p>
      </div>
    </div>
  );
}
