import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users', userDetails);
      // Redirect to login page after successful registration
      navigate('/user-login');
    } catch (error) {
      console.error(error); // Log error for debugging
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username" // Added id
            name="username"
            value={userDetails.username} // Controlled input
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password" // Added id
            name="password"
            value={userDetails.password} // Controlled input
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
;
