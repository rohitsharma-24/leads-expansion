import { SET_DEFAULT_LEADS } from '../reducers/filtered_leads_reducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return function setFilteredLeads(dispatch) {
    dispatch({
      type: SET_DEFAULT_LEADS
    });
  };
}
