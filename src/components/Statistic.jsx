import React from 'react'

const Statistic = ({ list }) => {
    let doneTask = 0
    list.map(todo => todo.isDone && doneTask++)

    return (
        <div className='w-full flex justify-around text-lg'>
            <span>Всего: { list.length }</span>
            <span>Сделано: { doneTask }</span>
            <span>Осталось: { list.length - doneTask }</span>
        </div>
    )
}

export default Statistic