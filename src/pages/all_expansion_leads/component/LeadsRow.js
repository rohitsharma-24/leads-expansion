import React from 'react'
import cartLogo from '../../../cart-plus.svg';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const LeadsRow = ({ lead }) => {
  return (
        <tr>
          <td className='gdm-text-left'><input type="checkbox" /></td>
          <td>{ getRandomInt(1, 8) }</td>
          <td className='gdm-text-left'>{lead['SIZE']}</td>
          <td className='gdm-text-left'>{lead['SEGMENT']}</td>
          <td className='gdm-text-left'>{lead['COUNTRY']}</td>
          <td>{ getRandomInt(1, 8) }</td>
          <td>${lead['AMOUNT']}</td>
          <td><a href="#">Lead Details</a></td>
          <td><img src={cartLogo} /></td>
        </tr>
  )
}

export default LeadsRow
