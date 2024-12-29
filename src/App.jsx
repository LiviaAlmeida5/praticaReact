import { useState } from 'react'
import "./App.css";

import TodoBlocks from './componentes/TodoBlocks';
import TodoCreate from './componentes/TodoCreate';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      Nome: "fazer algo",
      situação: 0,
    },
    {
      id: 2,
      Nome: "fazer algoo",
      situação: 1,
    },
    {
      id: 3,
      Nome: "fazer algooo",
      situação: 2,
    }
  ])

  const addTodo = (Nome) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 100000),
      Nome,
      situação: 0
    },
    ];

    setTodos(newTodos);
  }
  return (
    <div>
      <div className="top">
        <div className="title"><p>ToDo List</p></div>
        <div className="barra"></div>
        <div className="cab"></div>
        <TodoCreate addTodo={addTodo} />
      </div>
      <div className="outra-barra"></div>
      <div className="bottom">
        <div className='todos-contents'>
          <TodoBlocks todos={todos} setTodos={setTodos} />
        </div>
        <div className="rodape">
          <div className="logo"></div>
        </div>
      </div>
    </div>
  )
}

export default App

