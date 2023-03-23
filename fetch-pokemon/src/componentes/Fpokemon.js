import React, { useState } from "react";
import './stylepoke.css';

const Pokemons = () => {

    const [lista, setLista] = useState([]);

    const traerDatos = async () => {
        let resultado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");

        resultado = await resultado.json();

        setLista(resultado.results);
        console.log(resultado);
    }

    return (
        <div className="lista">
            <button onClick={traerDatos}>Fetch Pokemon</button>
            <ul>{
                lista.map( pokemon =>
                        <li key={pokemon.name}>{pokemon.name}</li>
                    )
            }
            </ul>
        </div>
    );
}

export default Pokemons;