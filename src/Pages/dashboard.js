import React, {useState} from "react";
import "../App.css"
import MenuApp from "../allpages/menuapkp/menuap";


function Dashboard() {
    const [tarefa, setTarefa]=useState('');
    const [horario, setHorario]= useState('');
    const [diaseman, setDiasemana]= useState('');
    const [ listaTarefas, setListaTarefas]=useState([]);

    const tarefas = (event) =>{
        const {name,value} = event.target;
        if(name === 'tarefa'){
            setTarefa(value);
        }else if (name === 'horario'){
            setHorario(value);
        }else if (name === 'diaseman'){
            setDiasemana(value)
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        adicionarTarefa();
      };
    const adicionarTarefa = () =>{
        const novaTarefa={
            tarefa: tarefa,
            horario: horario,
            diaseman: diaseman,
        };
        setListaTarefas([...listaTarefas,novaTarefa]);
        //limpar os campos do formulário após adicionar a tarefa
        setTarefa('');
        setHorario('');
        setDiasemana('');
    }
    return(
        <div>
            <MenuApp />
            <br />
            <div className="body-page">
                <div className="planejador">
                    <h3>Adiconar Tarefa</h3>
                    <form onSubmit={handleSubmit}>
                        <input type=" text" onChange={tarefas} name="tarefa" placeholder="nome da tarefa" />
                        <br />
                        <select name="diaseman" onChange={tarefas}>
                            <option>
                                informe um dia da semana
                            </option>
                            <option>Domingo</option>
                            <option>Segunda-Feira</option>
                            <option>Terça-feira</option>
                            <option>Quarta-Feira</option>
                            <option>Quinta-Feira</option>
                            <option>Sexta-Feira</option>
                            <option>Sabado</option>
                        </select>
                        <br></br>
                        <input type="time" onChange={tarefas} name="horario"/>
                        <br/>
                        <button type="submit" onClick={adicionarTarefa} className="submit">Adiconar Tarefa</button>
                    </form>
                </div>
                <div>
                    {listaTarefas.map((tarefa, index) => {
                        return (
                        <div key={index} className="card-tarefa">
                            <h4>{tarefa.tarefa}</h4>
                            <p>Horario: {tarefa.horario}</p>
                            <p>Dia da Semana: {tarefa.diaseman}</p>
                            <button className="submitcon">Concluida</button>
                            
                        </div>
                        );
                    })}
                </div>

                
            </div>


        </div>
    )
}
export default Dashboard;