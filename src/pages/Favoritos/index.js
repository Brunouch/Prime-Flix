import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css';

function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        const minhalista = localStorage.getItem('@primeFlix');
        setFilmes(JSON.parse(minhalista) || []);
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme)=>{
            return(filme.id !== id)      
        })
        
        setFilmes(filtroFilmes);
        localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso!")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Favoritos</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filmo salvo :( </span>}
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                                <button onClick={()=> excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                        
                    )
                })}
            </ul>            
        </div>
    )
}

export default Favoritos;