import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { ButtonIcon, Container } from "./styles";
import { useState } from "react";
import ViewTodo from "../ViewTodo";
import { toast } from "react-toastify";

export default function TodoList({ todo, removeTodo }) {
  const [modalViewTodo, setModalViewTodo] = useState(false);
  const [infoTodo, setInfoTodo] = useState("");

  function handleOpenModalViewTodo(todo) {
    setModalViewTodo(true);
    setInfoTodo(todo);
  }

  function handleCloseModalViewTodo() {
    setModalViewTodo(false);
  }

  async function handleRemoveTodo(id) {
    try {
      await fetch(`http://localhost:8080/todo/${id}`, {
        method: "DELETE",
      });
      removeTodo(id);
      notify();
    } catch (err) {
      throw new Error("erro: ", err);
    }
  }

  const notify = () => toast.success("Tarefa removida com sucesso!");

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {todo.length ? (
              todo.map((todo) => (
                <tr key={todo.id}>
                  <td data-label="Titulo">{todo.title}</td>
                  <td data-label="Descrição">{todo.description}</td>
                  <td data-label="Status">{todo.status}</td>
                  <td>
                    <ButtonIcon onClick={() => handleOpenModalViewTodo(todo)}>
                      <FaEye />
                    </ButtonIcon>
                    |
                    <ButtonIcon onClick={() => handleRemoveTodo(todo.id)}>
                      <FaRegTrashAlt />
                    </ButtonIcon>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <p style={{ textAlign: "center" }}>
                    Você ainda não possui tarefas!
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
      <ViewTodo
        isOpen={modalViewTodo}
        onRequestClose={handleCloseModalViewTodo}
        infoTodo={infoTodo}
      />
    </>
  );
}
