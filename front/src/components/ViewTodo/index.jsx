import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import { InfoModal } from "./styles";
import { ButtonIcon } from "../NewTodoModal/styles";

export default function ViewTodo({ isOpen, onRequestClose, infoTodo }) {
    return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <ButtonIcon onClick={onRequestClose}>
        <FaTimes size={24} />
      </ButtonIcon>
      <InfoModal>
        <h3>{infoTodo.title}</h3>
        <p>{infoTodo.description}</p>
        <p>{infoTodo.status}</p>
      </InfoModal>
    </Modal>
  );
}
