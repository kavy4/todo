import React from 'react'
import Section from '../UI/Section/Section'
import { useSelector } from 'react-redux'

const Stats = () => {
    const todos = useSelector(state => state.main)

    const countCompleteTodo = todos.reduce((result, todo) => todo.isComplete ? result + 1 : result, 0)

    return <Section className='mt-6'>
        <h2 className='text-2xl'>Stats</h2>

        <ul>
            <li><p>Todo: { todos.length }</p></li>
            <li><p>Complete todo: { countCompleteTodo }</p></li>
        </ul>
    </Section>
}

export default Stats