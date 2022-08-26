import { SET_RESULTS } from '../types/resultTypes';

// eslint-disable-next-line import/prefer-default-export
export const setResultsAC = (result) => ({
  type: SET_RESULTS,
  payload: result,
});
