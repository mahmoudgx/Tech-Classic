import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between  md:py-5 md:px-0 p-5 max-w-7xl mx-auto items-center border-b-2">
      <div>
        <a href="#">
          <h1 className="text-2xl font-bold">Techclassic</h1>
        </a>
      </div>
      <div className="font-semibold hidden md:flex">
        <ul className="flex space-x-5">
          <li className="cursor-pointer">H</li>
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Case studies</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Resources</li>
        </ul>
      </div>
      <div className="flex space-x-5  items-center hidden md:flex">
        <div className="flex flex-col items-center">
          <h1 className="text-sm bg-gray-200 rounded-md px-2">
            Client Support →
          </h1>
          <a href="tel:1-800-356-8933">
            <h1 className="font-semibold">1-800-356-8933</h1>
          </a>
        </div>
        <div>
          <button className="bg-blue-700 cursor-pointer text-white px-5 py-3 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-xl">
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 z-[9999] left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-5 p-5">
            <li className="cursor-pointer">H</li>
            <li className="cursor-pointer">Solutions</li>
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Case studies</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Resources</li>
          </ul>
          <div className="flex flex-col items-center p-5">
            <div className="flex flex-col items-center mb-5">
              <h1 className="text-sm bg-gray-200 rounded-md px-2">
                Client Support →
              </h1>
              <a href="tel:1-800-356-8933">
                <h1 className="font-semibold">1-800-356-8933</h1>
              </a>
            </div>
            <button className="bg-blue-700 cursor-pointer text-white px-5 py-3 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
