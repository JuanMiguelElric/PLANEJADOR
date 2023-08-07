import React from "react";
import "../../App.css";
import Menu from "../../allpages/menu";

function Contato(){
    return(
        <div>
            <Menu />

            <div className="body-page">
                <h2>Contato</h2>
                <p>Com grande apreço, agradeço sinceramente pelo seu interesse em se conectar. É uma verdadeira satisfação para mim estar à disposição para responder a todas as suas dúvidas, acolher sugestões construtivas e receber os seus comentários valiosos. Sinta-se à vontade para preencher o formulário abaixo, compartilhando suas palavras e pensamentos. Prometo que farei questão de responder prontamente, buscando proporcionar a você toda a assistência necessária.</p>
                <br/>
                <p>Nada me traz mais contentamento do que a oportunidade de ajudar e interagir. Assim, encorajo você a compartilhar suas ideias e inquietações. Cada palavra que você compartilha é uma contribuição significativa que enriquece nosso diálogo. Ao preencher o formulário, você está estabelecendo um canal direto de comunicação comigo, e estou ansioso para receber a sua mensagem.</p>

                <br/>
                <p>Agradeço antecipadamente por dedicar um momento do seu tempo para se conectar. A sua participação é extremamente valorizada e aguardada com entusiasmo. Estou aqui para atender às suas necessidades e proporcionar-lhe uma experiência positiva. Portanto, não hesite em compartilhar suas ideias e preocupações por meio do formulário abaixo. Assim que receber sua mensagem, entrarei em contato rapidamente para continuar nossa conversa produtiva.</p>
                <div className="Formcont">
                    <form>
                        <input type="text" placeholder="Digite o seu nome"/>
                        <br />
                        <input type="email" placeholder="Digite o seu email"/>
                        <br />
                        <button className="submit">Entrar em contato</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
export default Contato;