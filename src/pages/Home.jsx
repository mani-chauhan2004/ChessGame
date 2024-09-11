import React from 'react'
import { FaChess } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='w-screen h-screen bg-gray-50 flex flex-col p-10 pt-0'>
        <div className='w-full h-full p-24 flex items-center font-baskervville justify-between bg-fade-gray'>
            <div>
                <div className='flex '>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>W</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>E</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>B</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'></h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>M</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>A</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>S</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>T</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>E</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>R</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-7xl'>S</h1></div>  
                </div>
                <div className='flex '>
                    <div className='w-40 bg-green-600 h-40 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-9xl'>C</h1></div>
                    <div className='w-40 bg-gray-300 h-480flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-9xl'>H</h1></div>
                    <div className='w-40 bg-green-600 h-40 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-9xl'>E</h1></div>
                    <div className='w-40 bg-gray-300 h-40 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-9xl'>S</h1></div>
                    <div className='w-40 bg-green-600 h-40 flex items-center content-center pt-4'><h1 className='text-black text-center font-black w-full h-full text-9xl'>S</h1></div>
                     
                </div>
            </div>

            <FaChess className='h-80 w-80'/>
        </div>
        <button className="relative overflow-hidden px-6 py-2 text-white font-bold rounded bg-fade-green">
            <Link to='main-menu'>CLICK TO START</Link>
        </button>
    </div>
  )
}

export default Home;