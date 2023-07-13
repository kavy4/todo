import React, { useState } from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoReducer'

const Form = () => {
    const [newTodoTitle, setNewTodoTitle] = useState('')
    const dispatch = useDispatch()

    const CreateTodo = () => {
        if (newTodoTitle === '') return

        const newTodo = {
            title: newTodoTitle,
            isComplete: false,
            id: Date.now()
        }

        dispatch(addTodo(newTodo))
        setNewTodoTitle('')
    }

    return <>
        <Input type='text' onChange={event => setNewTodoTitle(event.target.value)} value={newTodoTitle} onKeyUp={event => event.key === 'Enter' && CreateTodo()} />
        <Button className='block mt-6' onClick={CreateTodo}>Add Todo</Button>
    </>
}

export default Form