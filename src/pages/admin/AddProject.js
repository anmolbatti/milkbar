import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import AddNewProject from '../../components/admincomponents/AddProject';

function AddProject({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <AddNewProject />            
    </>
  );
}

export default AddProject;
