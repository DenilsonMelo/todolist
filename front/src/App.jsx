import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'

function App() {
  const [todo, setTodo] = useState([]);

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
       <Header />
    </>
  )
}

export default App
