import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Mini Games:</h1>
      </section>
      <br /><br />

      <section style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <Link to="/memotest">
          <button style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >Memotest</button>
        </Link>
        <Link to="/wpm">
          <button style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >Word per Minute</button>
        </Link>
        <Link to="/pokemon">
          <button style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >PokéGuess</button>
        </Link>
      </section>
      <br />
    </>
  )
}