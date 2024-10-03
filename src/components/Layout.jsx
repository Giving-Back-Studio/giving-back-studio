import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { navItems } from '@/nav-items';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white font-sans flex flex-col">
      <header className="container mx-auto px-4 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="mb-4 sm:mb-0">
            <Logo className="w-40 md:w-48 lg:w-56" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white hover:text-white/80 transition-colors px-2 py-1 text-sm sm:text-base lg:text-lg"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow overflow-y-auto">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:py-8 md:py-12 lg:py-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;