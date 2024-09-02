import React, { useContext, useState } from 'react'
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


export function PiecePawn({defaultPosition, currentPosition, face, active}){

    const {handleClick, chessBoard, selectedPiece, activeFaceTurn, setActiveFaceTurn} = useContext(ChessBoardContext);
    const [isActive, setIsActive] = useState(active);

    useContext(() => {
      if(selectedPiece !== PiecePawn){
        setIsActive(!isActive);
      }
    }, [selectedPiece]);

    const moveSet = [];

    function handlePiece(){
      if(activeFaceTurn === face){
        handleClick(<PiecePawn {...{ defaultPosition, currentPosition, face, active }} />, moveSet, currentPosition, setIsActive, face);
      }
    }

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
        ? <FaChessPawn onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
        : <FaRegChessPawn onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
    );
}
export function PieceRook({ defaultPosition, currentPosition, face , active}){

    const {handleClick, chessBoard, selectedPiece, activeFaceTurn, setActiveFaceTurn} = useContext(ChessBoardContext);
    const [isActive, setIsActive] = useState(active);
    const moveSet = [];

    function handlePiece(){
      if(activeFaceTurn === face){
        handleClick(<PieceRook {...{ defaultPosition, currentPosition, face, active }} />, moveSet, currentPosition, setIsActive, face);
      }
    }

    function calculateMoves(currentPosition, moveSet){
      function isPositionEmpty(movePosition) {
        if(chessBoard[movePosition.y][movePosition.x].component === null){
          
          return true;
        }
    }

    function isOpponentPiece(movePosition){
      return chessBoard[movePosition.y][movePosition.x].component !== null && chessBoard[movePosition.y][movePosition.x].face !== face;
    }

    for(let movePositionXLeft = currentPosition.x-1; movePositionXLeft >= 0; movePositionXLeft--) {
      let movePosition = {x: movePositionXLeft, y: currentPosition.y}
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      else if(isOpponentPiece(movePosition)){
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
      else if(isOpponentPiece(movePosition)){
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
      else if(isOpponentPiece(movePosition)){
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
      else if(isOpponentPiece(movePosition)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }

    return moveSet;
  }

  useContext(() => {
    if(selectedPiece !== PieceRook){
      setIsActive(false);
    }
  }, [selectedPiece]);



  calculateMoves(currentPosition, moveSet);

  return (
    face === 'black'
      ? <FaChessRook onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessRook onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}

export function PieceKnight({defaultPosition, currentPosition, face, active}){
  
  const {handleClick, chessBoard, selectedPiece, activeFaceTurn, setActiveFaceTurn} = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(active);
  const moveSet = [];
  function handlePiece(){
    if(activeFaceTurn === face){
      handleClick(<PieceKnight {...{ defaultPosition, currentPosition, face, active }} />, moveSet, currentPosition, setIsActive, face);
    }
  }
  function calculateMoves(currentPosition, moveSet){
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

      else if(isValidPosition(element) && isOpponentPiece(element)) {
        moveSet.push(element);
      }
    });

    return moveSet;
  }

  useContext(() => {
    if(selectedPiece !== PieceKnight){
      setIsActive(false);
    }
  }, [selectedPiece]);

  calculateMoves(currentPosition, moveSet);



  return (
    face === 'black'
      ? <FaChessKnight onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessKnight onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}
export function PieceBishop({defaultPosition, currentPosition, face, active}) {
  
  const {handleClick, chessBoard, selectedPiece, activeFaceTurn, setActiveFaceTurn} = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(active);
  const moveSet = [];

  function handlePiece(){
    if(activeFaceTurn === face){
      handleClick(<PieceBishop {...{ defaultPosition, currentPosition, face, active }} />, moveSet, currentPosition, setIsActive, face);
    }
  }

  function calculateMoves(currentPosition, moveSet){
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

    for(let moveDelta = 1; moveDelta+currentPosition.x < 8 && moveDelta+currentPosition.y < 8; moveDelta++){
      const movePosition = {x: currentPosition.x+moveDelta, y: currentPosition.y+moveDelta};
      if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }

      else if(isOpponentPiece(movePosition)){
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

      else if(isOpponentPiece(movePosition)){
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

      else if(isOpponentPiece(movePosition)){
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

      else if(isOpponentPiece(movePosition)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }
    return moveSet;
  }

  useContext(() => {
    if(selectedPiece !== PieceBishop){
      setIsActive(false);
    }
  }, [selectedPiece]);

  calculateMoves(currentPosition, moveSet);



  return (
    face === 'black'
      ? <FaChessBishop onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessBishop onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}
export function PieceQueen({defaultPosition, currentPosition, face, active}){
  
  const {handleClick, chessBoard, selectedPiece, activeFaceTurn, setActiveFaceTurn} = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(active);
  const moveSet = [];

  function handlePiece(){
    if(activeFaceTurn === face){
      handleClick(<PieceQueen {...{ defaultPosition, currentPosition, face, active }} />, moveSet, currentPosition, setIsActive, face);
    }
  }

  function calculateMoves(currentPosition, moveSet){
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

    for(let movePositionXLeft = currentPosition.x-1; movePositionXLeft >= 0; movePositionXLeft--) {
      let movePosition = {x: movePositionXLeft, y: currentPosition.y}
      if(isPositionEmpty(movePosition)){
        moveSet.push(movePosition);
      }
      else if(isOpponentPiece(movePosition)){
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
      else if(isOpponentPiece(movePosition)){
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
      else if(isOpponentPiece(movePosition)){
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
      else if(isOpponentPiece(movePosition)){
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
      else if(isOpponentPiece(movePosition)){
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

      else if(isOpponentPiece(movePosition)){
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

      else if(isOpponentPiece(movePosition)){
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

      else if(isOpponentPiece(movePosition)){
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

      else if(isOpponentPiece(movePosition)){
        moveSet.push(movePosition);
        break;
      }
      else{
        break;
      }
    }

    return moveSet;
  }

  useContext(() => {
    if(selectedPiece !== PieceQueen){
      setIsActive(false);
    }
  }, [selectedPiece]);

  calculateMoves(currentPosition, moveSet);



  return (
    face === 'black'
      ? <FaChessQueen onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessQueen onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}
export function PieceKing({defaultPosition, currentPosition, face, active}){
  
  const {handleClick, chessBoard, selectedPiece, activeFaceTurn, setActiveFaceTurn} = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(active);
  const moveSet = [];

  function handlePiece(){
    if(activeFaceTurn === face){
      handleClick(<PieceKing {...{ defaultPosition, currentPosition, face, active }} />, moveSet, currentPosition, setIsActive, face);
    }
  }

  function calculateMoves(currentPosition, moveSet){
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

    for(let dy = -1; dy <= 1; dy++){
      for(let dx = -1; dx <= 1; dx++){
        const movePosition = {x: currentPosition.x + dx, y: currentPosition.y + dy};
        if(isValidPosition(movePosition) && isPositionEmpty(movePosition)){
          moveSet.push(movePosition);
        }
        else if(isValidPosition(movePosition) && isOpponentPiece(movePosition)){
          moveSet.push(movePosition);
          break;
        }
      }
    }

    return moveSet;
  }

  useContext(() => {
    if(selectedPiece !== PieceKing){
      setIsActive(false);
    }
  }, [selectedPiece]);

  calculateMoves(currentPosition, moveSet);



  return (
    face === 'black'
      ? <FaChessKing onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessKing onClick={() => handlePiece()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
  
}
