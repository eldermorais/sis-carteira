import React from 'react'
import styles from './Home.module.css'

export const Home = (props) => {
    return (
        <div className={`${styles.dvHome} mt-5 container`}>
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
    )
}
