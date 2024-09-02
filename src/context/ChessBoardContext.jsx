import React, { createContext, useState } from 'react';

export const ChessBoardContext = createContext();

function ChessBoardProvider({ children }) {
  const [chessBoard, setChessBoard] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [occupiedBlock, setOccupiedBlock] = useState(null);
  const [activeFaceTurn, setActiveFaceTurn] = useState('white');

  const updateCellComponent = (x, y, newComponent) => {
    console.log(x, " " + y);
    if(validMoves.some(move => move.x === x && move.y === y)) {
      setChessBoard(prevBoard => {
        const newBoard = [...prevBoard];
        newBoard[occupiedBlock.y][occupiedBlock.x] = {
          ...newBoard[occupiedBlock.y][occupiedBlock.x],
          component: null,
          face: '',
        };

        const updatedComponent = React.cloneElement(newComponent, {
          currentPosition: {x, y},
          active: false,
        })
        newBoard[y][x] = {
          ...newBoard[y][x],
          component: updatedComponent,
          face: newComponent.props.face,
        };
        setOccupiedBlock(null);
        setSelectedPiece(null);
        setValidMoves([]);
        setChessBoard(newBoard);
        newComponent.props.face === 'black'? setActiveFaceTurn('white'): setActiveFaceTurn('black');
        return newBoard;
      });
    }
  };

  function handleClick(piece, moveSet, currentPosition, setIsActive, face) {
    setSelectedPiece(piece);
    setIsActive(true);
    console.log(piece);
    setValidMoves(moveSet);
    console.log(moveSet);
    setOccupiedBlock(currentPosition);
  }

  return (
    <ChessBoardContext.Provider value={{ chessBoard, setChessBoard, selectedPiece, setSelectedPiece, validMoves, setValidMoves, handleClick, updateCellComponent, activeFaceTurn, setActiveFaceTurn }}>
      {children}
    </ChessBoardContext.Provider>
  );
}

export default ChessBoardProvider;
