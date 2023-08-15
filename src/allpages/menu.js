import React, {useState} from "react";
import "../App.css";
import hamburguer from "../imagens/hamburguer.png";
import { Link } from "react-router-dom";
import { FaSquare } from 'react-icons/fa';

function Menu(){
    const [menuVisivel, setMenuVisivel]= useState(false);
    const hamburguerToogle = () =>{
        setMenuVisivel(!menuVisivel);
    }
    return(
        <div className="menu ">
            <ul>
                <li className="Afastar">PLAN</li>
                <li className="Afastar"> Seja Bem vindo(a)</li>
                <li className="Remover">
                    <Link className="decoration" to="/comofunciona">
                        Como funciona
                    </Link>
                </li>
                <li className="Remover">
                    Desenvolvedor
                </li>
                <button onClick={hamburguerToogle} style={{background:'none'}} ><img src={hamburguer} className="App-logo" alt="hamburguer"/></button>
                {menuVisivel && (
                    <div className="menu-bar">
                        <button className="botaotogle" onClick={hamburguerToogle} ><FaSquare style={{ color: 'white', fontSize: '30px' }} /></button>
                        <p>
                            <Link className="decoration" to="/login">
                                Entrar
                            </Link>
                            </p> <br/>
                        <p>
                            <Link className="decoration" to="/comofunciona">
                                Como Funciona
                            </Link>
                        </p> <br />
                        <p>
                            <Link to="/contato" className="decoration">Contato</Link>
                        </p> <br/>
                       
                    </div>
                )}
                
            </ul>
        </div>
    )

}
export default Menu;