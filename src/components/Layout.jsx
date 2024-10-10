import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FlowerOfLife from '@/components/FlowerOfLife';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white font-sans flex flex-col relative overflow-hidden">
      <FlowerOfLife opacity={0.05} color="255,255,255" rotationDuration={240} />
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="w-12 h-12" />
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        {children}
      </main>

      <footer className="bg-white/10 backdrop-blur-md py-8 mt-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>For the good of all</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;