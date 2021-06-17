import React from 'react';
import FilterListItem from './FilterListItem';
import sizeList from '../../../data/size.json';
import segmentList from '../../../data/segments.json';
import './Demographics.scss';

const Demographics = () => {
  const demogList = [
    { filterLabel: 'Size (Annual Revenue)', placeholder: 'size...', filterList: sizeList, id: 'size' },
    { filterLabel: 'Segments', placeholder: 'segments', filterList: segmentList, id: 'segment' }
  ];

  return (
    <div className="filter-wrapper">
      <p className="gdm-m-top-sm"><span className="gdm-label">Demographics</span></p>
      <div className="filter-lists gdm-m-top-sm">
        {
          demogList.map((d) => {
            return(
              <div key={d.id} className="filter-lists-item">
                <FilterListItem
                  id={d.id}
                  filterLabel={d.filterLabel}
                  placeholder={d.placeholder}
                  filterList={d.filterList} 
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Demographics;
