import React from 'react'
import styles from './Home.module.css'
import imgHome from '../assets/deficiencia.png'

export const Home = (props) => {
    return (
        <div className="d-flex justify-content-between container pt-5">
        
        <div className={`${styles.dvHome} pt-5`}>

            <h1>{props.title}</h1>
            <h2>Pessoa com Deficiência e Autismo</h2>
            <h3>Documentos necessários:</h3>
            <p>RG</p>
            <p>CPF</p>
            <p>Comprovante de Residência</p>
            <p>Cartão do SUS</p>
            <p>Laudo Médico de uma instituição de saúde do SUS</p>
            <p>Tipos Sanguíneo</p>

        </div>
        <img src={imgHome} className={`${styles.homeImage} mt-5`} alt="Simbolo Deficiencia"></img>
        </div>
    )
}
