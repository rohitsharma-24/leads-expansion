import React from 'react';
import FilterListItem from './FilterListItem';
import FilterToolTip from '../../../components/FilterToolTip';
import './Demographics.scss';

const BidManagement = [
  { value: 1, label: 'Does not offer' },
  { value: 2, label: 'Offered within suite' },
  { value: 3, label: 'Best-of-breed' },
  { value: 4, label: 'Offered through partner' }
];

const Functionality = () => {
  const demogList1 = [
    { id: 'bidManagement', filterLabel: 'Bid Management', placeholder: 'bid management...', filterList: BidManagement },
    { id: 'projectScheduling', filterLabel: 'Project Scheduling', placeholder: 'project scheduling...', filterList: BidManagement },
    { id: 'projectManagement', filterLabel: 'Project Management', placeholder: 'project management...', filterList: BidManagement }
  ];

  const demogList2 = [
    { id: 'takeOff', filterLabel: 'Takeoff', placeholder: 'bid management...', filterList: BidManagement },
    { id: 'estimating', filterLabel: 'Estimating', placeholder: 'estimating...', filterList: BidManagement },
    { id: 'accounting', filterLabel: 'Accounting', placeholder: 'accounting...', filterList: BidManagement }
  ];

  return (
    <div className="filter-wrapper gdm-m-top-sm">
      <div id="functionality" className="gdm-m-top-sm"><span className="gdm-label">
        Functionality&nbsp;<FilterToolTip targetId="functionality" description="Functionality" />
      </span></div>
      {[demogList1, demogList2].map((demogList, i) => {
        return <div key={i} className="filter-lists gdm-m-top-sm">
        {
          demogList.map((d) => {
            return(
              <div key={d.id} className="filter-lists-item">
                <FilterListItem
                  id={d.id}
                  filterLabel={d.filterLabel}
                  placeholder={d.placeholder}
                  filterList={d.filterList}
                  tooltip
                />
              </div>
            )
          })
        }
      </div>
      })}
    </div>
  );
};


export default Functionality;
