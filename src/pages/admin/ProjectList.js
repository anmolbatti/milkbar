import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import AllProjectsList from '../../components/admincomponents/AllProjectsList';

function Dashboard({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <AllProjectsList  />            
    </>
  );
}

export default Dashboard;
