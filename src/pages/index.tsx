import Navbar from "@/components/Navbar";
import styles from "../styles/Home.module.css";
import Pokemonlist from "@/components/Pokemonlist";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Pokemonlist></Pokemonlist>
    </>
  )
}
