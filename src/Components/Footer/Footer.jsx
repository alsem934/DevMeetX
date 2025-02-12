


import { FaTwitter, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About DevMeetup</h3>
            <p className="text-gray-400">
              DevMeetup is a global community of developers coming together to learn, share, and grow. 
              Join us for exciting events, workshops, and networking opportunities.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://t.me/codenightforum/4791" className="text-gray-400 hover:text-white">
                <FaTelegram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-blue-600 px-6 py-2 rounded-r-lg hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevMeetup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
