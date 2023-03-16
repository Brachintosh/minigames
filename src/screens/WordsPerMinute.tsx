import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"

const wpmBgIMG = "https://t4.ftcdn.net/jpg/05/02/35/47/360_F_502354716_V1aI7pDCSJ6I82oqOSWUOzcH2tAfZ3AC.jpg";

const WORDS = [
  "gannicus", "oblivion", "griffindor", "mordor", "asterix", "plasmatic", "abnormal",
  "abdomen", "asterisco", "grisaceo", "cristalino", "inframundo", "sepultura", "gladiators",
]

export default function WordsPerMinute() {
  const [word, setWord] = useState(() => WORDS?.[(Math.random() * WORDS.length) | 0])
  const [characterCount, setCharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0);

  function startGame() {
    setTime(60);
    setCharacterCount(0);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (buffer === word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setCharacterCount((characterCount) => characterCount + word.length);
    }

    setBuffer("");
  }

  useEffect(() => {
    if (time !== 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);

      return () => clearTimeout(timeout);
    }
  }, [time]);

  return (
    <div
    style={{
      height: "100vh",
      backgroundImage: `url(${wpmBgIMG})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",
    }}
    >
       <section style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "20vh" }}>
        <h1 className="nes-text" style={{ textShadow: "3.5px 2px 4px white" }}>WordsPerMinute Game:</h1>
        <Link to="/">
          <button type="button" className="nes-btn is-primary" style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >Go to Home</button>
        </Link>
      </section>

      <br /><br />

      <div style={{ display: "flex", flexDirection: "column", gap: 32, textAlign: "center" }}>
        <section>
          {Boolean(time) && <h1 className="nes-text" style={{ fontSize: "52px", color: "aliceblue", textShadow: "3.5px 2px 4px tomato" }}>{word}</h1>}
          <h3 className="nes-btn is-success">Characters well typed: {characterCount}</h3>
          <h3 className="nes-btn is-error">Time remaining: {time}</h3>
        </section>
        {time ? (
          <form onSubmit={handleSubmit}>
            <input
              style={{ fontSize: "28px", }}
              value={buffer}
              onChange={(e) => setBuffer(e.target.value)}
              type="text"
              autoFocus
            />
            <button style={{ fontSize: "28px", marginLeft: "20px" }} type="submit" >Submit</button>
          </form>
        ) : (
          <button type="button" className="nes-btn is-warning" style={{ fontSize: "28px" }} onClick={startGame}>Play</button>
        )}

      </div>
    </div>
  )
}