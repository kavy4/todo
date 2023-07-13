import React from 'react'
import styles from './Input.module.scss'

const Input = ({ type, ...props }) => {
    return <input {...props} type={type} id={styles.input} />
}

export default Input