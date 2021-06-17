import React, { useState } from 'react'
import { Accordion, Button } from '@capterra/arubaito';
import './FilterAccordion.scss';

const FilterAccordion = ({ children }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const toggle = () => setOpenAccordion(openAccordion => !openAccordion);
  
  return (
    <div className="gdm-relative">
      <Accordion isOpen={openAccordion} style='table'>
      <Accordion.Header>
        <Accordion.ToggleButton onClick={toggle}>
          <label className="gdm-label">Select Market Filters</label>
        </Accordion.ToggleButton>
        <Button
          variant="secondary"
          small
          onClick={() => console.log('click')}
          className="save-filter-btn"
        >
          Save This Search
        </Button>
        <Accordion.Summary>
          <label className="gdm-label title-summary" style={{'color': 'green'}}>Expansion Lead Volume: 32</label>
        </Accordion.Summary>
      </Accordion.Header>

      <Accordion.Content>
        {children}
      </Accordion.Content>
    </Accordion>
  </div>
  )
}

export default FilterAccordion;
