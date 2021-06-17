
import React from 'react'
import LeadsRow from './LeadsRow'

const LeadsTable = ({ leadsData }) => {
  return (
    <div>
    <table className='gdm-table gdm-table-alternating gdm-table-inputs gdm-text-center gdm-w-24'>
      <tbody>
        <tr>
          <th className='gdm-w-1 gdm-text-left'></th>
          <th className='gdm-w-1 gdm-text-left'>Days Left</th>
          <th className='gdm-w-5 gdm-text-left'>Size</th>
          <th className='gdm-w-3 gdm-text-left'>Segment</th>
          <th className='gdm-w-3 gdm-text-left'>Location</th>
          <th className='gdm-w-2'>Spots Left</th>
          <th className='gdm-w-2'>Price</th>
          <th className='gdm-w-2'>Leads Details</th>
          <th className='gdm-w-2'>Add To Cart</th>
        </tr>
        {leadsData.map((lead,i) => {
         return <LeadsRow key={i} lead={lead} /> 
        })}
      </tbody>
    </table>
    </div>
  )
}

export default LeadsTable;