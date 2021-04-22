import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as Logo} from '../assets/logo.svg'


export const Header = () => {
    return (
        <header className={`${styles.Header} bg-primary `}>
            <nav className="container navbar navbar-dark navbar-expand-md">

            <Link className={styles.containerLogo} to="/">
                <Logo className={`${styles.logo} navbar-brand`}/>SisCarteira
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Usuários</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login/Register</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/users" className="nav-link">Relatórios</Link> */}
                    </li>                    
                </ul>
            </div>
            </nav>
        </header>
    )
}