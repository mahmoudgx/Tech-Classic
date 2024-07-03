import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Support</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safety Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community Guidelines
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
        <p>&copy; 2024 Techclassic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
