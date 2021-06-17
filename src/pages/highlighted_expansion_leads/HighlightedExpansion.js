import React from 'react'
import ExpansionCard from './ExpansionCard';
import './HighlightedExpansion.scss';

const expansionCardsList = [
  { size: '$500million to $1billion', daysLeft: 3, spotsLeft: 3, price: '$250' },
  { size: '$500million to $1billion', daysLeft: 3, spotsLeft: 3, price: '$250' },
  { size: '$500million to $1billion', daysLeft: 3, spotsLeft: 3, price: '$250' },
  { size: '$500million to $1billion', daysLeft: 3, spotsLeft: 3, price: '$250' },
  { size: '$500million to $1billion', daysLeft: 3, spotsLeft: 3, price: '$250' },
];

const HighlightedExpansion = () => {
  return (
    <div className="gdm-m-top-lg border-top">
      <p className="gdm-subtitle">Highlighted Expansion Leads for Construction</p>
      <div className="expansion-card-wrapper">
        {expansionCardsList.map((card) => {
          return <ExpansionCard size={card.size} daysLeft={card.daysLeft} spotsLeft={card.spotsLeft} price={card.price}/>; 
        })}
      </div>
    </div>
  )
}

export default HighlightedExpansion
