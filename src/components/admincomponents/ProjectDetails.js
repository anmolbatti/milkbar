import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../config";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `${config?.BASE_URL}/api/admin/get-project/${id}`
        );
        setProject(response.data);
      } catch (err) {
        setError("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    console.log("project: ", project);

    fetchProjectDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${config?.BASE_URL}/api/admin/delete-project/${id}`
      );

      navigate("/admin/projects");
    } catch (err) {
      setError("Failed to delete the project");
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
                <h2>Project Title</h2>
                <div className="detail_item_inner">
                  <p>{project?.title}</p>
                </div>
              </div>
              <div className="detail_item">
                <h2>Project Description</h2>
                <div className="detail_item_inner">
                  <p>{project?.description}</p>
                </div>
              </div>

              <div className="detail_item">
                <h2>Tab</h2>
                <div className="detail_item_inner">
                  <p>{project?.tabId?.title}</p>
                </div>
              </div>

              <div className="detail_item">
                <h2>Gallery Images</h2>
                <div className="detail_item_inner gallery_inner">
                  <div className="detail_img_grid">
                    {project?.images &&
                      project?.images.length > 0 ? (
                      project?.images.map((image, index) => (
                        <div className="detail_img_item" key={index}>
                          <img src={config?.BASE_URL + image} />
                        </div>
                      ))
                    ) : (
                      <p>No images available.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="detail_item">
                <div className="detail_banner_wrap">
                  <h2>Featured Image</h2>
                  <div className="detail_img_grid">
                    {project?.featuredImage ? (
                      <div className="detail_img_item">
                        <div className="banner_img_wrap">
                          <img
                            src={config?.BASE_URL + project?.featuredImage}
                          />
                        </div>
                      </div>
                    ) : (
                      <p>No image available.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="detail_item">
                <div className="detail_banner_wrap">
                  <h2>Video</h2>
                  <div className="detail_img_grid">
                    {project?.video ? (
                      <div className="detail_img_item">
                        <div className="banner_img_wrap">
                          <video>
                            <source src={config?.BASE_URL + project?.video} type="video/mp4"></source>
                          </video>
                        </div>
                      </div>
                    ) : (
                      <p>No video available.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="update_btn_wrap">
                <button className="update_btn" onClick={handleDelete}>Delete Project</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
