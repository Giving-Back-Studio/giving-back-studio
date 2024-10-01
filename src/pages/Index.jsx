import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase';
import { toast } from 'sonner';
import CosmicAnimation from '@/components/CosmicAnimation';
import ReFiInvestors from '@/components/ReFiInvestors';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import PermacultureFarms from '@/components/PermacultureFarms';

const Index = () => {
  const [showCosmic, setShowCosmic] = useState(false);

  return (
    <>
      {showCosmic && <CosmicAnimation />}
      <div className="space-y-12">
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-light text-white">Conscious Capital Investors</h2>
            <Link to="/investors">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gbs-purple">See All</Button>
            </Link>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              <ReFiInvestors limit={5} />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-light text-white">Tech4Good Jobs</h2>
            <Link to="/jobs">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gbs-purple">See All</Button>
            </Link>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              <Tech4GoodJobs limit={5} />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-light text-white">Permaculture Farms</h2>
            <Link to="/farms">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gbs-purple">See All</Button>
            </Link>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              <PermacultureFarms limit={5} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;