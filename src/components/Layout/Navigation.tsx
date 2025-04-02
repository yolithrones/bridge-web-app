import React from 'react';
import { NavLink } from 'react-router-dom';
interface NavigationProps {
  isMobile?: boolean;
}
const Navigation: React.FC<NavigationProps> = ({
  isMobile = false
}) => {
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Historical',
    path: '/historical'
  }, {
    name: 'Record-Breaking',
    path: '/record-breaking'
  }, {
    name: 'Iconic',
    path: '/iconic'
  }, {
    name: 'Modern',
    path: '/modern'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Contact',
    path: '/contact'
  }, {
    name: 'Feedback',
    path: '/feedback'
  }];
  const baseClasses = 'transition-all duration-300 relative';
  const desktopClasses = 'px-3 py-2 text-gray-600 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300';
  const mobileClasses = 'block py-2 text-gray-600 hover:text-blue-600';
  const activeClasses = 'text-blue-600 font-medium';
  return <nav className={isMobile ? 'flex flex-col space-y-1' : 'flex space-x-1'}>
      {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
      isActive
    }) => `${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${isActive ? activeClasses : ''}`} end={item.path === '/'}>
          {item.name}
        </NavLink>)}
    </nav>;
};
export default Navigation;