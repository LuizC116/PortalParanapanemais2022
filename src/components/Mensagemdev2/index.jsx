import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Mensagemdev2() {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <button onClick={handleOpen} className="linkpa">
        {" "}
        Criar Conta{" "}
      </button>
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <b>Atenção </b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          O sistema de cadastros não está implementado ainda.{" "}
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
