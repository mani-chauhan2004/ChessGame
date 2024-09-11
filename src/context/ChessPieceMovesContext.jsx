import React, {createContext, useContext, useEffect} from 'react';
import { ChessBoardContext } from './ChessBoardContext';

export const ChessPieceMovesContext = createContext();

function ChessPieceProvider({children}) {

    const {chessBoard, kingPositionWhite, kingPositionBlack, isCheck, setIsCheck, currentCheckIndex, chessMoveIndex, setCurrentCheckIndex, setCurrentMoveIndex} = useContext(ChessBoardContext);
    function isPositionEmpty(movePosition) {
        if(chessBoard[movePosition.y][movePosition.x].component === null){
          
          return true;
        }
    }

    useEffect(() => {
      // console.log(isCheck);
    }, [chessBoard]);
  
    function isValidPosition(movePosition){
        return movePosition.x >= 0 && movePosition.x < 8 && movePosition.y >= 0 && movePosition.y < 8;
    }
  
    function isOpponentPiece(movePosition, face){
        return chessBoard[movePosition.y][movePosition.x].component !== null && chessBoard[movePosition.y][movePosition.x].face !== face;
    }

    function calculatePawnMoves(currentPosition, defaultPosition, face){
      let moveSet = [];
      const movementDirection = face === 'black'? -1: 1;
      let doubleMove = true;
      if(currentPosition.y !== defaultPosition.y){
        doubleMove = false;
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
      if(isValidPosition(leftMovePosition) && isOpponentPiece(leftMovePosition, face)){
        moveSet.push(leftMovePosition);
      }
      
      const rightMovePosition = {x: currentPosition.x + 1, y: currentPosition.y + movementDirection};
      if(isValidPosition(rightMovePosition) && isOpponentPiece(rightMovePosition, face)){
        moveSet.push(rightMovePosition);
      }
        
      if(moveSet.some(move => move.x === kingPositionBlack.x && move.y === kingPositionBlack.y || move.x === kingPositionWhite.x && move.y === kingPositionWhite.y)){
        setCurrentCheckIndex(chessMoveIndex);
      }
      if(currentCheckIndex === chessMoveIndex){
        setIsCheck(true);
      }

      else{
        setIsCheck(false);
      }

      return moveSet;
    }

    function calculateRookMoves(currentPosition, face){
      let moveSet = [];
  
      for(let movePositionXLeft = currentPosition.x-1; movePositionXLeft >= 0; movePositionXLeft--) {
        let movePosition = {x: movePositionXLeft, y: currentPosition.y}
        if(isPositionEmpty(movePosition)){
          moveSet.push(movePosition);
        }
        else if(isOpponentPiece(movePosition, face)){
          moveSet.push(movePosition);
          break;
        }
        else{
          break;
        }
      }
      
  
      for(let movePositionXRight = currentPosition.x+1; movePositionXRight < 8; movePositionXRight++) {
        let movePosition = {x: movePositionXRight, y: currentPosition.y}
        if(isPositionEmpty(movePosition)){
          moveSet.push(movePosition);
        }
        else if(isOpponentPiece(movePosition, face)){
          moveSet.push(movePosition);
          break;
        }
        else{
          break;
        }
      }
  
      for(let movePositionYTop = currentPosition.y-1; movePositionYTop >= 0; movePositionYTop--) {
        let movePosition = {x: currentPosition.x, y: movePositionYTop};
        if(isPositionEmpty(movePosition)){
          moveSet.push(movePosition);
        }
        else if(isOpponentPiece(movePosition, face)){
          moveSet.push(movePosition);
          break;
        }
        else{
          break;
        }
      }
      for(let movePositionYBottom = currentPosition.y+1; movePositionYBottom < 8; movePositionYBottom++) {
        let movePosition = {x: currentPosition.x, y: movePositionYBottom};
        if(isPositionEmpty(movePosition)){
          moveSet.push(movePosition);
        }
        else if(isOpponentPiece(movePosition, face)){
          moveSet.push(movePosition);
          break;
        }
        else{
          break;
        }
      }

      if(moveSet.some(move => move.x === kingPositionBlack.x && move.y === kingPositionBlack.y || move.x === kingPositionWhite.x && move.y === kingPositionWhite.y)){
        setIsCheck(true); 
      }

      if(moveSet.some(move => move.x === kingPositionBlack.x && move.y === kingPositionBlack.y || move.x === kingPositionWhite.x && move.y === kingPositionWhite.y)){
        setCurrentCheckIndex(chessMoveIndex);
      }
      if(currentCheckIndex === chessMoveIndex){
        setIsCheck(true);
      }

      else{
        setIsCheck(false);
      }
  
      return moveSet;
    }

    function calculateKnightMoves(currentPosition, face){
        let moveSet = [];
        const moves = [
          {x: currentPosition.x+1, y: currentPosition.y+2},
          {x: currentPosition.x+1, y: currentPosition.y-2},
          {x: currentPosition.x-1, y: currentPosition.y+2},
          {x: currentPosition.x-1, y: currentPosition.y-2},
          {x: currentPosition.x+2, y: currentPosition.y+1},
          {x: currentPosition.x-2, y: currentPosition.y+1},
          {x: currentPosition.x+2, y: currentPosition.y-1},
          {x: currentPosition.x-2, y: currentPosition.y-1},
        ]
    
        moves.forEach(element => {
          if(isValidPosition(element) && isPositionEmpty(element)) {
            moveSet.push(element);
          }
    
          else if(isValidPosition(element) && isOpponentPiece(element, face)) {
            moveSet.push(element);
          }
        });

        if(moveSet.some(move => move.x === kingPositionBlack.x && move.y === kingPositionBlack.y || move.x === kingPositionWhite.x && move.y === kingPositionWhite.y)){
          setCurrentCheckIndex(chessMoveIndex);
        }
        if(currentCheckIndex === chessMoveIndex){
          setIsCheck(true);
        }
  
        else{
          setIsCheck(false);
        }
    
        return moveSet;
      }

function calculateBishopMoves(currentPosition, face){
    let moveSet = [];
    for(let moveDelta = 1; moveDelta+currentPosition.x < 8 && moveDelta+currentPosition.y < 8; moveDelta++){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y+moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    
    for(let moveDelta = -1; moveDelta+currentPosition.x >= 0 && moveDelta+currentPosition.y >= 0; moveDelta--){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y+moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    
    for(let moveDelta = -1; moveDelta+currentPosition.x >= 0 && currentPosition.y-moveDelta < 8; moveDelta--){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y-moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    
    for(let moveDelta = 1; currentPosition.x+moveDelta < 8 && currentPosition.y-moveDelta >= 0; moveDelta++){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y-moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }

    if(moveSet.some(move => move.x === kingPositionBlack.x && move.y === kingPositionBlack.y || move.x === kingPositionWhite.x && move.y === kingPositionWhite.y)){
      setCurrentCheckIndex(chessMoveIndex);
    }
    if(currentCheckIndex === chessMoveIndex){
      setIsCheck(true);
    }

    else{
      setIsCheck(false);
    }

    return moveSet;
  }


  function calculateQueenMoves(currentPosition, face){
    let moveSet = [];
    for(let movePositionXLeft = currentPosition.x-1; movePositionXLeft >= 0; movePositionXLeft--) {
      let movePosition = {x: movePositionXLeft, y: currentPosition.y}
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    

    for(let movePositionXRight = currentPosition.x+1; movePositionXRight < 8; movePositionXRight++) {
      let movePosition = {x: movePositionXRight, y: currentPosition.y}
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }

    for(let movePositionYTop = currentPosition.y-1; movePositionYTop >= 0; movePositionYTop--) {
      let movePosition = {x: currentPosition.x, y: movePositionYTop};
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    
    for(let movePositionYBottom = currentPosition.y+1; movePositionYBottom < 8; movePositionYBottom++) {
      let movePosition = {x: currentPosition.x, y: movePositionYBottom};
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }

    for(let movePositionXLeft = currentPosition.x-1; movePositionXLeft >= 0; movePositionXLeft--) {
      let movePosition = {x: movePositionXLeft, y: currentPosition.y}
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }

    for(let moveDelta = 1; moveDelta+currentPosition.x < 8 && moveDelta+currentPosition.y < 8; moveDelta++){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y+moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    

    for(let moveDelta = -1; moveDelta+currentPosition.x >= 0 && moveDelta+currentPosition.y >= 0; moveDelta--){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y+moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    
    for(let moveDelta = -1; moveDelta+currentPosition.x >= 0 && currentPosition.y-moveDelta < 8; moveDelta--){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y-moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    
    for(let moveDelta = 1; currentPosition.x+moveDelta < 8 && currentPosition.y-moveDelta >= 0; moveDelta++){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y-moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition, face)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }

    if(moveSet.some(move => move.x === kingPositionBlack.x && move.y === kingPositionBlack.y || move.x === kingPositionWhite.x && move.y === kingPositionWhite.y)){
      setCurrentCheckIndex(chessMoveIndex);
    }
    if(currentCheckIndex === chessMoveIndex){
      setIsCheck(true);
    }

    else{
      setIsCheck(false);
    }

    return moveSet;
  }

  function calculateKingMoves(currentPosition, face){
    let moveSet = [];
    for(let dy = -1; dy <= 1; dy++){
      for(let dx = -1; dx <= 1; dx++){
        const movePosition = {x: currentPosition.x + dx, y: currentPosition.y + dy};
        if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
          moveSet.push(movePosition);
        }
        else if(isValidPosition(movePosition) && isOpponentPiece(movePosition, face)){
          moveSet.push(movePosition);
          break;
        }
      }
    }

    if(moveSet.some(move => move.x === kingPositionBlack.x && move.y === kingPositionBlack.y || move.x === kingPositionWhite.x && move.y === kingPositionWhite.y)){
      setCurrentCheckIndex(chessMoveIndex);
    }
    if(currentCheckIndex === chessMoveIndex){
      setIsCheck(true);
    }

    else{
      setIsCheck(false);
    }

    return moveSet;
  }

  return(
    <ChessPieceMovesContext.Provider value={{calculatePawnMoves, calculateRookMoves, calculateKnightMoves, calculateBishopMoves, calculateQueenMoves, calculateKingMoves, isOpponentPiece, isPositionEmpty, isValidPosition }}>
      {children}
    </ChessPieceMovesContext.Provider>
  );

}

export default ChessPieceProvider;