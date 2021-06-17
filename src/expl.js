import React from 'react';
import { Provider } from 'react-redux';
import {
  applyMiddleware, createStore, compose, combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import ExpansionHeader from './pages/expansion_header/ExpansionHeader';
import SelectMarketFilters from './pages/select_market_filters/SelectMarketFilters';
import AllExpansionLeads from './pages/all_expansion_leads/AllExpensionLeads';
// import HighlightedExpansion from './pages/highlighted_expansion_leads/HighlightedExpansion';
// import Alerts from '@ppl/pages/alerts';
import leadsData from './data/leads_database';
import reducers from './reducers';
import './expl.scss';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const EXPL = () => {
  const initialState = {
    savedFilters: {},
    filteredLeads: leadsData,
  };

  const store = createStore(combineReducers(reducers), initialState, composeEnhancers(middlewareEnhancer));

  return (
    <Provider store={store}>
      <div className="app-wrapper" id="app-anchor">
          <div className="gdm-relative">
            <ExpansionHeader />
            <SelectMarketFilters />
            <AllExpansionLeads />
          </div>
      </div>
    </Provider>
  );
};

export default EXPL;
