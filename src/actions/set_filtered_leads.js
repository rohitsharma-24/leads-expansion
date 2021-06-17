import { SET_FILTERED_LEADS } from '../reducers/filtered_leads_reducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (filterData) {
  return function setFilteredLeads(dispatch) {
    dispatch({
      type: SET_FILTERED_LEADS,
      payload: filterData,
    });
  };
}
