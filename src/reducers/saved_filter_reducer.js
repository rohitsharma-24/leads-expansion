export const SET_SAVED_FILTER = 'SET_SAVED_FILTER';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case SET_SAVED_FILTER:
      return action.payload;
    default:
      return state;
  }
};
