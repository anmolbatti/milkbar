import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/css/App.css";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Project from "./pages/Project";
import SocialMedia from "./pages/SocialMedia";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./components/admincomponents/AdminLogin";
import ProtectedRoute from "./components/admincomponents/ProtectedRoutes";

// Projects
import AddProject from "./pages/admin/AddProject";
import ViewProject from "./pages/admin/ViewProject";
import UpdateProject from "./pages/admin/UpdateProject";
import ProjectList from "./pages/admin/ProjectList";

// Tabs
import AddTab from "./pages/admin/AddTab";
import ViewTab from "./pages/admin/ViewTab";
import UpdateTab from "./pages/admin/UpdateTab";
import TabsList from "./pages/admin/TabsList";

import Branding from "./pages/Branding";

import AboutPage2 from "./pages/AboutPage2";
import useStartup from "./hooks/useStartup/useStartup";
import useBasic from "./hooks/useBasics/useBasics";
import MyModal from "./components/modal/MyModal";

import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  useStartup();
  const modalStatus = useBasic((state) => state.modalStatus);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  // Check for token in localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false); // Stop loading after checking token
  }, []);

  // Function to handle login and update authentication state
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout and clear token
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  if (isLoading) {
    // Render nothing or a loading spinner until authentication is confirmed
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      {!isAdminRoute && <Header />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<AboutPage2 />} />
        <Route path="/project/:id" element={<Project />} />
        {/* <Route path="project" element={<Project />} /> */}
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/branding" element={<Branding />} />

        {/* Protected route for the dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProjectList onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/login"
          element={
            isAuthenticated ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <AdminLogin onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/admin/add-project"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddProject onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/project/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ViewProject onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/delete-project/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ViewProject onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/update-project/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdateProject onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />


        <Route
          path="/admin/add-tab"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddTab onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/tab/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ViewTab onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/update-tab/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdateTab onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/tabs"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <TabsList onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

      </Routes>
      {modalStatus === "OPENED" && <MyModal />}
    </BrowserRouter>
  );
}

export default App;
