import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import styles from './Board.module.css';
import Square from '../Square/Square';
import { Patterns } from '../Patterns/Patterns';

export default function GameLogic() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']); // доска
  const [player, setPlayer] = useState('0'); // игрок - сами крестики и нолики для игры
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  const dispatch = useDispatch();
  // store для того, чтобы иметь возможность использоать в разных компонентах имена,
  // cохраняю имена на протяжении всей игры пользователей
  const nameFirst = useSelector((state) => state.playerfirst.playerFirst);
  const nameSecond = useSelector((state) => state.playersecond.playerSecond);
  const playerNames = {
    X: nameFirst,
    0: nameSecond,
  };

  // функция для заполнения каждого квадрата X и 0
  const fillSquare = (square) => {
    const newBoard = board.map((val, idx) => {
      if (idx === square && val === '') {
        return player;
      }
      return val;
    });

    setBoard(newBoard);
  };
  // cброс состояний для возобновления игры "с нуля".
  const restartGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('0');
    setResult({ winner: 'none', state: 'none' });
  };

  // проверка на наличие победителя и вызова модального окна
  // (использую внешнюю библиотеку sweetalert)
  const gameOver = (winner, state) => {
    setResult({ winner, state });
    if (winner === '') { swal('Game is over', `the winner is: ${player}`); } else {
      swal('Game is over', `the winner is: ${winner}`);
    }
    restartGame();
  };

  // проверка на ничью
  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });

    if (filled) {
      gameOver('No one', 'Tie');
      return true;
    }
    return false;
  };

  // переключение X/0
  const сhangePlayer = () => {
    if (player === 'X') {
      setPlayer('0');
    } else {
      setPlayer('X');
    }
  };

  //   проверка на победителя с учетом patterns выигрыша
  const checkIfWin = () => {
    const winnerPattern = Patterns.find((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (!firstPlayer) {
        return null;
      }

      let foundWinningPattern = true;

      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        return currPattern;
      }
      return null;
    });

    if (winnerPattern) {
      gameOver(playerNames[player], 'won');
      return true;
    }
    return false;
  };
  // фунция которая по порядку проверяет победителя, если нет, то проверяет ничью,
  // если нет, то переключает игрока
  const checkGameStatus = () => {
    const isWin = checkIfWin();
    if (isWin) {
      return;
    }

    const isTie = checkIfTie();
    if (isTie) {
      return;
    }

    сhangePlayer();
  };
  // один юзеффект который вызывает функцию по проверке победителя и ничьи
  useEffect(() => {
    checkGameStatus();
  }, [board]);

  return (
    <div className={styles.game}>
      <div className={styles.sectionstep}>
        <div className={styles.step}>
          Your step:

          {playerNames[player]}
          {' '}
          -
          {'  '}
        </div>
        <div className={styles.X0}>
          {player}
        </div>
      </div>
      <div className={styles.board}>
        <div className={styles.row}>
          <Square
            className={styles.square}
            val={board[0]}
            fillSquare={() => {
              fillSquare(0);
            }}
          />
          <Square
            className={styles.square}
            val={board[1]}
            fillSquare={() => {
              fillSquare(1);
            }}
          />
          <Square
            className={styles.square}
            val={board[2]}
            fillSquare={() => {
              fillSquare(2);
            }}
          />
        </div>
        <div className={styles.row}>
          <Square
            className={styles.square}
            val={board[3]}
            fillSquare={() => {
              fillSquare(3);
            }}
          />
          <Square
            className={styles.square}
            val={board[4]}
            fillSquare={() => {
              fillSquare(4);
            }}
          />
          <Square
            className={styles.square}
            val={board[5]}
            fillSquare={() => {
              fillSquare(5);
            }}
          />
        </div>
        <div className={styles.row}>
          <Square
            className={styles.square}
            val={board[6]}
            fillSquare={() => {
              fillSquare(6);
            }}
          />
          <Square
            className={styles.square}
            val={board[7]}
            fillSquare={() => {
              fillSquare(7);
            }}
          />
          <Square
            className={styles.square}
            val={board[8]}
            fillSquare={() => {
              fillSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}
