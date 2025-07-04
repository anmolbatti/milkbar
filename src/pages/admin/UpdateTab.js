import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import UpdateTabDetail from '../../components/admincomponents/UpdateTabDetail';

function UpdateTab({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <UpdateTabDetail />            
    </>
  );
}

export default UpdateTab;
