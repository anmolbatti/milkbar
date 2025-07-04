import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import AddNewTab from '../../components/admincomponents/AddTab';

function AddTab({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <AddNewTab />            
    </>
  );
}

export default AddTab;
