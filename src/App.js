import React from 'react'
import ChessBoard from './components/board/chessBoard'
import MainMenu from './pages/MainMenu';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';

function App() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/main-menu' Component={MainMenu}/>
          <Route path='/main-menu/start-game' Component={ChessBoard}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;