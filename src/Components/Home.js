import React from 'react'
import styles from './Home.module.css'

export const Home = (props) => {
    return (
        <div className={`${styles.dvHome} mt-5 container`}>
            <h1>{props.title}</h1>
        </div>
    )
}
