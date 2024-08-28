import React, { createContext, useState } from 'react';

export const ChessBoardContext = createContext();

function ChessBoardProvider({ children }) {
  const [chessBoard, setChessBoard] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [occupiedBlock, setOccupiedBlock] = useState(null);

  const updateCellComponent = (x, y, newComponent) => {
    console.log(x, " " + y);
    if(validMoves.some(move => move.x === x && move.y === y)) {
      setChessBoard(prevBoard => {
        const newBoard = [...prevBoard];
        newBoard[occupiedBlock.y][occupiedBlock.x] = {
          ...newBoard[occupiedBlock.y][occupiedBlock.x],
          component: null,
        };

        const updatedComponent = React.cloneElement(newComponent, {
          currentPosition: {x, y},
        })
        newBoard[y][x] = {
          ...newBoard[y][x],
          component: updatedComponent
        };
        setOccupiedBlock(null);
        setSelectedPiece(null);
        setValidMoves([]);
        setChessBoard(newBoard);
        return newBoard;
      });
    }
  };

  function handleClick(piece, moveSet, currentPosition) {
    setSelectedPiece(piece);
    console.log(piece);
    setValidMoves(moveSet);
    console.log(moveSet);
    setOccupiedBlock(currentPosition);
  }

  return (
    <ChessBoardContext.Provider value={{ chessBoard, setChessBoard, selectedPiece, setSelectedPiece, validMoves, setValidMoves, handleClick, updateCellComponent }}>
      {children}
    </ChessBoardContext.Provider>
  );
}

export default ChessBoardProvider;
