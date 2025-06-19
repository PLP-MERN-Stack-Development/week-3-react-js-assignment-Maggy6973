import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-gray-300">Terms of Service</a>
          <a href="#" className="mx-2 hover:text-gray-300">Contact Us</a>
        </div>
        <p>&copy; 2024 My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;