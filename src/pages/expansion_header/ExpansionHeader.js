/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Dropdown } from '@capterra/arubaito';
import SearchList from './SearchList';
import './ExpansionHeader.scss';

const markets = [
  { marketId: 1, name: 'Construction' },
  { marketId: 2, name: 'Project Management' },
  { marketId: 3, name: 'Field Service' },
  { marketId: 4, name: 'Punch List' },
];

const ExpansionHeader = () => {
  const [market, setMarket] = useState(markets[0]);

  return (
    <div className="gdm-m-bottom-md gdm-z-index-dropdown expansion-header-wrapper">
      <div>
        <h1 data-cy="vendor-name" className="gdm-title gdm-m-bottom-md">Expansion Leads</h1>
          <Dropdown
            selectCallback={(market) => setMarket(market)}
            selected={market}
            render={selected => (
              <Dropdown.Selected>
                {selected ? selected.name : 'Select Market'}
              </Dropdown.Selected>
            )}
            displayValue="name"
            list={markets}
          >
            <label className="gdm-label">Search your markets by name</label>
            <Dropdown.Search autoComplete="off" />
            <Dropdown.List
              render={item => (
                <Dropdown.ListItem
                  data-cy={`dropdown-list-item-${item.name}`}
                  item={item}
                  key={item.marketId}
                >
                  {item.name}
                </Dropdown.ListItem>
              )}
            />
          </Dropdown>
        </div>
      <SearchList />
    </div>
  );
};

export default ExpansionHeader;
