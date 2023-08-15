import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

function PaginaTemporaria() {
    const history = useNavigate();
    const [mostrarPagina, setMostrarPagina] = useState(true);

    useEffect(() => {
        // Redireciona para a página desejada
        history.push('/pagina-desejada');

        // Define um temporizador para esconder a página após 5 segundos
        const timer = setTimeout(() => {
            setMostrarPagina(false);
        }, 5000);

        // Limpa o temporizador quando o componente é desmontado
        return () => clearTimeout(timer);
    }, [history]);

    return (
        <div>
            {mostrarPagina && (
                <div>
                    {/* Conteúdo da página */}
                    <h1>Página Temporária</h1>
                </div>
            )}
        </div>
    );
}

export default PaginaTemporaria;
