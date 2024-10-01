import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from "@/components/ui/button";
import NewsletterFooter from '@/components/NewsletterFooter';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="mb-4 sm:mb-0">
            <Logo />
          </Link>
          <nav className="flex flex-wrap justify-center sm:space-x-6">
            <Link
              to="/"
              className="text-white hover:text-white/80 transition-colors px-3 py-2 text-lg"
            >
              Directory
            </Link>
            <Link
              to="/sponsor"
              className="text-white hover:text-white/80 transition-colors px-3 py-2 text-lg"
            >
              Sponsor
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 flex-grow mb-20">
        {children}
      </main>

      <NewsletterFooter />
    </div>
  );
};

export default Layout;