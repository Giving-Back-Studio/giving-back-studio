import React from 'react';
import DirectoryLayout from '@/components/DirectoryLayout';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';

const Tech4GoodDirectory = () => {
  return (
    <DirectoryLayout title="Tech4Good Job Directory">
      <Tech4GoodJobs />
    </DirectoryLayout>
  );
};

export default Tech4GoodDirectory;