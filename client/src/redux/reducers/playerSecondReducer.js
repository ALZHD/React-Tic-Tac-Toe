import { SET_PLAYERSECOND } from '../types/playersTypes';

const initialState = { playerSecond: 'Player 2' };
// eslint-disable-next-line default-param-last
const playerSecondReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_PLAYERSECOND: // Кейс создания  игрока2
      return { ...state, playerSecond: payload }; // Будем возвращать то, что передадим
    default:
      return state; // по дефолту возращаем стейт
  }
};

export default playerSecondReducer;
