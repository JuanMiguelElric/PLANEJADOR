import React from "react";
import Menu from "../allpages/menu";
import "../App.css"
import { Link } from "react-router-dom";



const PaginaInical = () =>{

    return(
        <div>
            <Menu />
            <br />
            <br />
            <div className=" BemVindo">
                <h1>PLAN</h1>
                <br />
                <p >Olá, me chamo Plan e fui projetado para te ajudar a organizar sua rotina, entendo que nos tempos atuais com o avanço da tecnologia seja dificil ter uma rotina com planejamento, o fato é que todos temos metas, mas sem planejamento o caminho para alcança-las pode se tornar mais difícil, juntos podemos traçar uma lista de tarefas  importantes</p>
                <br />
                <button className="submitpage">
                    <Link to="/login" className="decoration"> Acessar </Link></button>

            </div>

  
        </div>

    );
}
export default PaginaInical;