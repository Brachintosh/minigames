import { Link } from 'react-router-dom';

const bgIMG = "https://i.pinimg.com/736x/ca/e0/1a/cae01ab5cce960db0d7819cc96e97ce8--hd-video-pixel-art.jpg"

export default function LandingPage() {
  return (
    <div
    style={{
      height: "100vh",
      backgroundImage: `url(${bgIMG})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover",
    }}
    >
      <section style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        height: "35vh"
      }}
      >
        <h1 className="nes-text" style={{ textShadow: "3.5px 2px 4px white" }}>Mini Games:</h1>
      </section>
      <br /><br />

      <section style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <Link to="/memotest">
          <button type="button" className="nes-btn is-primary" >Memotest</button>
        </Link>
        <Link to="/wpm">
          <button type="button" className="nes-btn is-warning" >Word per Minute</button>
        </Link>
        <Link to="/pokemon">
          <button type="button" className="nes-btn is-error" >PokéGuess</button>
        </Link>
      </section>
      <br />
    </div>
  )
}