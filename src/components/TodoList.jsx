import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ list, option }) => {
    return (
        <>{ list.map(todo => <TodoItem todo={todo} option={option} />) }</>
    )
}

export default TodoList