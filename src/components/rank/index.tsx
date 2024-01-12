'use client';

import { useState } from 'react';
import RankSideBar, { OptionsSidebar } from './RankSideBar';
import RankDetail from './RankDetail';

function RankPage() {
  const [activeTab, setActiveTab] = useState(OptionsSidebar.post);
  console.log(activeTab);
  return (
    <div className='flex gap-4'>
      <RankSideBar
        activeTab={activeTab}
        onSelectedTab={(active: number) => setActiveTab(active)}
      />
      <RankDetail activeTab={activeTab} />
    </div>
  );
}

export default RankPage;
