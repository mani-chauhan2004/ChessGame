import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChessBoardProvider from './context/ChessBoardContext';
import ChessPieceProvider from './context/ChessPieceMovesContext';
import PlayerPointsProvider from './context/PlayerPointsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PlayerPointsProvider>
    <ChessBoardProvider>
      <ChessPieceProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChessPieceProvider>
    </ChessBoardProvider>
  </PlayerPointsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
