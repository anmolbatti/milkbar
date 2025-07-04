import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config'; 

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState(''); // Change email to username
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(`${config.BASE_URL}/api/admin/login`, { username, password }, { withCredentials: true });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                onLogin(); // Call the onLogin function to update the authenticated state

                navigate('/admin/dashboard'); // Redirect to dashboard after successful login
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
       
        <div id="login-page">
        <div className="login">
            <h2 className="login-title">Login</h2>
            {error && <p className="notice">{error}</p>}
            <form className="form-login" onSubmit={handleLogin}>
                <label htmlFor="email">Username</label>
                <div className="input-email">
                    <i className="fa-solid fa-user icon"></i>      
                    <input 
                        type="text" 
                        placeholder="Enter your username" 
                        onChange={(e) => setUsername(e.target.value)}  
                        value={username} 
                        required 
                        autocomplete="off"
                    />
                </div>
                <label htmlFor="password">Password</label>
                <div className="input-password">
                    <i className="fas fa-lock icon"></i>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required autocomplete="off"
                    />
                </div>
                <button type="submit"><i className="fas fa-door-open"></i> Sign in</button>
            </form>
        </div>
    </div>
    );
};

export default Login;
