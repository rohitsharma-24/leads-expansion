import React, { useState, useEffect } from 'react'
import { Button } from '@capterra/arubaito'
import { useDispatch, useSelector } from 'react-redux';
import FilterAccordion from './FilterAccordion';
import Demographics from './components/Demographics';
import Functionality from './components/Functionality';
import setSavedFilters from '../../actions/set_saved_filter';
import setFilteredLeads from '../../actions/set_filtered_leads';
import setDefaultLeads from '../../actions/set_default_leads';
import './SelectMarketFilters.scss';
import leadsData from '../../data/leads_database';
import FilterContext from './FilterContext';

const SelectMarketFilters = () => {
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSavedFilters(filters));
  }, [filters])
  
  const updateFilteredLeads = () => {
    if(Object.keys(filters).length === 0){
      dispatch(setDefaultLeads());
      return;
    }
    const leads = leadsData.filter((lead) => {
      if(filters && filters.size && filters.segment) {
        return lead['SIZE'].toLowerCase() === filters.size.toLowerCase() && lead['SEGMENT'].toLowerCase() === filters.segment.toLowerCase();
      }
      else if(filters && filters.segment) {
       return lead['SEGMENT'].toLowerCase() === filters.segment.toLowerCase();
      }
      else if(filters && filters.size) {
        return lead['SIZE'].toLowerCase() === filters.size.toLowerCase();
      }
    });
    dispatch(setFilteredLeads(leads));
  };

  return (
    <div>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <FilterAccordion>
          <Demographics />
          <div className="functionality-button-wrapper">
            <Functionality /> 
            <div className="buttons">
              <p>
                <Button
                  variant="primary"
                  onClick={updateFilteredLeads}
                >
                  Update Leads
                </Button>
              </p>
              <p className="reset-button-wrapper">
                <Button
                  variant="quarternary"
                  onClick={() => console.log('click')}
                >
                  Reset All Filter
                </Button>
              </p>
            </div>          
          </div>
        </FilterAccordion>
      </FilterContext.Provider>
    </div>
  )
}

export default SelectMarketFilters;
