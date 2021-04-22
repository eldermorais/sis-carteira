import React from 'react'

export const Resgister = (props) => {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <form>
                <div className="form-row">
                    <div className="col-md-6 form-group">
                        <label>E-mail</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control"/>
                    </div>
                </div>

                <div className="form-row form-group">
                    <div className="col-md-8">
                        <label>Nome Completo</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Setor</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}
