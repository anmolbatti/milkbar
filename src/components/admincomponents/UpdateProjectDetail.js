import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import config from '../../config';
import { PrimeReactProvider } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';

function UpdateProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState({ title: '', description: '' });
    const [featuredImage, setFeaturedImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [newImages, setNewImages] = useState([]);

    const [tabs, setTabs] = useState([]);
    const [selectedTab, setSelectedTab] = useState(null);

    const [removeImages, setRemoveImages] = useState([]);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const fileInputRef = useRef(null);

    const featuredImageRef = useRef(null);
    const videoRef = useRef(null);

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

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`${config.BASE_URL}/api/admin/get-project/${id}`, { withCredentials: true });
                setProject(response.data);
                if(response.data?.tabId){
                    setSelectedTab(response.data?.tabId);
                }
            } catch (err) {
                setError('Failed to fetch location details');
            }
        };

        fetchProjectDetails();
    }, [id]);

    const handleRemoveImage = async (imageName) => {
        try {
            const response = await axios.post(`${config.BASE_URL}/api/admin/remove-image`, {
                projectId: project._id,
                imageName
            }, { withCredentials: true });

            if (response.status === 200) {
                setRemoveImages(prev => [...prev, imageName]); // Add to removeImages array

                setProject(prevProject => {
                    const updatedImages = prevProject.images.filter(image => image !== imageName);
                    return {
                        ...prevProject,
                        images: updatedImages,
                        featuredImage: prevProject.featuredImage === imageName ? null : prevProject.featuredImage,
                    };
                });
            } else {
                console.error('Failed to remove image');
            }
        } catch (err) {
            console.error('Error removing image:', err);
        }
    };

    const handleFeaturedImageChange = (e) => {
        setFeaturedImage(e.target.files[0]);
    };

    const handleVideoChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', project.title);
        formData.append('description', project.description);
        formData.append('tabId', selectedTab?._id);

        if (featuredImage) {
            formData.append('featuredImage', featuredImage);
        }

        if (video) {
            formData.append('video', video);
        }

        for (const image of newImages) {
            formData.append('images', image);
        }

        try {
            const response = await axios.put(`${config.BASE_URL}/api/admin/update-project/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            setProject(response.data.project);

            if (featuredImageRef.current) {
                featuredImageRef.current.value = '';
            }

            if (videoRef.current) {
                videoRef.current.value = '';
            }

            setFeaturedImage(null);
            setSuccessMessage('Project updated successfully!');
        } catch (err) {
            setError('Failed to update project');
        }
    };
    const handleNewImageChange = (e) => {
        setNewImages(e.target.files);
    };

    return (
        <PrimeReactProvider>
            <div className="dashboard update_detail_wrap">
                <div className="container">
                    <h1 className="dash_title">Edit Project</h1>
                    <div className="back_btn_wrap">
                        <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                    {project ? (
                        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                            <div className="update_details_wrap">
                                <div className="form-group">
                                    <label>Project Title</label>
                                    <input
                                        type="text"
                                        value={project.title}
                                        onChange={(e) => setProject({ ...project, title: e.target.value })}
                                    />
                                </div>

                                <div className="form-group textareaField">
                                    <h2>Description</h2>
                                    <textarea
                                        name="description"
                                        value={project.description}
                                        onChange={(e) => setProject({ ...project, description: e.target.value })}
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
                                    <div className="detail_banner_wrap">
                                        <div className="detail_img_grid">
                                            <div className="upload_item">
                                                <label>Featured Image</label>
                                                <input type="file" onChange={handleFeaturedImageChange} ref={featuredImageRef} />
                                            </div>

                                            <div className="detail_img_grid">
                                                {project.featuredImage ? (
                                                    <div className="detail_img_item">
                                                        <div className="banner_img_wrap">
                                                            <img src={`${config.BASE_URL}${project.featuredImage}`} alt="Featured" />
                                                        </div>
                                                        <button className="remove_btn" type="button" onClick={() => handleRemoveImage(project.featuredImage)}>Remove</button>
                                                    </div>
                                                ) : (
                                                    <p>No image available.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="form-group">
                                        <label>Upload Gallery Images</label>
                                        <input type="file" multiple onChange={handleNewImageChange} ref={fileInputRef} />
                                    </div>

                                    {project?.images && project?.images.length > 0 && (
                                        <div className="detail_item_inner gallery_inner">
                                            <div className="detail_img_grid">
                                                {project.images.map((image, index) => (
                                                    <div className="detail_image_item" key={index}>
                                                        <div className="detail_img_item">
                                                            <div className="banner_img_wrap">
                                                                <img src={`${config.BASE_URL}${image}`} alt="Featured" />
                                                            </div>
                                                        </div>
                                                        <button className="remove_btn" type="button" onClick={() => handleRemoveImage(image)}>Remove</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <div className="detail_banner_wrap">
                                        <div className="detail_img_grid">
                                            <div className="upload_item">
                                                <label>Video</label>
                                                <input type="file" onChange={handleVideoChange} ref={videoRef} />
                                            </div>

                                            <div className="detail_img_grid">
                                                {project.video ? (
                                                    <div className="detail_img_item">
                                                        <div className="banner_img_wrap">
                                                            <video>
                                                                <source src={`${config.BASE_URL}${project.video}`} type="video/mp4"></source>
                                                            </video>
                                                        </div>
                                                        <button className="remove_btn" type="button" onClick={() => handleRemoveImage(project.video)}>Remove</button>
                                                    </div>
                                                ) : (
                                                    <p>No video available.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="update_btn_wrap">
                                    <button className="update_btn" type="submit">Update Project</button>
                                </div>

                                {successMessage && <p className="success-message">{successMessage}</p>}

                                {error && <p className="error-message">{error}</p>}

                            </div>
                        </form>
                    ) : (
                        <h5>Project not found!</h5>
                    )}
                </div>
            </div>
        </PrimeReactProvider>
    );
}

export default UpdateProjectDetail;
