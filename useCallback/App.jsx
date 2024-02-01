import { useCallback, useState } from 'react'
import './App.css'
import Todo from './compo/todo'

function App() {

  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const incre = () => {
    console.log("Count Updated");
    setCount(count + 1);
  }

  const addTodo = useCallback(() => {
    setTodo((prev) => {
      console.log("Todo Added");
      return [...prev, 'New Todo'];
    })
  }, [todo]);

  return (
    <>
      <Todo todo = {todo} addTodo = {addTodo} />
      <p>{count}</p>
      <button onClick={incre}>Increment</button>
    </>
  )
}

export default App
