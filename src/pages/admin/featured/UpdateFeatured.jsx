import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../config";
import DashboardHeader from "../../../components/admincomponents/DashboardHeader";
import CheckBoxOfChoosingFeaturedItems from "../../../components/admincomponents/selecting-featured-items/CheckBoxOfChoosingFeaturedItems";

const UpdateFeatured = (props) => {
  const { handleLogout } = props;
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/admin/get-projects`
        );
        if (Array.isArray(response.data)) {
          setServices(response.data); // Set the fetched projects to state
        } else {
          setError("Unexpected response format");
        }
        // setProjects(response.data); // Set the fetched projects to state
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <DashboardHeader onLogout={handleLogout} />
      <div className="dashboard">
        <div className="container">
          <h1 className="dash_title">Services</h1>
          <div className="main-section">
            <div className="projects">
              <div className="projects-inner">
                <header className="projects-header">
                  <div className="text-center  w-full py-5 font-medium opacity-[0.6]">
                    Selected items will be displayed in featured section
                  </div>
                  <div className="project_search">
                    <form action="">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search services"
                      />
                      <button type="submit" className="btn">
                        Search
                      </button>
                    </form>
                  </div>
                  <div className="add_project"></div>
                </header>
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Description</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="4">Loading...</td>
                      </tr>
                    ) : error ? (
                      <tr>
                        <td colSpan="4">{error}</td>
                      </tr>
                    ) : (
                      services.map(
                        (
                          service,
                          index // Map through the projects
                        ) => {
                          const { _id } = service;

                          return (
                            <tr key={service._id}>
                              <td>
                                <p>{service.title}</p>
                              </td>
                              <td>
                                <p>{service.description}</p>
                              </td>
                              <td>
                                <CheckBoxOfChoosingFeaturedItems _id={_id} />
                              </td>
                            </tr>
                          );
                        }
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateFeatured;
