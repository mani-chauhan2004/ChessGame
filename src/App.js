import React from 'react'
import ChessBoard from './components/board/chessBoard'
import MainMenu from './pages/MainMenu';

function App() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <ChessBoard/>
    </div>
  )
}

export default App;