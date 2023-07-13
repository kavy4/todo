import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, type = null, onClick, ...props }) => {
    return <button {...props} data-type={type} id={styles.button} onClick={ type !== 'disabled' ? onClick : null }>{ children }</button>
}

export default Button