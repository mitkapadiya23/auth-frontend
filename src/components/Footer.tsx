import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-6 w-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
          <div className="flex flex-col space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              sit amet
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              ipsum
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              ut labore
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              consectetur
            </a>
          </div>
          <div className="flex flex-col space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              sit amet
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              ipsum
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              ut labore
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              consectetur
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
