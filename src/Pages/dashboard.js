import React, { useState, useEffect } from "react";
import "../App.css";
import MenuApp from "../allpages/menuapkp/menuap";

function Dashboard() {
    const [tarefa, setTarefa] = useState('');
    const [horario, setHorario] = useState('');
    const [diaseman, setDiasemana] = useState('');
    const [listaTarefas, setListaTarefas] = useState([]);
    const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

    useEffect(() => {
        const tarefasSalvas = localStorage.getItem('tarefas');
        if (tarefasSalvas) {
            try {
                setListaTarefas(JSON.parse(tarefasSalvas));
            } catch (error) {
                console.error('Erro ao fazer parsing das tarefas:', error);
            }
        }
    }, []);

    const tarefas = (event) => {
        const { name, value } = event.target;
        if (name === 'tarefa') {
            setTarefa(value);
        } else if (name === 'horario') {
            setHorario(value);
        } else if (name === 'diaseman') {
            setDiasemana(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        adicionarTarefa();
    };

    const adicionarTarefa = () => {
        const novaTarefa = {
            tarefa: tarefa,
            horario: horario,
            diaseman: diaseman,
        };
        
        
        
        const novaLista = [...listaTarefas, novaTarefa];

        setListaTarefas(novaLista);

        // Salvar lista no localStorage
        localStorage.setItem('tarefas', JSON.stringify(novaLista));

        // Limpar os campos do formulário após adicionar a tarefa
        setTarefa('');
        setHorario('');
        setDiasemana('');
    };
    const concluirTarefa = (index) => {
        const tarefaConcluida = listaTarefas[index];
        setTarefasConcluidas([...tarefasConcluidas, tarefaConcluida]);
        const novasTarefas = listaTarefas.filter((_, i) => i !== index);
        setListaTarefas(novasTarefas);
    };
    return (
        <div>
            <MenuApp />
            <br />
            <div className="body-page">
                <div className="planejador">
                    <h3>Adicionar Tarefa</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={tarefas} name="tarefa" placeholder="Nome da tarefa" />
                        <br />
                        <select name="diaseman" onChange={tarefas}>
                            <option>Informe um dia da semana</option>
                            <option>Domingo</option>
                            <option>Segunda-Feira</option>
                            <option>Terça-Feira</option>
                            <option>Quarta-Feira</option>
                            <option>Quinta-Feira</option>
                            <option>Sexta-Feira</option>
                            <option>Sabado</option>
                            
                        </select>
                        <br></br>
                        <input type="time" onChange={tarefas} name="horario"/>
                        <br/>
                        <button type="submit" className="submit">Adicionar Tarefa</button>
                    </form>
                </div>
                <div>
                    {listaTarefas.map((tarefa, index) => {
                        return (
                            <div key={index} className="card-tarefa">
                                <h4>{tarefa.tarefa}</h4>
                                <p>Horário: {tarefa.horario}</p>
                                <p>Dia da Semana: {tarefa.diaseman}</p>
                                <button className="submitcon" onClick={() => concluirTarefa(index)}>Concluída</button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}

export default Dashboard;
