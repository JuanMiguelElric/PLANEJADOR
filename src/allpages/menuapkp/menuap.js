import React, {useState} from "react";
import "../../App.css";
import hamburguer from "../../imagens/hamburguer.png";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FaSquare } from 'react-icons/fa';


function MenuApp(){
    const {signout} = useAuth();
    const navigate = useNavigate();
    const {setPreviewUrl} = useState();
    const [menuVisivel, setMenuVisivel]= useState(false);
    const hamburguerToogle = () =>{
        setMenuVisivel(!menuVisivel);
    }
   
    const handlePhotoUpload = (event) => {
        //obtém o arquivo selecionado
        const selectedFile = event.target.files[0];

        const previewUrl = URL.createObjectURL(selectedFile);
        //visualizador de foto
        setPreviewUrl(previewUrl);
        // Se você tiver um estado para armazenar a URL da pré-visualização
    
        // Ou você pode fazer upload da foto para um servidor:
         // Implemente aqui a lógica de upload da foto

        
    }
    return(
        <div className="menu ">
            <ul>
                <li className="Afastar">PLAN</li>
                
                <li className="Remover">
                    Plan para empresas
                </li>
                <li className="Remover">
                    <button className="botmenu">
                        Convidar

                    </button>
                </li>
                <li>
                    Blogs

                </li>
                <button onClick={hamburguerToogle} style={{background:'none'}} className="bak"  ><img src={hamburguer} className="App-logo" alt="hamburguer"/></button>
                {menuVisivel && (
                    <div className="menu-bar">
                        <button className="botaotogle" onClick={hamburguerToogle} ><FaSquare style={{ color: 'white', fontSize: '30px' }} /></button>
                        <p><input type="file" onChange={handlePhotoUpload} /></p>
                        <p>BemVindo</p> <br/>
                        <p>Convidar Amigo</p> <br/>
                        <p>Como Funciona!</p> <br />
                        <p>Desenvolvedor</p> <br/>
                        <button style={{color:'white'}} onClick={() =>[signout(),navigate("/login")]}> Sair</button>
                    </div>
                )}
                
            </ul>
        </div>
    )

}
export default MenuApp;