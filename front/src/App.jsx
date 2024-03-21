import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header'
import TodoList from './components/TodoList';
import GlobalStyles from './styles/GlobalStyles';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback((newTodo) =>{
    setTodo(state => [...state, newTodo])
  }, []);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch('http://localhost:8080/todo')
        const data = await response.json();
        setTodo(data);
      } catch(err) {
        throw new Error("erro: ", err);
      }
    }

    fetchData();
  }, [])

  console.log(todo);
  return (
    <>
       <GlobalStyles />
       <Header addTodo={addTodo}/>
       <div className='container'>
        <TodoList todo={todo}/>
       </div>
    </>
  )
}

export default App
