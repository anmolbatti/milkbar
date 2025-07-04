import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../../components/admincomponents/DashboardHeader';
import ProjectDetail from '../../components/admincomponents/ProjectDetails';

function ViewProjectDetail({onLogout}) {
  return (
    <>
      <DashboardHeader onLogout={onLogout}/>
      <ProjectDetail />            
    </>
  );
}

export default ViewProjectDetail;
