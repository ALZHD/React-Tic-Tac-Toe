import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerSecondAC } from '../../redux/actions/PlayersAction';
import styles from './PlayersForm.module.css';

export default function PlayeTwoForm() {
  const dispatch = useDispatch();
  const nameSecond = useSelector((state) => state.playersecond.playerSecond);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setPlayerSecondAC(e.target.namesecond.value));
  };
  // для изменения имени игрока 2
  return (
    <div className={styles.playerform}>
      <div>
        Fill the name of the second player
      </div>
      <form
        name="playersecondform"
        onSubmit={submitHandler}
      >
        <input
          className={styles.input}
          name="namesecond"
          placeholder={nameSecond}

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
              Player 2:
              {' '}
              {nameSecond}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
