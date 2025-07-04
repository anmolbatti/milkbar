import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../config";

function TabDetails() {
  const { id } = useParams();
  const [tab, setTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTabDetails = async () => {
      try {
        const response = await axios.get(
          `${config?.BASE_URL}/api/admin/get-tab/${id}`
        );
        setTab(response.data);
      } catch (err) {
        setError("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    fetchTabDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${config?.BASE_URL}/api/admin/delete-tab/${id}`
      );

      navigate("/admin/tabs");
    } catch (err) {
      setError("Failed to delete the tab");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard project_detail_wrap">
      <div className="content-container">
        <h1 className="dash_title">Dashboard</h1>
        <div className="back_btn_wrap">
          <button className="back-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
        <div className="main-section">
          <div className="projects">
            <div className="projects-inner">
              <div className="detail_item">
                <h2>Tab Title</h2>
                <div className="detail_item_inner">
                  <p>{tab?.title}</p>
                </div>
              </div>
              <div className="update_btn_wrap">
                <button className="update_btn" onClick={handleDelete}>Delete Tab</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabDetails;
