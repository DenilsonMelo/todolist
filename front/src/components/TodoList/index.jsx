import { Container } from "./styles";

export default function TodoList({ todo }) {
  return (
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
  );
}
