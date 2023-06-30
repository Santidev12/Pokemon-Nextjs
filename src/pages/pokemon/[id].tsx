import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from "./id.module.css"



const PokemonPage = () => {
    const router = useRouter();
    const pokemonId = router.query.id;

    const [Infopokemon, setInfopokemon] = useState<any>()
    
    async function getInfo(){
        
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        
        setInfopokemon(data)
        console.log(data)
    }
    
    
    useEffect(() => {
        getInfo()
    }, [])
    
    

    

  return (
    <body className={styles.body}>
    <div className={styles.div}>
      <div className={styles.card}> 
        <div className={styles.text}>
          <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemonId
            }.png`}
            alt=""
          />
          <div className={styles.p}>
          <p className={styles.p1}>{Infopokemon?.name}</p>
          <p className={styles.p2}>{Infopokemon?.abilities[0].ability.name} {Infopokemon?.stats[0].base_stat}Hp</p>
          </div>
          </div>
      </div> 
    </div>
    </body>
    )
}

export default PokemonPage