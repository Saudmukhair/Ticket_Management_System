import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <p>&copy; {new Date().getFullYear()} Ticket Management System. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
