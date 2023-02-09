import React, { useState } from 'react'

const CreateTodo = ({ AddTask }) => {
    const [title, setTitle] = useState('')

    const ReadyInput = () => {
        if (title == '') return
        AddTask(title)
        setTitle('')
    }

    return (
        <>
            <input type="text" value={title} onChange={event => setTitle(event.target.value)} className='border-2 border-stone-400 px-2 rounded block mx-auto my-5' onKeyUp={event => event.key == 'Enter' && ReadyInput()} />
        </>
    )
}

export default CreateTodo