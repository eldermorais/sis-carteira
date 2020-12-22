import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as Logo} from '../assets/logo.svg'


export const Header = () => {
    return (
        <header className={styles.Header}>
            <nav className="container">

            <Link className={styles.containerLogo} to="/">
                <Logo className={styles.logo}/>SisCarteira
                </Link>
            <Link to="/users">Usuários</Link>  
            <Link to="/users">Relatórios</Link>
            {/* <Link to="/print"></Link> */}
            </nav>
        </header>
    )
}