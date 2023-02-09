import React, { useState, useEffect } from 'react'
import './App.scss'

import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import Statistic from './components/Statistic'

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todo')) || [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList))
  }, [todoList])

  const SwitchDoneTask = id => {
    setTodoList(todoList.map(todo => todo.id == id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const DeleteTask = id => {
    setTodoList(todoList.filter(todo => todo.id != id))
  }

  const AddTask = (title) => {
    const newTodo = {
      title: title,
      isDone: false,
      id: Math.floor(Date.now() * Math.random())
    }
    setTodoList([...todoList, newTodo])
  }

  const TaskFunction = {
    SwitchDoneTask: SwitchDoneTask,
    DeleteTask: DeleteTask
  }

  return (
    <div className='App'>
      <CreateTodo AddTask={AddTask} />
      <Statistic list={todoList} />
      <TodoList list={todoList} option={TaskFunction} />
    </div>
  )
}

export default App