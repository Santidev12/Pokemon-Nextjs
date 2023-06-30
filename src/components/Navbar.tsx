import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';


const Navbar = () => {

    const [numeros, setNumeros] = useState(["", ""])

    useEffect(() => {
      function generateRandomNumbers() {
        const randomNumber1 = (Math.random() * 151).toFixed(0);
        const randomNumber2 = (Math.random() * 151).toFixed(0);

        setNumeros([randomNumber1, randomNumber2]);
      }
      generateRandomNumbers();
      }, [])
    

  return (
    <nav className={styles.navContainer}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeros[0]}.png`} 
            alt="" 
        />
        <h1>Pokemon App</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeros[1]}.png`} 
        alt="" 
        />
    </nav>
  )
}

export default Navbar;