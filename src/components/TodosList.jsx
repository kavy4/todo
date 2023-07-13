import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodosList = () => {
    const todos = useSelector(state => state.main)

    return <>
        { todos.map((todo, index) => <TodoItem todo={todo} index={index} />) }
    </>
}

export default TodosList