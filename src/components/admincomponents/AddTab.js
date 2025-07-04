import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../config";

function AddTab() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');

  const handleAddLocation = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.BASE_URL}/api/admin/add-tab`, {title});

      if (response.status === 200) {
        const token = localStorage.getItem('token');
        if (token) {
          navigate('/admin/tabs');
        } else {
          navigate('/admin/login');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add Tab');
    }
  };

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="dash_title">Add Tab</h1>
        <div className="main-section">
          <div className="back_btn_wrap">
            <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
          </div>
          <div className="main-inner add_project_main">
            <form onSubmit={handleAddLocation} encType="multipart/form-data">
              <div className="update_details_wrap">
                <div className="form-group titleField">
                  <h2>Title</h2>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="add_project">
                <button type="submit">Add Tab</button>
              </div>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTab;
