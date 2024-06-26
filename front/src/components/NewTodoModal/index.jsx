import Modal from "react-modal";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { ButtonIcon, Form } from "./styles";
import { useState } from "react";

export default function NewTodoModal({ isOpen, onRequestClose, addTodo }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      status,
    };

    try {
      const response = await fetch("http://localhost:8080/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      addTodo(json);
      notify();
    } catch (err) {
      throw new Error("Erro ao cadastrar uma todo: ", err);
    }

    onRequestClose();

    setTitle("");
    setDescription("");
    setStatus("");
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const notify = () => toast.success("Tarefa cadastrada com sucesso!");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ButtonIcon onClick={onRequestClose}>
          <FaTimes size={24} />
        </ButtonIcon>

        <h2>Nova tarefa</h2>

        <Form onSubmit={handleSubmit}>
          <span>Titulo</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <span>Descrição</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span>Status</span>
          <select
            name="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Selecionar</option>
            <option value="Não iniciado">Não iniciado</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluido">Concluido</option>
          </select>

          <button type="submit">CADASTRAR</button>
        </Form>
      </Modal>
      
    </>
  );
}
