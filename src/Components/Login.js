import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

export const Login = (props) => {
    return (
        
        <div className="container py-5">
            <h1 className="pt-5">{props.title}</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">Digite seu email cadastrado</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="">
                <Link to="/register" className={styles.linkRegister}>Ainda não tenho uma conta</Link>

                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>

        </div>
    )
}
