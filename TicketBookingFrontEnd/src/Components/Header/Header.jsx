import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Store/userSlice'; // Import the logout action from your userSlice
import './Header.css'; // Add your custom styles

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    // Dispatch logout action to clear user from Redux state
    dispatch(logout());

    // Optional: clear tokens or session storage if you're using any
    localStorage.removeItem('authToken');

    // Show logout confirmation
    alert('You have successfully logged out.');

    // Redirect to the login page (optional)
    window.location.href = '/user-login';
  };

  return (
    <header className="bg-dark text-light p-3">
      <div className="container">
        <h1>Ticket Management System</h1>
        <nav>
          <Link className="text-light me-3" to="/">Home</Link>
          <Link className="text-light me-3" to="/available-buses">Available Buses</Link>
          {isLoggedIn ? (
            <>
              <Link className="text-light me-3" to="/ticket-list">Ticket List</Link> {/* Updated Link */}
              <span className="text-light me-3">Welcome, {user.username}</span>
              <button className="btn btn-link text-light me-3" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="text-light me-3" to="/user-login">User Login</Link>
              <Link className="text-light me-3" to="/admin-login">Admin Login</Link>
              <Link className="text-light" to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
