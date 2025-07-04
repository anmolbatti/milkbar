import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../config";

function AdminDashboard({ onLogout }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/admin/get-projects`
        );
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setProjects(response.data); // Set the fetched projects to state
        } else {
          setError("Unexpected response format");
        }
        // setProjects(response.data); // Set the fetched projects to state
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <h1 className="dash_title">Dashboard</h1>
          <div className="main-section_dashboard">
            <div class="content">
              <div class="cards">
                <div class="card red">
                  <i class="fas fa-folder-open"></i>
                  <div class="number">{projects.length}</div>
                  <div class="label">Total Projects</div>
                </div>
              </div>
              <div class="user-info">
                {projects.map((project, index) => (
                  <div className="details" key={project._id}>
                    <div className="name">{project.title}</div>
                    <div className="tweet">{project.brandDirection}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
