'use client';

import UserProfile from '@/src/components/user/personal';
// import UserProfile from '@/src/components/user';
import { usePageAuth } from '@/src/utils/hook';

function Index() {
  usePageAuth();
  return <UserProfile />;
}

export default Index;
