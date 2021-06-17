import leadsData from '../data/leads_database';

export const SET_FILTERED_LEADS = 'SET_FILTERED_LEADS';
export const SET_DEFAULT_LEADS = 'SET_DEFAULT_LEADS';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case SET_FILTERED_LEADS:
      return action.payload;
    case SET_DEFAULT_LEADS:
      return leadsData;
    default:
      return state;
  }
};
