import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { navItems } from '@/nav-items';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 flex-grow">
        {children}
      </main>

      <footer className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Giving Back Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;