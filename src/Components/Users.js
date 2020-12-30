import React from 'react'
import styles from './Users.module.css'
import { Print } from './Print'


export const Users = (props) => {
    const date = Date.now()    

    const initialState = {
        cpf:'',
        nome:'',
        data_nascimento:'',
        deficiencia:'',
        data_cadastro: new Date(date),
        cep:'',
        logradouro:'',
        num_endereco:'',
        bairro:'',
        localidade:'',
        uf:''
    }

    const [user, setUser] = React.useState(initialState)

    function handleChange({target}) {
        const {id, value } = target;
        setUser({ ...user, [id]:value})
    }

    function getUser(){
        if(testaCPF() === false){
            alert('O CPF digitado não é válido!!!')
        }else{
            fetch(process.env.REACT_APP_API_URL +'?cpf='+user.cpf)
        .then((response) => {
            return response.json()        
        }).then((datas) =>{
            if(datas[0]){
                setUser(datas[0])
            }                     
        })       
        }        
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        const baseUrl = process.env.REACT_APP_API_URL
        const method = user.id ? 'PUT' : 'POST'
        const url = user.id ? baseUrl + user.id : baseUrl
        const modal = document.getElementById('div-modal')
        const btnFechar = document.getElementById('btn-fechar')
       
        fetch(url, {
            method: method,
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify(user),

        }).then((response) => {
            if (response.ok){
                setUser(initialState)
            modal.style.display='block'
            btnFechar.focus()
            }            
            return response                        
        })               
    }

    function closeModal() {
        const modal = document.getElementById('div-modal')
        modal.style.display='none'
    }

    function clear(event) {
        event.preventDefault()
        setUser(initialState)
    }
    
    function testaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        strCPF = user.cpf
      if (strCPF.length !== 11 || strCPF === "00000000000" || strCPF === "11111111111" || strCPF === "22222222222" || strCPF === "33333333333" || strCPF === "44444444444" || strCPF === "55555555555" || strCPF === "66666666666" || strCPF === "77777777777" || strCPF === "88888888888" || strCPF === "99999999999") return false;
    
      for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }

    function buscarCep(){
        let baseUrlCep = 'https://viacep.com.br/ws/'
        let urlCep = baseUrlCep + user.cep+'/json'
        fetch(urlCep)
        .then((response) => {
            return response.json()        
        }).then((data) =>{
            setUser({ ...user, logradouro: data.logradouro, bairro: data.bairro, localidade: data.localidade, uf: data.uf});            
        })
    }

    function imprimir(e){
        e.preventDefault()
        const modalImprimir = document.querySelector('#print')
        modalImprimir.style.display = 'block'
        window.print();
    }

    return (
            
            <div className={`${styles.Users} container mt-5`}>

            <div>
                <h1>{props.title}</h1>
            </div>
            <form onSubmit={handleSubmit}>
               
                <div className="row">
                <Print users={user} />
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>CPF</label>
                            <input id='cpf' type="text" className="form-control"
                                name="cpf"
                                value={user.cpf}
                                onChange={handleChange}
                                maxLength="11"
                                //onBlur={testaCPF}
                                onBlur={getUser}
                                placeholder="Digite o CPF..."
                                required />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input id='nome' type="text" className="form-control"
                                name="nome"
                                value={user.nome}
                                onChange={handleChange}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Data de nascimento</label>
                            <input id='data_nascimento' type="date" className="form-control"
                                name="data_nascimento"
                                value={user.data_nascimento}
                                onChange={handleChange}
                                />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Deficiencia</label>
                            <select className="form-control" name="deficiencia" id="deficiencia"
                                value={user.deficiencia}
                                onChange={handleChange}>
                                <option>Auditiva</option>
                                <option>Autismo</option>
                                <option>Física</option>
                                <option>Intelectual</option>
                                <option>Visual</option>                
                            </select>
                            
                        </div>
                    </div>
                </div>

                <fieldset className="border p-3">

                <legend>Endereço:</legend>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>CEP</label>
                            <input id='cep' type="text" className="form-control"
                                name="cep"
                                onBlur={buscarCep}
                                value={user.cep}
                                onChange={handleChange}
                                placeholder="Digite o CEP..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Logradouro</label>
                            <input id='logradouro' type="text" className="form-control"
                                name="logradouro"
                                value={user.logradouro}
                                onChange={handleChange}
                                placeholder="Digite o logradouro..." />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número</label>
                            <input id='num_endereco' type="text" className="form-control"
                                name="num_endereco"
                                value={user.num_endereco}
                                onChange={handleChange}
                                placeholder="Digite o Numero..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Bairro</label>
                            <input id='bairro' type="text" className="form-control"
                                name="bairro"
                                value={user.bairro}
                                onChange={handleChange}
                                placeholder="Digite o Bairro..." />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input id='cidade' type="text" className="form-control"
                                name="cidade"
                                value={user.localidade}
                                onChange={handleChange}
                                placeholder="Digite a Cidade..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Estado</label>
                            <input id='estado' type="text" className="form-control"
                                name="estado"
                                value={user.uf}
                                onChange={handleChange}
                                placeholder="Digite o Estado..." />
                        </div>
                    </div>
                </div>
                </fieldset>
                <hr />                
                
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Salvar 
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={clear}>
                            Cancelar
                        </button>
                        <button className='btn btn-info ml-2' onClick={imprimir}>Imprimir</button>

                    </div>
                </div>
            </form>
            <div className={styles.modal2} id="div-modal">
                <div className={styles.modalContent}>
                    <span className={styles.textModal}>Formulario enviado com sucesso!</span>
                    <button id="btn-fechar" onClick={closeModal} className={`${styles.btnModal} btn btn-success`}>fechar</button>                        
                </div>
            </div>            
        </div>
    )
}
