import React from 'react'
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { removeTodo, switchIsCompleteTodo } from '../store/todoReducer'

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch()

    const OnContextMenu = event => {
        dispatch(removeTodo(todo.id))
        event.preventDefault()
    }

    return <Button className={`max-w-full w-full tablet:w-auto laptop:w-auto desktop:w-auto mr-6 mt-6 text-start opacity-${todo.isComplete ? '50' : '100'}`} onContextMenu={event => OnContextMenu(event)} onClick={() => dispatch(switchIsCompleteTodo(todo.id))}>{ index + 1 }. { todo.title }</Button>
}

export default TodoItem