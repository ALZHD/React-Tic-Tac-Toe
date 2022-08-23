import React from 'react';
import styles from './Square.module.css';

// функция - по клику расставлять значение "x" и "y" в каждый квадрат
export default function Square({ val, fillSquare }) {
  return (
    <div className={styles.square} onClick={() => (val ? null : fillSquare())}>{val}</div>
  );
}
