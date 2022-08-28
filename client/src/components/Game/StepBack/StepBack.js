import React from 'react';
import styles from './StepBack.module.css';

export default function StepBack(props) {
  const { history, board, setBoard } = props;

  const toStepBack = () => {
    if (!history.length) {
      return;
    }
    const prevousBoard = history[history.length - 1];
    setBoard(prevousBoard);
    history.pop();
  };

  return (
    <div>
      <button
        className={styles.buttonBack}
        type="submit"
        onClick={() => toStepBack(history)}
      >
        BACK&#10558;
      </button>
    </div>
  );
}
