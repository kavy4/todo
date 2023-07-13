import React from 'react'
import styles from './Popup.module.scss'

const Popup = ({ children, isOpenSettings }) => {
    const { isOpen, setIsOpen } = isOpenSettings

    return <div id={styles.overlay} data-open={isOpen} onClick={() => setIsOpen(false)}>
        <div id={styles.card} onClick={event => event.stopPropagation()}>
            { children }
        </div>
    </div>
}

export default Popup