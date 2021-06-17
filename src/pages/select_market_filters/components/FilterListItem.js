import React, { useState, useContext, useEffect } from 'react'
import { List } from '@capterra/arubaito';
import FilterToolTip from '../../../components/FilterToolTip'
import filterContext from '../FilterContext';
import './FilterListItem.scss';

const FilterListItem = ({ id, filterLabel, filterList, placeholder, tooltip = false }) => {
   const { filters, setFilters } = useContext(filterContext) || {};
  const [currentFilter, setCurrentFilter] = useState();
  const handleOnChange = (value) => setCurrentFilter(value);

  useEffect(() => {
    if(currentFilter){
      setFilters({ ...filters, [id]: currentFilter.label }); 
    } else {
      const data = {...filters};
      delete data[id];
      setFilters({ ...data }); 
    }
  }, [currentFilter]);

  return (
    <div>
      <div id={id}>
        <span id={filterLabel} className="gdm-label">
          {filterLabel}&nbsp;
          { tooltip && <FilterToolTip targetId={filterLabel} description={filterLabel} /> }
        </span>
      </div>
      <div className="filter-list-wrapper gdm-m-top-sm">
        <List
          placeholder={placeholder}
          isClearable
          onChange={handleOnChange}
          value={currentFilter}
          options={filterList}
        />
      </div>
    </div>
  )
}

export default FilterListItem;
