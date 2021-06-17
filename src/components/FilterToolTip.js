import React from 'react';
import { ToolTip } from '@capterra/arubaito';

const FilterToolTip = ({ targetId, description }) => {
  return (
    <ToolTip
      targetId={targetId}
      trigger={<span className='gdm-icon gdm-icon-xs gdm-icon-info'/>}
    >
      {description}
    </ToolTip>
  )
};

export default FilterToolTip;