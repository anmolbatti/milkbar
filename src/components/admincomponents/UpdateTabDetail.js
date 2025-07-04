import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import config from '../../config';

function UpdateTabDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tab, setTab] = useState({ title: ''});
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchTabDetails = async () => {
            try {
                const response = await axios.get(`${config.BASE_URL}/api/admin/get-tab/${id}`, { withCredentials: true });
                setTab(response.data);
            } catch (err) {
                setError('Failed to fetch tab details');
            }
        };

        fetchTabDetails();
    }, [id]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', tab.title);

        try {
            const response = await axios.put(`${config.BASE_URL}/api/admin/update-tab/${id}`, {title: tab?.title});

            setTab(response.data.tab);
            setSuccessMessage('Tab updated successfully!');
        } catch (err) {
            setError('Failed to update tab');
        }
    };

    return (
        <div className="dashboard update_detail_wrap">
            <div className="container">
                <h1 className="dash_title">Edit Tab</h1>
                <div className="back_btn_wrap">
                    <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
                </div>
                {tab ? (
                    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                        <div className="update_details_wrap">
                            <div className="form-group">
                                <label>Tab Title</label>
                                <input
                                    type="text"
                                    value={tab.title}
                                    onChange={(e) => setTab({ title: e.target.value })}
                                />
                            </div>

                            <div className="update_btn_wrap">
                                <button className="update_btn" type="submit">Update Tab</button>
                            </div>

                            {successMessage && <p className="success-message">{successMessage}</p>}

                            {error && <p className="error-message">{error}</p>}

                        </div>
                    </form>
                ) : (
                    <h5>Tab not found!</h5>
                )}
            </div>
        </div>
    );
}

export default UpdateTabDetail;
