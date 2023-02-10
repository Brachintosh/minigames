import { Routes, Route, Link } from "react-router-dom"
import Memotest from "./screens/Memotest"
import Pokemon from "./screens/Pokemon"
import WordsPerMinute from "./screens/WordsPerMinute"
function App() {

  return (
    <>
      <Routes>
        <Route element={<Memotest />} path="/memotest" />
        <Route element={<Pokemon />} path="/pokemon" />
        <Route element={<WordsPerMinute />} path="/wpm" />
      </Routes>
      {/* <Link to="/memotest">
        <button style={{ cursor: "pointer", fontSize: "24px", padding: ".25rem" }} >Memotest</button>
      </Link> */}
    </>
  )
}

export default App
