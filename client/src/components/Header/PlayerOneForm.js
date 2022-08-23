import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerOneAC } from '../../redux/actions/PlayersAction';
import styles from './PlayersForm.module.css';

export default function PlayerOneForm() {
  const dispatch = useDispatch();
  const nameFirst = useSelector((state) => state.playerfirst.playerFirst);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setPlayerOneAC(e.target.namefirst.value));
  };
  // для изменеия имени игрока 2
  return (
    <div className={styles.playerform}>
      <div>
        Fill the name of the first player
      </div>
      <form
        name="playerfirstform"
        onSubmit={submitHandler}
      >
        <input
          className={styles.input}
          name="namefirst"
          placeholder={nameFirst}
        />
        <div className={styles.line}>
          <button
            className={styles.button}
            type="submit"
          >
            Remember
          </button>
          <div className="mini_container">
            <div className={styles.desc}>
              Player 1:
              {' '}
              {nameFirst}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
