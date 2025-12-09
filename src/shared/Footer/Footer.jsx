import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className=" px-4 grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Logo + About */}
          <div>
            <Logo />
            <p className="text-gray-400 mt-3">
              Your trusted online book delivery service. We bring stories,
              knowledge, and inspiration right to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-purple-400 transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                All Books
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                Categories
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-purple-400 transition cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                Shipping Info
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                Return Policy
              </li>
              <li className="hover:text-purple-400 transition cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <p className="mb-4 text-gray-400">
              Stay connected with our community.
            </p>

            <div className="flex items-center gap-4">
              <a className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition">
                <FaFacebookF />
              </a>
              <a className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition">
                <FaInstagram />
              </a>
              <a className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition">
                <FaTwitter />
              </a>
              <a className="bg-gray-800 p-3 rounded-full hover:bg-purple-500 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BookCourier. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
