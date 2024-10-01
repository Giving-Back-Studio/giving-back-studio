import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ReFiInvestors from '@/components/ReFiInvestors';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import PermacultureFarms from '@/components/PermacultureFarms';

const Directory = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white">Humanity-Centered Innovation Directory</h1>
      
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-light text-white">Conscious Capital Investors</h2>
          <Link to="/investors">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gbs-purple">See All</Button>
          </Link>
        </div>
        <ReFiInvestors limit={5} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-light text-white">Tech4Good Jobs</h2>
          <Link to="/jobs">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gbs-purple">See All</Button>
          </Link>
        </div>
        <Tech4GoodJobs limit={5} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-light text-white">Permaculture Farms</h2>
          <Link to="/farms">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gbs-purple">See All</Button>
          </Link>
        </div>
        <PermacultureFarms limit={5} />
      </section>
    </div>
  );
};

export default Directory;