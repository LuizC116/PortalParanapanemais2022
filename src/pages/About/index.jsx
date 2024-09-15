import { Table, Accordion } from "react-bootstrap";
import eu from "../../assets/eu.png";
import whatsapp from "../../assets/whatsapp.png";
import telefone from "../../assets/telefone.png";
import instagram from "../../assets/instagram.png";
import email from "../../assets/email.png";

import "./styles.css";

export default function About() {
  return (
    <div className="margem">
      <div className="mx-auto mt-3 mb-3 card text">
        <h1 className="card-tittle"> Sobre mim </h1>
        <div className="flex">
          <img src={eu} alt="banner" className="fotoeu" />
          <div className="pad"> </div>
          <p className="paragrafosobre">
            Olá, me chamo Luiz Carlos Lucas Júnior e sou o autor desse sítio.
            <br />
            <br />
            Nasci no dia 7 de Outubro de 2005, e tenho 17 anos. Moro em Marabá
            Paulista, São Paulo, porém viajo todo dia para a escola que
            frequento em Presidente Venceslau, a Etec Professor Milton Gazzetti,
            estou no 2º ano do curso de Informática integrado ao Ensino Médio e
            realizei esse site como menção do componente de Programação para a
            Web 1, administrado pelo professor Graziani Zanfolin.
            <br />
            <div className="pad"> </div>
            <span className="listit">Perguntas e Respostas:</span>
            <div className="pad"> </div>
            <br />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  “Onde posso entrar em contato com você?”
                </Accordion.Header>
                <Accordion.Body>
                  Você pode entrar em contato comigo pelos seguintes meios:
                  <br />
                  <table className="tablefull">
                    <tr>
                      <td className="fileira2">
                        <div className="icone2">
                          <a
                            href="https://wa.me/5518997939190?text=Olá!"
                            className="linkabout"
                          >
                            <img
                              src={whatsapp}
                              alt="whatsapp"
                              className="imgico"
                            />
                            <span> Whatsapp</span>
                          </a>
                        </div>
                      </td>
                      <td className="fileira2">
                        <div className="icone2">
                          <a
                            href="https://www.instagram.com/lcljucas116/"
                            className="linkabout"
                          >
                            <img
                              src={instagram}
                              alt="instagram"
                              className="imgico"
                            />
                            <span> Instagram</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="fileira2">
                        <div className="icone2">
                          <a
                            href="mailto:luiz.lucas4@etec.gov.sp.br"
                            className="linkabout"
                          >
                            <img
                              src={email}
                              alt="Correio Eletrônico"
                              className="imgico"
                            />
                            <span> Correio Eletrônico</span>
                          </a>
                        </div>
                      </td>
                      <td className="fileira2">
                        <div className="icone2">
                          <a href="tel:+5518997939190" className="linkabout">
                            <img
                              src={telefone}
                              alt="telefone"
                              className="imgico"
                            />
                            <span> Telefone</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  “Porque escolheu esse tema?”
                </Accordion.Header>
                <Accordion.Body>
                  Escolhi esse tema pois era um tema que envolvia dois
                  componentes curriculares que eu me sinto atraído, no caso,
                  Geografia e História(que foram incorporados no sítio por meio
                  das localizações geográficas, e história da região
                  respectivamente), além disso, é um tema que não havia sido
                  realizado antes em turmas anteriores, com poucas e esparsas
                  informações disponíveis na internet, então decidi uni-las em
                  um lugar só como parte do projeto.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  “Qual é o significado do nome do Sítio?”
                </Accordion.Header>
                <Accordion.Body>
                  O nome <i>“Portal Paranapanemais”</i> foi escolhido em
                  homenagem ao nome da região, <i>“Pontal do Paranapanema”</i>,
                  o nome do sítio pode ser separado em dois elementos:
                  <br />
                  <br />• O primeiro deles é a palavra <i>“Portal”</i>, foi
                  escolhida por sua similaridade com a palavra <i>“Pontal”</i>,
                  além do seu significado, na linguagem da internet, um portal
                  quer dizer um sítio na rede criado para aglomerar informações
                  de várias fontes diferentes, que requerem acesso via login,
                  assim como esse trabalho.
                  <br />
                  <br />• A segunda parte, <i>“Paranapanemais”</i>, é a junção
                  de duas palavras, <i>“Paranapanema”</i> da região, e a palavra{" "}
                  <i>“mais”</i>, para mostrar que há mais conteúdo no Sítio, e
                  para refletir as tendências de companhias no mundo da
                  tecnologia que acrescentam o sufixo <i>“plus”</i> em seus
                  produtos, para mostrar maior refinamento, e para simbolizar
                  uma experiência de qualidade <i>“premium”</i>.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  “Quais foram as ferramentas utilizadas na produção desse
                  projeto?”
                </Accordion.Header>
                <Accordion.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Aplicativo</th>
                        <th>Utilidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Adobe Photoshop 2020 CC</td>
                        <td>Edição de Imagens.</td>
                      </tr>
                      <tr>
                        <td>CodeSandbox</td>
                        <td>Ambiente de Desenvolvimento.</td>
                      </tr>
                      <tr>
                        <td>QGIS Desktop</td>
                        <td>Edição de dados de Georreferenciamento</td>
                      </tr>
                      <tr>
                        <td>Google Earth</td>
                        <td>Plataforma de montagem de mapas.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
