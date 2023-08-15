import React, {useState} from "react";
import "../../App.css";
import hamburguer from "../../imagens/hamburguer.png";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function MenuApp(){
    const {signout} = useAuth();
    const navigate = useNavigate();
    const [menuVisivel, setMenuVisivel]= useState(false);
    const hamburguerToogle = () =>{
        setMenuVisivel(!menuVisivel);
    }
    const [historicovisivel,Sethistoricovisivel]=useState(false);
    const historicotoogle= () =>{
        Sethistoricovisivel(!historicovisivel);
    }
    return(
        <div className="menu ">
            <ul>
                <li className="Afastar">PLAN</li>
                <li className="Afastar">
                    <button onClick={historicotoogle} className="history">
                        Histórico
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /> </svg>
                        </button>
                        {historicovisivel &&(
                            <div className="historico">
                                <p>Ultimos 7 dias</p>
                                <p>Ultimos 30 dias</p>
                                <p>Tarefas não concluidas</p>



                            </div>

                        )}
                </li>
                <li>
                    Plan para empresas
                </li>
                <li>
                    <button className="botmenu">
                        Convidar

                    </button>
                </li>
                <li>
                    Blogs

                </li>
                <button onClick={hamburguerToogle} className="bak"  ><img src={hamburguer} className="App-logo" alt="hamburguer"/></button>
                {menuVisivel && (
                    <div className="menu-bar">
                        <button className="botaotogle" onClick={hamburguerToogle} ><i class="fi fi-br-cross"></i></button>
                        <p>Entrar</p> <br/>
                        <p>Contato</p> <br/>
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