import { SET_RESULTS } from '../types/resultTypes';

// eslint-disable-next-line default-param-last
const ResultReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_RESULTS: // Кейс создания  игрока2
      return [...state, payload]; // Будем возвращать то, что передадим
    default:
      return state; // по дефолту возращаем стейт
  }
};

export default ResultReducer;
