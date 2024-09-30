import React from 'react';
import DirectoryLayout from '@/components/DirectoryLayout';
import PermacultureFarms from '@/components/PermacultureFarms';

const PermacultureDirectory = () => {
  return (
    <DirectoryLayout title="Permaculture Farm Directory">
      <PermacultureFarms />
    </DirectoryLayout>
  );
};

export default PermacultureDirectory;