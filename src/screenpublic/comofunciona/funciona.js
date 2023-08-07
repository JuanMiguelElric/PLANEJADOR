import React from "react";
import "../../App.css";
import Menu from "../../allpages/menu";
import page1 from "../../imagens/page1.png"

const ComoFunciona = () =>{
    return(
        <div>
            <Menu />
            <div className="body-page">
                    <h2>Como Funciona</h2>
                    <br/>
                    <br />
                    <p> Olá me Chamo Plan,ou como muitos me chamam Planejador de Tarefas. Eu fui desenvolvido para as pessoas criarem rotinas para alcançar suas metas. Sou quase um irmão de uma Agenda.. Mas sem muita conversa vamos direto ao ponto.</p>
                    <p>
                    O planejador de tarefas é uma ferramenta útil para organizar suas atividades diárias, priorizar tarefas e garantir que você esteja focado e produtivo. Aqui está um guia passo a passo sobre como o planejador de tarefas funciona:
                    </p>
                    <br />
                    <br />
                    <p>O primeiro passo é deixar seus Dados.</p>
                    <p> Nesta parte você vai entrar na aplicação onde será direcionado para a tela de login.</p>
                    <br />
                    <br />
                    <br />
                    <img src={page1} className="imageinformation" alt="paginap-principal"/>
                    <br />
                    <br />
                    <p> Segundo passo cadastrar-se e efetuar seu login</p>
                    <p>Neste passo você vai efetuar o login, caso não houver uma conta você terá que efetuar o cadastro de uma para depois efetuar seu login.</p>
                    <br />
                    <br />

                    <img src={page1} className="imageinformation" alt="Pagina de informações" />

                    <br />
                    <br />
                    < p > Aqui, você está tendo acesso ao painel do PLAN. Neste espaço, você terá à sua disposição um menu completo, por meio do qual poderá explorar uma série de funcionalidades. Além de acessar planejamentos anteriores e gerenciar seu perfil pessoal, você poderá acompanhar o progresso atual do seu plano, definir metas, visualizar estatísticas e receber insights personalizados. Essa central de controle foi projetada para proporcionar a você uma experiência completa e eficiente no acompanhamento e desenvolvimento dos seus objetivos.</p>
                    <p></p>
                    <br />
                    <br />
                    {/*Adiconar imagem do dashboard do plan  */}
                    <img src={page1} className="imageinformation" alt="planejador"/>
                    <br/>
                    <br/>
                    <br/>
                    <p>O segundo objetivo envolve listar suas metas em ordem de precedência. As metas são diferenciadas por cores: vermelho indica que a tarefa é urgente, amarelo indica que a tarefa é moderada e verde indica que é uma tarefa razoável para ser realizada.</p>
                    <br />
                    {/*Adicionar mais uma imagem de como funciona as metas*/}
                    <br />
                    <br />
                    <p>O terceiro objetivo consiste na execução das tarefas. É importante marcar uma tarefa como concluída assim que for executada. Isso ajudará a manter seu planejador organizado e permitirá um melhor desempenho ao realizar outras atividades.</p>
                    {/*Adicionar mais uma imagem sobre */}
                    <br/>
                    <br />
                    <p>Em suma, o Plan foi concebido com o propósito fundamental de auxiliar indivíduos na realização sistemática de suas metas. Recomendamos explorar nossos blogs para obter insights preciosos sobre aprimorar sua rotina diária. Esses recursos podem ser a chave para desbloquear todo o potencial do Plan, permitindo que você alcance suas metas de maneira mais eficaz e organizada.</p>
                    <br />
                    

            </div>
            
        </div>
    );
}

export default ComoFunciona;