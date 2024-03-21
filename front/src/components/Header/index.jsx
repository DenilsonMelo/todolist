import { useState } from "react";
import { Container, ContainerContent } from "./styles";
import NewTodoModal from "../NewTodoModal";

export default function Header({ addTodo }) {
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
      <NewTodoModal 
        isOpen={modalNewTodo} 
        onRequestClose={handleCloseModalNewTodo}
        addTodo={addTodo} 
      />
    </>
  );
}
