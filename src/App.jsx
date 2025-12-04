import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LibraryGames } from './pages/LibraryGames';
import { Perfil } from './pages/Perfil';
import { AboutGame } from './pages/AboutGame';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="/LetterPlay/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogos" element={<LibraryGames />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/aboutGame" element={<AboutGame />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
