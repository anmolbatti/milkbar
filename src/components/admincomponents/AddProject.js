import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import { PrimeReactProvider } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';

function AddProject() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    featuredImage: null,
    video: null,
    tabId: null,
    galleryImages: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files : value
    }));
  };

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/admin/get-tabs`
        );
        if (Array.isArray(response.data)) {
          setTabs(response.data);
        } 
        
      } catch (err) {
        console.log("Failed to fetch tabs");
      }
    };

    fetchTabs();
  }, []);

  const handleAddLocation = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('tabId', selectedTab?._id);

    if (formData.galleryImages) {
      for (let i = 0; i < formData.galleryImages.length; i++) {
        data.append('images', formData.galleryImages[i]);
      }
    }

    if (formData.featuredImage) {
      data.append('featuredImage', formData.featuredImage[0]);
    }

    if (formData.video) {
      data.append('video', formData.video[0]);
    }

    try {
      const response = await axios.post(`${config.BASE_URL}/api/admin/add-project`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        const token = localStorage.getItem('token');
        if (token) {
          navigate('/admin/projects');
        } else {
          navigate('/admin/login');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add Project');
    }
  };

  return (
    <PrimeReactProvider>
      <div className="dashboard">
        <div className="container">
          <h1 className="dash_title">Add Project</h1>
          <div className="main-section">
            <div className="back_btn_wrap">
              <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
            </div>
            <div className="main-inner add_project_main">
              <form onSubmit={handleAddLocation} encType="multipart/form-data">
                <div className="update_details_wrap">
                  <div className="form-group titleField">
                    <h2>Project Title</h2>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange(e.target)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <h2>Description</h2>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange(e.target)}
                      required
                      style={{
                        minWidth: "100%",
                        height: "140px",
                        borderRadius: "10px",
                        color: "#000",
                        padding: "10px 16px"
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <h2>Select Tab</h2>
                    <Dropdown 
                      value={selectedTab} 
                      onChange={(e) => setSelectedTab(e.value)} 
                      options={tabs} 
                      optionLabel="title" 
                      placeholder="Select Tab" 
                      className="w-full md:w-14rem" 
                    />
                  </div>

                  <div className="form-group">
                    <h2>Featured Image</h2>
                    <div className="form-group">
                      <div className="file-upload">
                        <input
                          type="file"
                          className="form-control"
                          name="featuredImage"
                          onChange={(e) => handleInputChange(e.target)}
                          required
                        />
                        <i className="fa fa-camera i-pic-upload"></i>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <h2>Gallery Images</h2>
                    <div className="form-group">
                      <div className="file-upload">
                        <input
                          type="file"
                          className="form-control"
                          name="galleryImages"
                          multiple
                          onChange={(e) => handleInputChange(e.target)}
                          required
                        />
                        <i className="fa fa-camera i-pic-upload"></i>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <h2>Video</h2>
                    <div className="form-group">
                      <div className="file-upload">
                        <input
                          type="file"
                          className="form-control"
                          name="video"
                          onChange={(e) => handleInputChange(e.target)}
                        />
                        <i className="fa fa-camera i-pic-upload"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add_project">
                  <button type="submit">Add Project</button>
                </div>
              </form>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default AddProject;
