import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import AllTabsList from '../../components/admincomponents/AllTabsList';

function TabsList({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <AllTabsList  />            
    </>
  );
}

export default TabsList;
