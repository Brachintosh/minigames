import { Routes, Route } from "react-router-dom"
import LandingPage from "./screens/LandingPage"
import Memotest from "./screens/Memotest"
import Pokemon from "./screens/Pokemon"
import WordsPerMinute from "./screens/WordsPerMinute"
function App() {

  return (
    <>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Memotest />} path="/memotest" />
        <Route element={<Pokemon />} path="/pokemon" />
        <Route element={<WordsPerMinute />} path="/wpm" />
      </Routes>
    </>
  )
}

export default App
