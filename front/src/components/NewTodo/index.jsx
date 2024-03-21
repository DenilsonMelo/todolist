import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Form } from "./styles";

export default function NewTodo({ isOpen, onRequestClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button onClick={onRequestClose}>
        <FaTimes size={24} />
      </button>

      <h2>Nova tarefa</h2>

      <Form onSubmit={handleSubmit}>
        <span>Titulo</span>
        <input />
        <span>Descrição</span>
        <textarea />
        <span>Status</span>
        <select name="select">
          <option value="Não iniciado">Não iniciado</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluido">Concluido</option>
        </select>

        <button type="submit">CADASTRAR</button>
      </Form>
    </Modal>
  );
}
