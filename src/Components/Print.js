import React from 'react'
import styles from './Print.module.css'
import logo_funad from '../assets/logo_funad.jpeg'
import fotoDefault from "../assets/icon-photo.png";


export const Print = (props) => {

    const [foto, setFoto] = React.useState({image:fotoDefault})

    function handleChangef(e) {
        
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              setFoto({image: e.target.result});
            };
            reader.readAsDataURL(e.target.files[0]);
          }
    }

    function closeModal(e){
        e.preventDefault()
        const print = document.getElementById('print')
        print.style.display='none'
    }


    return (
        <div className="col-md-12">
            <div className={`${styles.Foto} ${styles.dvFoto} d-flex justify-content-center`}>
                
                <input id="input_image" accept="image/*" type="file" hidden onChange={handleChangef}/>
                <img className="img-fluid" src={foto.image} alt="foto do usuário"/>
            </div>
            <label htmlFor="input_image" className={`${styles.escolher_imagem} btn btn-danger d-flex align-self-end `}>Escolher</label>

            <div id="print" className={`${styles.printCard}`}>
                <div id="printContent" className={`${styles.cardContent}`}>
                    <div className={`${styles.headerCard}`}>
                    <img className={`${styles.logoFunad}`} src={logo_funad} alt="logo da FUNAD-PB"/>
                    <h1>Carteira de Passe Livre Intermunicipal</h1>

                    </div>
                    
                    <div className={`${styles.cabecalho}`}>
                        <h1>Pessoa com Deficiencia</h1>
                    </div>

                    <div className={`${styles.fotoCard}`}>
                        <img src={foto.image} className={`${styles.fotoCard}`} alt="foto do usuário na Carteira"/>
                    </div>

                    <div>
                        <p>Nome: {props.users.nome}</p>
                    </div>

                    <div>
                        <p>CPF: {props.users.cpf}</p>
                    </div>

                    <div>
                        <p>Deficiencia: {props.users.deficiencia}</p>
                    </div>

                    <div>
                        <p>Cidade: {props.users.localidade}</p>
                    </div>

                </div>
                <button id="btn-fechar" onClick={closeModal} className={`${styles.btnModal} btn btn-success`}>fechar</button>
            </div>
           
        </div>
        
        
       
    )
}
