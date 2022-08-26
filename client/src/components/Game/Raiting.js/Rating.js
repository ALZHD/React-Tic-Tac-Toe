import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ratingline from './Ratingline';
import styles from './Rating.module.css';

export default function Rating() {
  const results = useSelector((state) => state.results);
  const showSt = (result) => {
    const arrofwiners = result.map((el) => el.winner);

    const count = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of arrofwiners) {
      if (count[elem] === undefined) {
        count[elem] = 1;
      } else {
        // eslint-disable-next-line no-plusplus
        count[elem]++;
      }
    }
    const filteredarr = Object.entries(count);
    const tiearr = filteredarr.filter((el) => el[0] === 'No one');
    const cleanarr = filteredarr.filter((el) => el[0] !== 'No one');
    cleanarr.sort((a, b) => b[1] - a[1]);
    return [cleanarr, tiearr];
  };
  const stat = showSt(results);

  return (
    <div>
      {results[0] !== undefined
        ? (
          <table className={styles.tableWin}>
            <caption className={styles.headerRatingWin}>Winners Rating</caption>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Wins</th>
              </tr>
            </thead>
            <tbody>
              {stat[0].map((el, idx) => (
                <Ratingline
                  name={el[0]}
                  numb={el[1]}
                  idx={idx + 1}
                  key={idx}
                />
              ))}
            </tbody>
          </table>
        )
        : (
          <div className={styles.headerRating}>
            Start playing and rating shows
          </div>
        )}

    </div>
  );
}
