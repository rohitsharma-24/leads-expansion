import { SET_SAVED_FILTER } from '../reducers/saved_filter_reducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (filterData) {
  return function setSavedFilter(dispatch) {
    dispatch({
      type: SET_SAVED_FILTER,
      payload: filterData,
    });
  };
}
