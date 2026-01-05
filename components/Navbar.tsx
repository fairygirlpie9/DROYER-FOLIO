import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-semibold tracking-wide border-2 border-transparent px-3 py-1 transition-all rounded-md ${
      isActive 
      ? 'bg-neo-blue-light text-neo-text border-neo-text shadow-neo-sm' 
      : 'hover:bg-neo-pink-light hover:border-neo-text'
    }`;

  return (
    <nav className="border-b-2 border-neo-text bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold tracking-tight border-2 border-neo-text p-2 bg-neo-pink-vibrant text-white shadow-neo-sm rounded-md transform hover:-rotate-2 transition-transform">
              DR.
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={linkClasses}>
                {item.name}
              </NavLink>
            ))}
            <a 
              href="mailto:hello@danielleroyer.com"
              className="ml-4 bg-neo-text text-white px-5 py-2 font-semibold border-2 border-neo-text rounded-md hover:bg-gray-800 transition-colors shadow-neo-sm"
            >
              Email Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neo-text hover:bg-neo-pink-light border-2 border-neo-text p-2 rounded-md focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-neo-text bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-4 text-xl font-bold border-b border-gray-100 last:border-b-0 ${
                    isActive ? 'bg-neo-blue-light' : 'hover:bg-neo-pink-light'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;