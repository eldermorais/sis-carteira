import React from 'react'
import styles from './Print.module.css'

export const Print = (props) => {
    return (
        <div className={styles.Print}>
            <h1>{props.title}</h1>
        </div>
    )
}
