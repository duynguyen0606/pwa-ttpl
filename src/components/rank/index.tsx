'use client';

import { useState } from 'react';
import RankSideBar, { OptionsSidebar } from './RankSideBar';
import RankDetail from './RankDetail';

function RankPage() {
  const [activeTab, setActiveTab] = useState(OptionsSidebar.post);
  return (
    <div className='flex gap-4 w-full'>
      <RankSideBar
        activeTab={activeTab}
        onSelectedTab={(active: number) => setActiveTab(active)}
      />
      <div className='flex-1 overflow-auto' style={{ maxHeight: '80vh' }}>
        <RankDetail activeTab={activeTab} />
      </div>
    </div>
  );
}

export default RankPage;
