import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../Store/userSlice';

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', credentials);
      dispatch(login(response.data));
      // Redirect to available buses after successful login
      navigate('/available-buses');
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container">
      <h2>User Login</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" name="username" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        New user? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default UserLogin;
