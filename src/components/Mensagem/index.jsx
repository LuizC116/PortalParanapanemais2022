import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Mensagem() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <b>Atenção </b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          Para acessar determinadas partes do Sítio, é necessário iniciar uma
          sessão com uma conta.{" "}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="botaopa">
            {" "}
            Entendido{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
