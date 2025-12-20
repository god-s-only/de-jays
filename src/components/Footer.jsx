import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-2">De Jays Guest Inn and Resort Limited</h3>
        <p className="text-gray-400 mb-4">No 21 Zitti Road, Kaduna, Kaduna State, Nigeria</p>
        <p className="text-gray-400">Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;