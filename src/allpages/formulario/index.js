import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";



const Formulario = () => {
  const [email,setEmail] =useState("");
  const [emailconf, setEmailConf]= useState("");
  const [senha, setSenha] = useState("");
  const [error,setError] = useState("");
  const {signup} =useAuth();



  
  

  const enviofor = (event) => {
    event.preventDefault();
    if(!email | !emailconf | !senha){
      setError("Preencha todos os campos");
      return;
    }else if(email !== emailconf){
      setError("os email não são iguais");
      return;
    }
    const res = signup(email,senha);
    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");

  };

  return (
    <div className="formulario">
      <h2>Entrar</h2>
      <form onSubmit={enviofor}>
        <label>
          Email: <br />
          <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder=" Digite o seu nome" />
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" value={emailconf} onChange={(e) => setEmailConf(e.target.value)} placeholder=" Digite o seu email" />
        </label>

        <br/>
        <label>
          Senha<br />
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha"/>
        </label>
        <p> {error}</p>
        <button className="submit" type="submit">
          Enviar
        </button>
        <p > já possui uma conta? <Link to="/login">Entre Aqui</Link></p>
      </form>
    </div>
  );
}

export default Formulario;
