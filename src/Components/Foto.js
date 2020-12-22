import React from 'react'
import styles from './Foto.module.css'

export const Foto = () => {
    function addFoto(){
        //window.opener()

    }
    const [foto, setFoto] = React.useState("../assets/icon-photo.png")

    function handleChangef(e) {
        
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              setFoto({image: e.target.result});
            };
            reader.readAsDataURL(e.target.files[0]);
          }
    }


    return (
        <div className="col-md-12">
            <div onClick={addFoto} className={`${styles.Foto} ${styles.dvFoto} d-flex justify-content-center`}>
                
                <input id="input_image" accept="image/*" type="file" hidden onChange={handleChangef}/>
                <img src={foto.image}/>
            </div>
            <label htmlFor="input_image" className={`${styles.escolher_imagem} btn btn-danger d-flex align-self-end `}>Escolher</label>
        </div>
        
        
       
    )
}
