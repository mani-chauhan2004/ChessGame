import React from 'react'
import { FaChess } from "react-icons/fa";
import { Link } from 'react-router-dom';
function MainMenu() {
  return (
    <div className='w-screen h-screen bg-gray-200 flex flex-col px-40'>
        <div className='w-full h-full p-24 flex items-center font-baskervville justify-between bg-fade-gray'>
            <div className='flex flex-col gap-10'>
                <button className="relative overflow-hidden w-96 h-24 px-6 py-2 text-6xl text-white font-bold rounded-xl bg-green-600">
                    <Link to='/main-menu/start-game'>PLAY</Link>
                </button>
                <button className="relative overflow-hidden w-96 h-24 px-6 py-2 text-6xl text-white font-bold rounded-xl bg-green-600">
                    <Link to='start-game'>OPTIONS</Link>
                </button>
                <button className="relative overflow-hidden w-96 h-24 px-6 py-2 text-6xl text-white font-bold rounded-xl bg-green-600">
                    <Link to='start-game'>QUIT</Link>
                </button>
            </div>

            <FaChess className='h-96 w-96'/>
        </div>
        
    </div>
  )
}

export default MainMenu