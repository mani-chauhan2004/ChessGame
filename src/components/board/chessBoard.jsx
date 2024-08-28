import React, {useContext, useEffect} from 'react'
import { ChessBoardContext } from '../../context/ChessBoardContext'
import ChessBlock from '../chessBlock';
import { PieceBishop, PieceKnight, PiecePawn, PieceQueen, PieceRook, PieceKing } from '../pieces/ChessPieces';
function ChessBoard() {

    const chessBoardState = useContext(ChessBoardContext);
    useEffect(() => {
        function createBoard() {
            const board = [];
            let face;
            for(let row = 0; row < 8; row++){
                const column = [];
                let component;
                for(let columns = 0; columns < 8; columns++) {
                    face = '';
                    component = null;
                    switch(row){
                        case 0:
                            if(columns === 0 || columns === 7){
                                component = <PieceRook defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                face = 'white';
                            }
                            else if(columns === 1 || columns === 6){
                                component = <PieceKnight defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                face = 'white';
                            }
                            else if(columns === 2 || columns === 5){
                                component = <PieceBishop defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                face = 'white';
                            }
                            else if(columns === 4){
                                component = <PieceKing defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                face = 'white';
                            }
                            else if(columns === 3) {
                                component = <PieceQueen defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                face = 'white';
                            }
                            break;

                        case 1:
                            face = 'white';
                            component = <PiecePawn defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}} face={face}/>
                            break;

                        case 6:
                            face = 'black';
                            component = <PiecePawn defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}} face={face}/>
                            break;

                        case 7:
                            if(columns === 0 || columns === 7){
                                face = 'black';
                                component = <PieceRook defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                
                            }
                            else if(columns === 1 || columns === 6){
                                face = 'black';
                                component = <PieceKnight defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                
                            }
                            else if(columns === 2 || columns === 5){
                                face = 'black';
                                component = <PieceBishop defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                
                            }
                            else if(columns === 4){
                                component = <PieceKing defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                face = 'black';
                            }
                            else if(columns === 3) {
                                component = <PieceQueen defaultPosition={{x: columns, y: row}} currentPosition={{x: columns, y: row}}/>
                                face = 'black';
                            }
                            break;
                    }

                    if((row+columns)%2 === 0){
                        column.push({position: {x: columns, y: row}, component, type: 'white', face: face});
                    }
                    else{
                        column.push({position: {x: columns, y: row}, component, type: 'black', face: face});
                    }
                    
                }
                board.push(column);
            }
            return board;
        }
    
        const chessBoardTemp = createBoard();
    
        chessBoardState.setChessBoard(chessBoardTemp);
    }, [chessBoardState.setChessBoard]);

    return (
        <div className='flex flex-col gap-0'>
            {chessBoardState.chessBoard.map((row, indexRow) => (
                    <div key={indexRow} className='grid grid-cols-8 gap-0'>
                        {row.map((cell, indexCol) => (
                            <ChessBlock key={`${indexRow}-${indexCol}`} position={cell.position} type={cell.type} component={cell.component}/>
                        ))}
                    </div>
            ))}
        </div>
    )
}

export default ChessBoard;  