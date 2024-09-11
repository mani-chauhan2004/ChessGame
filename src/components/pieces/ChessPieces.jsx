import React, { useContext, useEffect, useState } from 'react'
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
import { ChessPieceMovesContext } from '../../context/ChessPieceMovesContext';


export function PiecePawn({defaultPosition, currentPosition, face}){

    const {calculatePawnMoves} = useContext(ChessPieceMovesContext);
    const {chessBoard, selectedPiece, handleClick, selectedPlace, setSelectedPlace, activeFaceTurn } = useContext(ChessBoardContext);
    const [isActive, setIsActive] = useState(false);

    function handlePieceClick() {
      if(activeFaceTurn === face){
        setSelectedPlace(currentPosition);
        setIsActive(true);
        handleClick(<PiecePawn defaultPosition currentPosition face={face} active={false}/>, moveSet, currentPosition);
      }
      
    }

    let moveSet = [];
    useEffect(() => {
      if(selectedPlace == currentPosition) {
        setIsActive(true);
      }
      else{
        setIsActive(false);
      }

      moveSet = calculatePawnMoves(currentPosition, defaultPosition, face);
      
    },[chessBoard, selectedPiece]);

    return (
      face === 'black'
        ? <FaChessPawn onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
        : <FaRegChessPawn onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
    );
}
export function PieceRook({ defaultPosition, currentPosition, face , active}){

  const {calculateRookMoves} = useContext(ChessPieceMovesContext);
  const {chessBoard, selectedPiece, handleClick, selectedPlace, setSelectedPlace, activeFaceTurn } = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(false);

  function handlePieceClick() {
    if(activeFaceTurn === face){
      setSelectedPlace(currentPosition);
      setIsActive(true);
      handleClick(<PieceRook defaultPosition currentPosition face={face} active={false}/>, moveSet, currentPosition);
    }
  }
  let moveSet = [];

  useEffect(() => {
    if(selectedPlace == currentPosition) {
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
    moveSet = calculateRookMoves(currentPosition, face);
    
  },[chessBoard, selectedPiece]);


  return (
    face === 'black'
      ? <FaChessRook onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessRook onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}

export function PieceKnight({defaultPosition, currentPosition, face, active}){

  const {calculateKnightMoves} = useContext(ChessPieceMovesContext);
  const {chessBoard, selectedPiece, handleClick, selectedPlace, setSelectedPlace, activeFaceTurn } = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(false);

  function handlePieceClick() {
    if(activeFaceTurn === face){
      setSelectedPlace(currentPosition);
      setIsActive(true);
      handleClick(<PieceKnight defaultPosition currentPosition face={face} active={false}/>, moveSet, currentPosition);
    }
  }
  let moveSet = [];

  useEffect(() => {
    if(selectedPlace == currentPosition) {
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
    moveSet = calculateKnightMoves(currentPosition, face);
    // setIsActive(false);
    // console.log(moveSet);
    
  },[chessBoard, selectedPiece]);


  return (
    face === 'black'
      ? <FaChessKnight onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessKnight onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}
export function PieceBishop({defaultPosition, currentPosition, face, active}) {

  const {calculateBishopMoves} = useContext(ChessPieceMovesContext);
  const {chessBoard, selectedPiece, handleClick, selectedPlace, setSelectedPlace, activeFaceTurn } = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(false);

  function handlePieceClick() {
    if(activeFaceTurn === face){
      setSelectedPlace(currentPosition);
      setIsActive(true);
      handleClick(<PieceBishop defaultPosition currentPosition face={face} active={false}/>, moveSet, currentPosition);
    }
  }
  let moveSet = [];

  useEffect(() => {
    if(selectedPlace == currentPosition) {
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
    moveSet = calculateBishopMoves(currentPosition, face);
    // setIsActive(false);
    // console.log(moveSet);
    
  },[chessBoard, selectedPiece]);


  return (
    face === 'black'
      ? <FaChessBishop onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessBishop onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}
export function PieceQueen({defaultPosition, currentPosition, face, active}){

  const {calculateQueenMoves} = useContext(ChessPieceMovesContext);
  const {chessBoard, selectedPiece, handleClick, selectedPlace, setSelectedPlace, activeFaceTurn } = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(false);

  function handlePieceClick() {
    if(activeFaceTurn === face){
      setSelectedPlace(currentPosition);
      setIsActive(true);
      handleClick(<PieceQueen defaultPosition currentPosition face={face} active={false}/>, moveSet, currentPosition);
    }
  }
  let moveSet = [];
  
  useEffect(() => {
    if(selectedPlace == currentPosition) {
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
    moveSet = calculateQueenMoves(currentPosition, face);
    // setIsActive(false);
    // console.log(moveSet);
    
  },[chessBoard, selectedPiece]);

  return (
    face === 'black'
      ? <FaChessQueen onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessQueen onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
}
export function PieceKing({defaultPosition, currentPosition, face, active}){
  
  const {calculateKingMoves} = useContext(ChessPieceMovesContext);
  const {chessBoard, selectedPiece, handleClick, selectedPlace, setSelectedPlace, activeFaceTurn } = useContext(ChessBoardContext);
  const [isActive, setIsActive] = useState(false);

  let moveSet = [];
  
  function handlePieceClick() {
    if(activeFaceTurn === face){
      setSelectedPlace(currentPosition);
      setIsActive(true);
      handleClick(<PieceKing defaultPosition currentPosition face={face} active={false}/>, moveSet, currentPosition);
    }
  }

  useEffect(() => {
    if(selectedPlace == currentPosition) {
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
    
    moveSet = calculateKingMoves(currentPosition, face);
    // setIsActive(false);
    // console.log(moveSet);
    
  },[chessBoard, selectedPiece]);


  return (
    face === 'black'
      ? <FaChessKing onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
      : <FaRegChessKing onClick={() => handlePieceClick()} className={`w-full h-full ${isActive? "bg-rose-300": ""} p-2 text-center`} />
  );
  
}
