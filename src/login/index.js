import React,{useState} from "react";
import "../App.css";
import {useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () =>{
    const {signin}=useAuth();
    const navigate = useNavigate ();



    const[email,setEmail]=useState('');
    const[senha, setSenha]=useState('');
    const[error,setError]=useState('');
    

    const handlelogin = () =>{
        if(!email | !senha){
            setError("Preencha todos os campos");
            return;
        }
        const res = signin(email,senha);

        if(res){
            setError(res);
            return;
        }
        else{
            navigate("/dashboard")
        }

    }
    
    return(
        <div className="Formulariopagecont">
            <h2>Entrar</h2>
            <form >
                <input type="email"  placeholder="digite seu Email" onChange={(e) => [setEmail(e.target.value), setError("")]}/>
                <br/>
                <input type="password" placeholder="Digite sua Senha"  onChange={(e) => [setSenha(e.target.value), setError("")]}/>
                <br/>
                <p>{error}</p>
                <button className="submit" onClick={handlelogin}>Entrar</button>
                <p>Não tem uma conta? <Link to="/cadastrar">Clique Aqui</Link></p>
            </form>

        </div>
    )
}
export default Login;