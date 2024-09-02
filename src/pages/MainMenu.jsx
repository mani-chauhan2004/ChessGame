import React from 'react'
import { FaChess } from "react-icons/fa";
function MainMenu() {
  return (
    <div className='w-screen h-screen bg-gray-50 flex flex-col p-20 pt-40'>
        <div className='w-full h-96 bg-gray-200 p-24 flex items-center justify-between'>
            <div>
                <div className='flex '>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>W</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>E</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>B</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'></h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>M</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>A</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>S</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>T</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>E</h1></div>
                    <div className='w-20 bg-gray-300 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>R</h1></div>
                    <div className='w-20 bg-green-600 h-24 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-7xl'>S</h1></div>  
                </div>
                <div className='flex '>
                    <div className='w-40 bg-green-600 h-40 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-9xl'>C</h1></div>
                    <div className='w-40 bg-gray-300 h-480flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-9xl'>H</h1></div>
                    <div className='w-40 bg-green-600 h-40 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-9xl'>E</h1></div>
                    <div className='w-40 bg-gray-300 h-480flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-9xl'>S</h1></div>
                    <div className='w-40 bg-green-600 h-40 flex items-center content-center'><h1 className='text-black text-center font-bold w-full h-full text-9xl'>S</h1></div>
                     
                </div>
            </div>

            <FaChess className='h-80 w-80'/>
        </div>
        <button className='m-auto text-3xl text-white text-semibold bg-green-600 px-10 py-5 rounded-xl mt-4'>CLICK TO START</button>
    </div>
  )
}

export default MainMenu