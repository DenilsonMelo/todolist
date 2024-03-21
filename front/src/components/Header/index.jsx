import { useState } from "react";
import { Container, ContainerContent } from "./styles";
import NewTodo from "../NewTodo";

export default function Header() {
  const [modalNewTodo, setModalNewTodo] = useState(false);

  const handleOpenModalNewTodo = () => {
    setModalNewTodo(true);
  };

  const handleCloseModalNewTodo = () => {
    setModalNewTodo(false);
  };

  return (
    <>
      <Container>
        <ContainerContent>
          <h1>
            TodoList <span>by Newm</span>
          </h1>
          <button type="button" onClick={handleOpenModalNewTodo}>
            NOVA TAREFA
          </button>
        </ContainerContent>
      </Container>
      <NewTodo isOpen={modalNewTodo} onRequestClose={handleCloseModalNewTodo} />
    </>
  );
}
