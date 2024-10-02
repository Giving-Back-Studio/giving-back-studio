import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { navItems } from '@/nav-items';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="mb-4 sm:mb-0">
            <Logo />
          </Link>
          <nav className="flex flex-wrap justify-center sm:space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white hover:text-white/80 transition-colors px-3 py-2 text-sm md:text-base lg:text-lg"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow overflow-hidden">
        <div className="h-full overflow-y-auto px-4 py-8 md:py-12">
          <div className="container mx-auto max-w-7xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;