import React, { createContext, useEffect, useState, useContext } from 'react';
import { PlayerPointsContext } from './PlayerPointsContext';
export const ChessBoardContext = createContext();

function ChessBoardProvider({ children }) {

  const {hasFaceScored} = useContext(PlayerPointsContext);
  const [chessBoard, setChessBoard] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [occupiedBlock, setOccupiedBlock] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [activeFaceTurn, setActiveFaceTurn] = useState('white');
  const [kingPositionBlack, setKingPositionBlack] = useState({x: 4, y: 7});
  const [kingPositionWhite, setKingPositionWhite] = useState({x: 4, y: 0});
  const [isCheck, setIsCheck] = useState(false);
  const [chessMoveIndex, setChessMoveIndex] = useState(1);
  const [currentCheckIndex, setCurrentCheckIndex] = useState(null);

  useEffect(() =>{
    setChessMoveIndex(chessMoveIndex+1);
  }, [activeFaceTurn]);
  const updateCellComponent = (x, y, newComponent) => {
    if(validMoves.some(move => move.x === x && move.y === y)) {
      setChessBoard(prevBoard => {

        if(chessBoard[x][y].component !== null){
          hasFaceScored(chessBoard[x][y].component, newComponent.props.face ==="black"? "white": "black");
          console.log(newComponent.props);  
        }

        const newBoard = [...prevBoard];
        newBoard[occupiedBlock.y][occupiedBlock.x] = {
          ...newBoard[occupiedBlock.y][occupiedBlock.x],
          component: null,
          face: '',
        };
        setSelectedPlace({});

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
        setValidMoves(prevMoves => []);
        console.log(isCheck);
        setChessBoard(newBoard);
        newComponent.props.face === 'black'? setActiveFaceTurn('white'): setActiveFaceTurn('black');
        return newBoard;
      });
    }
  };

  function handleClick(piece, moveSet, currentPosition) {
    setSelectedPiece(piece);
    // setIsActive(true);
    setValidMoves(moveSet);
    // console.log(moveSet);
    setOccupiedBlock(currentPosition);
  }

  return (
    <ChessBoardContext.Provider value={{ chessBoard, setChessBoard, selectedPiece, setSelectedPiece, validMoves, setValidMoves, handleClick, updateCellComponent, activeFaceTurn, setActiveFaceTurn, selectedPlace, setSelectedPlace, kingPositionBlack, setKingPositionBlack, kingPositionWhite, setKingPositionWhite, isCheck, setIsCheck, currentCheckIndex, chessMoveIndex, setCurrentCheckIndex, setChessMoveIndex }}>
      {children}
    </ChessBoardContext.Provider>
  );
}

export default ChessBoardProvider;
