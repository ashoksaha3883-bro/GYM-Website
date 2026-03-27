import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">FITNESS HUB</h2>
          <p className="text-sm ">
            Your journey to a stronger, healthier you starts here. Join our community and achieve your fitness goals with expert trainers and top-notch equipment.
          </p>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white ">About Us</a></li>
            <li><a href="#" className="hover:text-white ">Membership</a></li>
            <li><a href="#" className="hover:text-white ">Classes</a></li>
            <li><a href="#" className="hover:text-white ">Trainers</a></li>
            <li><a href="#" className="hover:text-white ">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
            
              <span>123 Main St, Anytown, USA</span>
            </li>
            <li className="flex items-center">
              
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center">
              
              <span>info@fitnesshub.com</span>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 ">
          
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 ">
        
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 ">
      
            </a>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Newsletter</h3>
          <p className="text-sm mb-3">Get fitness tips and offers straight to your inbox.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none:ring-1  text-white"
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded-md"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 text-sm text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Fitness Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;