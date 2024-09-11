import React, {createContext, useState} from 'react';
import { FaChessKnight,
  FaChessRook,
  FaChessBishop,
  FaChessKing,
  FaChessQueen,
  FaChessPawn, 

  FaRegChessKnight,
  FaRegChessRook,
  FaRegChessBishop,
  FaRegChessKing,
  FaRegChessQueen,
  FaRegChessPawn
} from "react-icons/fa6";

import { PieceBishop, PieceKnight, PiecePawn, PieceQueen, PieceRook, PieceKing } from '../components/pieces/ChessPieces';

export const PlayerPointsContext = createContext();

function PlayerPointsProvider({children}) {
  const [capturedBlacks, setCapturedBlacks] = useState([]);
  const [capturedWhites, setCaptureDWhites] = useState([]);

  function hasFaceScored({component, face}){
    if(component === PiecePawn){
      if(face === "black"){
        setCapturedBlacks([...capturedBlacks, <FaChessPawn className='w-full'/>]);
        console.log(capturedBlacks);
      }
      else{
        setCaptureDWhites([...capturedWhites, <FaRegChessPawn className='w-full'/>]);
        console.log(capturedWhites);
      }
    }

    else if(component === PieceRook){
      if(face === "black"){
        setCapturedBlacks([...capturedBlacks, <FaChessRook className='w-full'/>]);
      }
      else{
        setCaptureDWhites([...capturedWhites, <FaRegChessRook className='w-full'/>]);
      }
    }

    else if(component === PieceBishop){
      if(face === "black"){
        setCapturedBlacks([...capturedBlacks, <FaChessBishop className='w-full'/>]);
      }
      else{
        setCaptureDWhites([...capturedWhites, <FaRegChessBishop className='w-full'/>]);
      }
    }

    else if(component === PieceQueen){
      if(face === "black"){
        setCapturedBlacks([...capturedBlacks, <FaChessQueen className='w-full'/>]);
      }
      else{
        setCaptureDWhites([...capturedWhites, <FaRegChessQueen className='w-full'/>]);
      }
    }

    else if(component === PieceKing){
      if(face === "black"){
        setCapturedBlacks([...capturedBlacks, <FaChessKing className='w-full'/>]);
      }
      else{
        setCaptureDWhites([...capturedWhites, <FaRegChessKing className='w-full'/>]);
      }
    }

    else if(component === PieceKnight){
      if(face === "black"){
        setCapturedBlacks([...capturedBlacks, <FaChessKnight className='w-full'/>]);
      }
      else{
        setCaptureDWhites([...capturedWhites, <FaRegChessKnight className='w-full'/>]);
      }
    }
    console.log(capturedWhites);
    console.log(capturedWhites);

  }

  return (
    <PlayerPointsContext.Provider value={{capturedBlacks, setCapturedBlacks, capturedWhites, setCaptureDWhites, hasFaceScored}}>
      {children}
    </PlayerPointsContext.Provider>
  )
}

export default PlayerPointsProvider;