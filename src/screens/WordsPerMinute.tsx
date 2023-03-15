import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"

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
    <>
      <section style={{ display: "flex", justifyContent: "space-evenly", alignSelf: 'flex-start' }}>
        <h1>WordsPerMinute Game:</h1>
        <Link to="/">
          <button style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >Go to Home</button>
        </Link>
      </section>

      <br /><br />

      <div style={{ display: "flex", flexDirection: "column", gap: 24, textAlign: "center" }}>
        <section>
          {Boolean(time) && <h1 style={{ fontSize: "42px" }}>{word}</h1>}
          <h3>Characters well typed: {characterCount}</h3>
          <h3>Time remaining: {time}</h3>
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
          <button style={{ fontSize: "28px" }} onClick={startGame}>Play</button>
        )}

      </div>
    </>
  )
}