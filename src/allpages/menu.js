import React, {useState} from "react";
import "../App.css";
import hamburguer from "../imagens/hamburguer.png";
import { Link } from "react-router-dom";

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
                <li>
                    <Link className="decoration" to="/comofunciona">
                        Como funciona
                    </Link>
                </li>
                <li>
                    <Link className="decoration" to="/blogs">
                        Blogs

                    </Link>
                    

                </li>
                <button onClick={hamburguerToogle} ><img src={hamburguer} className="App-logo" alt="hamburguer"/></button>
                {menuVisivel && (
                    <div className="menu-bar">
                        <button className="botaotogle" onClick={hamburguerToogle} ><i class="fi fi-br-cross"></i></button>
                        <p>
                            <Link className="decoration" to="/login">
                                Entrar
                            </Link>
                            </p> <br/>
                        <p>Contato</p> <br/>
                        <p>
                            <Link className="decoration" to="/comofunciona">
                                Como Funciona
                            </Link>
                        </p> <br />
                        <p>
                            Desenvolvedor
                        </p> <br/>
                        <p>
                            <Link className="decoration" to="/blogs">
                                Blogs
                            </Link>
                        </p>
                    </div>
                )}
                
            </ul>
        </div>
    )

}
export default Menu;