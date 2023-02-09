import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button className='px-5 py-1 border-2 rounded border-zinc-200 transition-all duration-300 hover:bg-zinc-50' {...props} >{ children }</button>
    )
}

export default Button