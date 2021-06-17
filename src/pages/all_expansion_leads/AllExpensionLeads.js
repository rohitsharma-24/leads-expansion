import React from 'react';
import LeadsTable from './component/LeadsTable';
import './AllExpansionLeads.scss';
// import leadsData from '../../data/leads_database';
import { useSelector } from 'react-redux';

const AllExpensionLeads = () => {
  const filteredLeads = useSelector(state => state.filteredLeads);
  return (
    <div className="gdm-m-top-lg border-top">
      <p className="gdm-subtitle">All Expansion Leads for Construction</p>
      <LeadsTable leadsData={filteredLeads} />  
    </div>
  )
}

export default AllExpensionLeads
