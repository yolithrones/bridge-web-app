import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import Navigation from './Navigation';
import VisitorCounter from '../VisitorCounter';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`sticky top-0 w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M5 12V20H19V12M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xl font-bold">BridgeWorld</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Navigation />
          <VisitorCounter />
        </div>
        <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 py-2">
            <Navigation isMobile />
            <div className="mt-4 border-t border-gray-100 pt-4">
              <VisitorCounter />
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;