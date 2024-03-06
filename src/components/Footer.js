import React from "react";

const Footer = () => {
  // Get current date
  const currentDate = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 py-4">
      <div className="container mx-auto flex justify-between items-center text-white px-4">
        <p>Gravel &copy; {currentDate}</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
