import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";

function AllTabsList() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/admin/get-tabs`
        );
        if (Array.isArray(response.data)) {
          setTabs(response.data);
        } else {
          setError("Unexpected response format");
        }
        
      } catch (err) {
        setError("Failed to fetch tabs");
      } finally {
        setLoading(false);
      }
    };

    fetchTabs();
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <h1 className="dash_title">Tabs</h1>
          <div className="add_project d-flex" style={{justifyContent: "flex-end", marginBottom: "20px"}}>
            <Link to="/admin/add-tab">Add Tab</Link>
          </div>
          <div className="main-section">
            <div className="projects">
              <div className="projects-inner">
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Title</th>
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
                      tabs.length > 0 ? (
                        tabs?.map(
                          (
                            tab,
                            index // Map through the projects
                          ) => {
                            const { _id } = tab;
  
                            return (
                              <tr key={tab._id}>
                                <td>
                                  <p>{tab.title}</p>
                                </td>{" "}
                                
                                <td>
                                  <Link
                                    to={`/admin/tab/${tab._id}`}
                                    className="view_detail"
                                  >
                                    View Details
                                  </Link>
                                  {'   '}
                                  <Link
                                    to={`/admin/update-tab/${tab._id}`}
                                    className="view_detail"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <tr><p>No tabs found</p></tr>
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

export default AllTabsList;
