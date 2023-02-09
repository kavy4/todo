import React from 'react'
import Button from './UI/Button'

const TodoItem = ({ todo, option }) => {
    return (
        <div className={`w-4/5 rounded shadow-lg mx-auto my-5 p-4 flex justify-between items-center border cursor-pointer transition-all duration-500 ${todo.isDone ? 'line-through opacity-60' : ''}`} onClick={() => option.SwitchDoneTask(todo.id)}>
            <h3 className='text-xl font-medium'>{ todo.title }</h3>
            <Button onClick={event => {
                event.stopPropagation()
                option.DeleteTask(todo.id)
            }}>Удалить</Button>
        </div>
    )
}

export default TodoItem