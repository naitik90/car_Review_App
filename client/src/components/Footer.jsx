import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Header */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">Car Review App</h2>
          <p className="text-sm mt-1">© 2024 Car Review App. All rights reserved.</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-right">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
