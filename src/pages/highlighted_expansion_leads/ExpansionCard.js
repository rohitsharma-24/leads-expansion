import React from 'react'
import { Button } from '@capterra/arubaito';
import './ExpansionCard.scss';

const ExpansionCard = ({ size, daysLeft, spotsLeft, price }) => {
  return (
    <div>
      <div className="expansion-card">
        <div className="lead-detail">Lead Details</div>
        <div className="expansion-card-content">
          <p>
            <span className="gdm-label">Size</span>
            <p>{size}</p>
          </p>
          <p>
            <span className="gdm-label">Days Left</span>
            <p>{size}</p>
            <span className="gdm-label">Spots Left</span>
            <p>{size}</p>
          </p>
          <p>
            <span className="gdm-label">Prize</span>
            <p>{size}</p>
          </p>
          <p>
            <Button
              variant="secondary"
              small
              onClick={() => console.log('click')}
            >
              Add to Cart
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExpansionCard
