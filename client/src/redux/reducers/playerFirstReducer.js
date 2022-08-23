import { SET_PLAYERFIRST } from '../types/playersTypes';

const initilState = { playerFirst: 'Player 1' };

// eslint-disable-next-line default-param-last
const playerFirstReducer = (state = initilState, action) => {
  const { type, payload } = action;
  switch (type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_PLAYERFIRST: // Кейс создания  игрока1
      return { ...state, playerFirst: payload }; // Будем возвращать то, что передадим
    default:
      return state; // по дефолту возращаем стейт
  }
};

export default playerFirstReducer;
