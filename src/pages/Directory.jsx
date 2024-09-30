import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import ReFiInvestors from '@/components/ReFiInvestors';
import PermacultureFarms from '@/components/PermacultureFarms';

const Directory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo />
        <nav>
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-light mb-8">Social Enterprise Directory</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Tech4GoodJobs />
          <ReFiInvestors />
          <PermacultureFarms />
        </div>
      </main>
    </div>
  );
};

export default Directory;