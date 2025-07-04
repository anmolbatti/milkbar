import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import CheckboxOfSelectingFeaturedItemInProjectManagePage from "./projects/CheckboxOfSelectingFeaturedItemInProjectManagePage";

function AllProjectlist() {
  const [projects, setProjects] = useState([]);
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
          <h1 className="dash_title">Projects</h1>
          <div className="add_project d-flex" style={{justifyContent: "flex-end", marginBottom: "20px"}}>
            <Link to="/admin/add-project">Add Project</Link>
          </div>
          <div className="main-section">
            <div className="projects">
              <div className="projects-inner">
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Project Title</th>
                      <th>Description</th>
                      <th className="text-right">Actions</th>
                      {/* <th>Is Featured</th> */}
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
                      projects.map(
                        (
                          project,
                          index // Map through the projects
                        ) => {
                          const { _id } = project;

                          return (
                            <tr key={project._id}>
                              <td>
                                <p>{project.title}</p>
                              </td>{" "}
                              {/* Display serial number */}
                              <td>
                                <p>{project.description}</p>{" "}
                                {/* Adjust the property name based on your schema */}
                              </td>
                              <td>
                                <Link
                                  to={`/admin/project/${project._id}`}
                                  className="view_detail"
                                >
                                  View Details
                                </Link>
                                {'   '}
                                <Link
                                  to={`/admin/update-project/${project._id}`}
                                  className="view_detail"
                                >
                                  Edit
                                </Link>
                              </td>
                              {/* <td>
                                <CheckboxOfSelectingFeaturedItemInProjectManagePage
                                  _id={_id}
                                />
                              </td> */}
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
}

export default AllProjectlist;
