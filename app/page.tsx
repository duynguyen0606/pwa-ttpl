'use client';

import AlertMobile from '@/src/components/common/AlertMobile';
import HomePageDesktop from '@/src/components/common/home-page';
import Loading from '@/src/components/common/loading';
import HomePageMobile from '@/src/components/mobile/home-page';
import { useMobileClient } from '@/src/utils/hook';
// import DefaultLayout from '@/src/components/layout';
import { Suspense, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Index() {
  const [openDrawerAlert, setOpenDrawerAlert] = useState(false);
  const isMobileClient = useMobileClient();

  // useEffect(() => {
  //   if (localStorage.getItem('device') == 'mobile') {
  //     setOpenDrawerAlert(false);
  //   } else {
  //     setOpenDrawerAlert(isMobileClient);
  //   }

  //   localStorage.setItem('device', isMobileClient ? 'mobile' : 'desktop');
  // }, [isMobileClient]);

  useEffect(() => {
    setOpenDrawerAlert(isMobileClient);
  }, [isMobileClient]);

  return (
    <>
      <HomePageDesktop />
      {isMobileClient && (
        <AlertMobile
          // handleTransformView={() => {
          //   setOpenDrawerAlert();
          //   // localStorage.setItem('device', 'mobile');
          // }}
          open={openDrawerAlert}
          onClose={() => setOpenDrawerAlert(false)}
        />
      )}
    </>
  );
}
