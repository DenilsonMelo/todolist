import { Container, ContainerContent } from "./styles";

export default function Header(){
    return(
        <Container>
            <ContainerContent>
                <h1>TodoList <span>by Newm</span></h1>
                <button>NOVA TAREFA</button>
            </ContainerContent>
        </Container>
    )
}