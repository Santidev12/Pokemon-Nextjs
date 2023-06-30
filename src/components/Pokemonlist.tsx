import axios from 'axios'
import styles from "./Pokemonlist.module.css"
import { get } from 'http';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Pokemonlist = () => {

    const [Pokemons, setPokemons] = useState([]);
    async function getAllPokemons(){
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
        setPokemons(data.results)
        console.log(data.results);
    }
    //obtener los 151 pokemons
    //guardar esos pokemons en un useState
    //renderizar esos pokemones de forma dinamica en nuestro html
    // cuango hagamos click en un pokemon, ir a la pagina del pokemon


    useEffect(() => {
        getAllPokemons();
    }, [])
    

  return (
    <div>
        <div className={styles.pokemonListContainer}>
            {Pokemons.map((pokemon: any, i) => (
            <Link href={`/pokemon/${i + 1}`} passHref>
            <div className={styles.card}> 
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                i + 1
              }.png`}
              alt=""
            />
            <p>{pokemon.name}</p>
        </div>
        </Link>
        ))}
        </div>
    </div>
  );
};

export default Pokemonlist