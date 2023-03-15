import { useState } from 'react';
import { Link } from 'react-router-dom';

const POKEMONS = [
  "bulbasaur",
  "ivisaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sansdslash"
];
// const backgroundIMG = "https://dotesports.com/wp-content/uploads/2019/10/04090337/EGCfymnXkAE92lx.jpg";
const backgroundIMG = "https://d.furaffinity.net/art/blazingifrit/1475361156/1475361156.blazingifrit_zoruaeevee_background.jpg";

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement
}

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    const { pokemon } = event.currentTarget

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
      alert("You won!");
    } else {
      alert("Wrong answer!");
      pokemon.value = "";
    }
  };

  return (
    <>
      <section style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <h1>Poke Guess Game:</h1>
        <Link to="/">
          <button style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >Go to Home</button>
        </Link>
      </section><br />

      <div style={{
        border: "solid red 2px", padding: "auto",
        display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2em",
        backgroundImage: `url(${backgroundIMG})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover",
      }} >
          <img
            height={264} width={264}
            style={{ imageRendering: "pixelated", filter: hasWon ? "" : "brightness(0) invert(1)", }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
          />
          {
            hasWon ? (<button style={{ fontSize: "28px", marginTop: "1em", padding: ".5em 1em" }} onClick={() => location.reload()} >PLAY AGAIN</button>)
              : (
                <form onSubmit={handleSubmit}>
                  <input style={{ fontSize: "28px", marginTop: "1em" }} type="text" autoFocus name="pokemon" />
                  <button style={{ fontSize: "28px", marginLeft: "18px" }}>Submit</button>
                </form>)
          }
      </div>
    </>
  )
}