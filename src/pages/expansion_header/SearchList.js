import React, { useState } from 'react';
import { List } from '@capterra/arubaito';
import './SearchList.scss';

const options = [
  { value: 1, label: 'Main Search' },
  { value: 2, label: 'Enterprise Search' },
  { value: 3, label: 'Low Hanging Fruit' },
  { value: 4, label: 'Volume Search' }
];

const SearchList = () => {
  const [city, setCity] = useState();
  const handleOnChange = (value) => setCity(value);

  return (
    <div className="search-list-wrapper">
      <span className="gdm-label">Select Saved Search</span>
      <div className="search-list">
        <List
          placeholder='saved search list'
          isClearable
          onChange={handleOnChange}
          value={city}
          options={options}
        />
      </div>
    </div>
  )
}

export default SearchList;
