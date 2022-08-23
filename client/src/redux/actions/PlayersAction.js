import { SET_PLAYERFIRST, SET_PLAYERSECOND } from '../types/playersTypes';

export const setPlayerOneAC = (playerOne) => ({
  type: SET_PLAYERFIRST,
  payload: playerOne,
});

export const setPlayerSecondAC = (playerSecond) => ({
  type: SET_PLAYERSECOND,
  payload: playerSecond,
});
