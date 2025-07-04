import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import TabDetails from '../../components/admincomponents/TabDetails';

function ViewTab({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <TabDetails />            
    </>
  );
}

export default ViewTab;
