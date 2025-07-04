import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import AdminDashboard from '../../components/admincomponents/AdminDashboard';

function Dashboard({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <AdminDashboard  />            
    </>
  );
}

export default Dashboard;
