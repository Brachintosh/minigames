import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=64&color=currentColor",
  "https://icongr.am/devicon/drupal-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/docker-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/java-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/csharp-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/postgresql-original-wordmark.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/html5-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/ie10-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/amazonwebservices-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/express-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/android-original.svg?size=64&color=currentColor",
  // "https://icongr.am/devicon/c-original.svg?size=64&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert("You win !!");
      location.reload();
    }
  }, [guessed])

  return (
    <>
      <section style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "20vh" }}>
      <h1 className="nes-text" style={{ textShadow: "3.5px 2px 4px white" }}>Memo Test Game:</h1>
        <Link to="/">
          <button type="button" className="nes-btn is-primary" style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >Go to Home</button>
        </Link>
      </section><br />


      <div>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: "8px", }}>
          {
            IMAGES?.map((image) => {
              const [, url] = image.split("|");
              return (
                <li
                  key={image}
                  onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(image))}
                  style={{ cursor: "pointer", padding: 12, border: "2px solid #666", borderRadius: 12 }}
                >
                  {selected.includes(image) || guessed.includes(image) ? (
                    <img src={url} alt="tech-icon" />
                  ) : (
                    <img src={"https://icongr.am/clarity/bolt.svg?size=64&color=currentColor"} alt="tech-icon" />
                  )
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}