import { Card, Accordion } from "react-bootstrap";
import bannerhistoria from "../../assets/bannerhistoria.png";
import plantafazenda from "../../assets/plantafazenda.png";
import Cardfauflo from "../../components/Cardfauflo/index";
import Cardptur from "../../components/Cardptur/index";
import "./styles.css";

export default function Hist() {
  return (
    <div className="margem">
      <div className="mx-auto mt-3 mb-3 card text">
        <h1 className="card-tittle"> História </h1>
        <img src={bannerhistoria} alt="banner" className="banner" />
        <p className="paragrafo">
          <br />
          A história da região começa com a inauguração da Lei de Terras em 18
          de Setembro de 1850, anterior a esta lei, toda ocupação de terras no
          Brasil não era registrada em documentação, e então todas passaram a
          ser consideradas devolutas, foi ai então que surgiram os "grileiros",
          proprietários de terras que se apossavam de terras devolutas após
          terem as adquirido nos papéis, um desses homens, Antônio José de
          Gouveia, registra no documento uma imensa porção de terras e batiza de
          "Fazenda Pirapó-Santo Anastácio", os limites delimitados pelo
          documento eram:
          <br />
          <br />
          <Card>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  "[...] os limites da fazenda vão desde a barranca do Rio
                  Paranapanema, seguindo por 10 léguas o Rio Paraná acima e
                  voltando-se para leste, pelas vertentes do Rio Pirapó, até
                  encontrar-se de novo com o Rio do Paranapanema."{" "}
                </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">
                    Grilo da Fazenda Pirapó-Santo Anastácio{" "}
                  </cite>
                </footer>
              </blockquote>
              <Card.Img variant="bottom" src={plantafazenda} />
            </Card.Body>
          </Card>
          <br />
          <br />
          Depois disso Antônio José Gouveia vendeu suas terras para Joaquim
          Alves de Lima, que após seu falecimento, as terras foram herdadas por
          seu filho João Evangelista de Lima, que tentou legitimar a posse das
          terras, contudo o governador da época e ex-Presidente, Prudente de
          Morais considerou a medição original inadequada e a anulou, porém,
          antes de decretar a sentença, João Evangelista se juntou com Manuel
          Pereira Goulart, e em 1890 assinaram uma permuta que dividia as terras
          e os dois passaram a controlá-las.
          <br />
          <br />
          Desesperado legitimar as terras, Goulart encaminhou uma petição ao
          Ministério da Agricultura, que solicitava permissão para receber
          colonos estrangeiros de outros países na propriedade, e foi-lhe
          concedido, então partilhou as terras, vendendo, trocando, e doando
          para esses imigrantes.
          <br />
          <br />
          Graças ao grande fluxo de novas populações na região, e a construção
          de uma linha ferroviária, as compras de terras da fazenda aumentaram
          exponencialmente, que apesar de vendidas, elas não eram ocupadas,
          proporcionando a oportunidade para intrusos invadirem, desde que
          possuíssem um titulo de propriedade falso.
          <br />
          <br />
          Para tomar previdências, seria necessário medir e dividir a
          propriedade, porém em 1930, o governo de São Paulo negou a partilha da
          Pirapó-Santo Anastácio, alegando que os titulos originais de posse
          foram falsificados, e consequentemente todos os titulos referentes ao
          imóvel realizados desde o registro original feito por Joaquim Alves de
          Lima em 14 de Maio de 1856, até a permuta assinada por João
          Evangelista de Lima e Manuel Pereira Goulart foram considerados falsos
          e nulos, nessas circunstâncias, as terras pertenciam ao Estado, por
          serem devolutas, e dois anos depois, a Secretaria da Agricultura do
          Estado emitiu uma nota oficial que fortemente desencorajava a compra
          de terras na região do Pontal do Paranapanema por serem devolutas.
          <br />
          <br />
          Entretanto isso não parou os compradores que migravam para o Oeste
          Paulista apenas para comprar terras onde os grileiros ofertavam e para
          assegurar o procedimento dessas atividades, eles apelavam
          incansavelmente contra as decisões judiciais do Estado, isso continuou
          até 1935.
          <br />
          <br />
          Na década de 1940, começou-se um grande trabalho de ocupação agrícola,
          muitas fazendas da região se apossavam de imigrantes para trabalhar
          sob a promessa de que poderiam produzir na área posteriormente, apenas
          para serem expulsos ou eliminados das terras, além de expulsar e
          devastar quase toda a população original de indígenas que viviam aqui.
          <br />
          <br />
          Essa expansão agrícola trouxe muitos problemas subsequentes como a
          erosão e o assoreamento, então na mesma década o governo do estado
          criou três reservas florestais para a preservação do meio ambiente,
          sendo elas a Lagoa São Paulo, Morro do Diabo e Grande Reserva do
          Pontal, porém, graças ao desmatamento intensivo que ocorreu até a
          década de 1960, apenas a reserva florestal Morro do Diabo resistiu.
          <br />
          <br />
          Com o passar do tempo, novos grileiros ocupavam a região do pontal,
          entre eles podemos citar Sebastião Camargo, que fundou o povoado de
          Rosana, nomeado em homenagem a sua filha.
          <br />
          <br />
          Em 1954, a Imobiliária e Colonizadora Camargo Correia lançou um edital
          de loteamento a respeito da então fundada Rosana, o que fez o Estado
          embargar os lotes na justiça, por serem terras devolutas, mas mesmo
          assim o dono da empresa não esperou e vendeu os lotes de qualquer
          forma.
          <br />
          <br />
          Enquanto isso, na Assembleia Legislativa, iniciou-se a batalha a
          respeito do Pontal de Paranapanema, enquanto alguns deputados eram
          simpatizantes dos grileiros e queriam abolir os decretos das reservas
          florestais, outros deputados já acreditavam que era necessário a
          manutenção daquelas áreas por serem de interesse público.
          <br />
          <br />
          No fim, a grilagem foi o principal elemento estruturador da região do
          Pontal do Paranapanema, apesar de continuar sendo motivo de muitos
          conflitos agrários nas décadas seguintes.
          <br />
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Veja Também:</Accordion.Header>
              <Accordion.Body>
                <Cardfauflo />
                <br />
                <Cardptur />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </p>
      </div>
    </div>
  );
}
