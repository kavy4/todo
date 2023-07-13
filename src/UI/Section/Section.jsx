import React from 'react'
import styles from './Section.module.scss'

const Section = ({ children, ...props }) => {
    return <div {...props} id={styles.section}>
        { children }
    </div>
}
export default Section