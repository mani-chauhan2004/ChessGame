import React, { useContext } from 'react';
import { ChessBoardContext } from '../context/ChessBoardContext';

function ChessBlock({ type, component, position, face }) {
  const { validMoves, selectedPiece, setSelectedPiece, ChessBoard, updateCellComponent, capturedBlacks, setCapturedBlacks, capturedWhites, setCapturedWhites } = useContext(ChessBoardContext);
  const isHighlighted = validMoves.some(move => move.x === position.x && move.y === position.y);

  function handleClick(){
    
    if(selectedPiece !== null ){
      updateCellComponent(position.x, position.y, selectedPiece);
    }
      
  }

  return (
    <div onClick={() => handleClick()}
      className={`h-20 w-20 ${type === 'white' ? 'bg-gray-300' : 'bg-green-600'} ${isHighlighted ? 'bg-yellow-200 border-2 border-white' : ''}`}
    >
      <div className='w-full h-full flex items-center justify-center text-6xl'>
        {component}
      </div>
    </div>
  );
}

export default ChessBlock;
