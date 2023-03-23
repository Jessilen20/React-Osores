import React, { useState } from "react";
import axios from 'axios';
import './stylepoke.css';

const Pokemons = () => {

    const [lista, setLista] = useState([]);

    const traerDatos = async () => {
        let resultado = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        
        setLista(resultado.data.results);
        console.log(resultado);
    }

    return (
        <div className="lista">
            <button onClick={traerDatos}>Fetch Pokemon</button>
            <ul>{
                lista.map( pokemon =>
                        <li className="texto" key={pokemon.name}>{pokemon.name}</li>
                    )
            }
            </ul>
        </div>
    );
}

export default Pokemons;