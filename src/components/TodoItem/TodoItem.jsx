import React from 'react'
import Button from '../../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { removeTodo, switchIsCompleteTodo } from '../../store/todoReducer'
import styles from './TodoItem.module.scss'

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch()

    const OnContextMenu = event => {
        dispatch(removeTodo(todo.id))
        event.preventDefault()
    }

    return <Button className={styles.todoItem} data-is-complete={todo.isComplete} onContextMenu={event => OnContextMenu(event)} onClick={() => dispatch(switchIsCompleteTodo(todo.id))}>
        { index + 1 }. { todo.title }
    </Button>
}

export default TodoItem