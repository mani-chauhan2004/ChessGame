import React, { useContext } from 'react'
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
import { ChessBoardContext } from '../../context/ChessBoardContext';


export function PiecePawn({defaultPosition, currentPosition, face}){
    const {handleClick, chessBoard} = useContext(ChessBoardContext);
    const moveSet = [];

    function calculateMoves(currentPosition, moveSet){
      const movementDirection = face === 'black'? -1: 1;
      let doubleMove = true;
      if(currentPosition.y !== defaultPosition.y){
        doubleMove = false;
      }

      function isPositionEmpty(movePosition) {
        if(chessBoard[movePosition.y][movePosition.x].component === null){
          return true;
        }
      }

      function isValidPosition(movePosition){

        return movePosition.x >= 0 && movePosition.x < 8 && movePosition.y >= 0 && movePosition.y < 8;
      }

      function isOpponentPiece(movePosition){
        return chessBoard[movePosition.y][movePosition.x].component !== null && chessBoard[movePosition.y][movePosition.x].face !== face;
      }

      if(doubleMove){
        const doubleMovePosition = {x: currentPosition.x, y: currentPosition.y + movementDirection * 2};
        const singleMovePosition = {x: currentPosition.x, y: currentPosition.y + movementDirection};
        if(isPositionEmpty(doubleMovePosition)){
          if(isPositionEmpty(singleMovePosition)){
            moveSet.push(doubleMovePosition);
          }
        }
      }

      const singleMovePosition = {x: currentPosition.x, y: currentPosition.y + movementDirection};
      if(isPositionEmpty(singleMovePosition)){
        moveSet.push(singleMovePosition);
      }

      
      const movePosition = {x: currentPosition.x, y: currentPosition.y + movementDirection};
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      
      const leftMovePosition = {x: currentPosition.x - 1, y: currentPosition.y + movementDirection};
      if(isValidPosition(leftMovePosition) && isOpponentPiece(leftMovePosition)){
        moveSet.push(leftMovePosition);
      }
      
      const rightMovePosition = {x: currentPosition.x + 1, y: currentPosition.y + movementDirection};
      if(isValidPosition(rightMovePosition) && isOpponentPiece(rightMovePosition)){
        moveSet.push(rightMovePosition);
      }
      return moveSet;
    }

    calculateMoves(currentPosition, moveSet);

    return (
      face === 'black'
        ? <FaChessPawn onClick={() => handleClick(<PiecePawn {...{ defaultPosition, currentPosition, face }} />, moveSet, currentPosition)} className='w-full h-full p-2 text-center' />
        : <FaRegChessPawn onClick={() => handleClick(<PiecePawn {...{ defaultPosition, currentPosition, face }} />, moveSet, currentPosition)} className='w-full h-full p-2 text-center' />
    );
}
export function PieceRook({defaultPosition, currentPosition}){
  
  const face = defaultPosition.y === 7? 'black': 'white';
  const {handleClick} = useContext(ChessBoardContext);
  const moveSet = [];

  return(
      defaultPosition.y === 7? <FaChessRook onClick={() => handleClick(FaChessRook, moveSet)} className='w-full h-full p-2 text-center'/>: < FaRegChessRook onClick={() => handleClick(FaRegChessRook, moveSet)} className='w-full h-full p-2 text-center'/>

  );
}
export function PieceKnight({defaultPosition, currentPosition}){
  
  const face = defaultPosition.y === 7? 'black': 'white';
  const {handleClick} = useContext(ChessBoardContext);
  const moveSet = [];
  return(
      defaultPosition.y === 7? <FaChessKnight onClick={() => handleClick(FaChessKnight, moveSet)} className='w-full h-full p-2 text-center'/>: <FaRegChessKnight onClick={() => handleClick(FaRegChessKnight, moveSet)} className='w-full h-full p-2 text-center'/>

  );
}
export function PieceBishop({defaultPosition, currentPosition}) {
  
  const face = defaultPosition.y === 7? 'black': 'white';
  const {handleClick} = useContext(ChessBoardContext);
  const moveSet = [];
      

  return(
      defaultPosition.y === 7? <FaChessBishop onClick={() => handleClick(FaChessBishop, moveSet)} className='w-full h-full p-2 text-center'/>: <FaRegChessBishop onClick={() => handleClick(FaRegChessBishop, moveSet)} className='w-full h-full p-2 text-center'/>
  );
}
export function PieceQueen({defaultPosition, currentPosition}){
  
  const face = defaultPosition.y === 7? 'black': 'white';
  const {handleClick} = useContext(ChessBoardContext);
  const moveSet = [];  

    return(
        defaultPosition.y === 7? <FaChessQueen onClick={() => handleClick(FaChessQueen, moveSet)} className='w-full h-full p-2 text-center'/>: <FaRegChessQueen onClick={() => handleClick(FaRegChessQueen, moveSet)} className='w-full h-full p-2 text-center'/>
    );
}
export function PieceKing({defaultPosition, currentPosition}){
  
  const face = defaultPosition.y === 7? 'black': 'white';
  const {handleClick} = useContext(ChessBoardContext);
  const moveSet = [];  

    return(
        defaultPosition.y === 7? <FaChessKing onClick={() => handleClick(FaChessKing, moveSet)} className='w-full h-full p-2 text-center'/> : <FaRegChessKing onClick={() => handleClick(FaRegChessKing, moveSet)} className='w-full h-full p-2 text-center'/>
    );
}
