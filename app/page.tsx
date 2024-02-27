'use client';

import AlertMobile from '@/src/components/common/AlertMobile';
import HomePageDesktop from '@/src/components/common/home-page';
import HomePageMobile from '@/src/components/mobile/home-page';
// import DefaultLayout from '@/src/components/layout';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Index() {
  const [transformView, setTransformView] = useState(false);
  const [openDrawerAlert, setOpenDrawerAlert] = useState(false);
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    if (localStorage.getItem('device') == 'mobile') {
      setOpenDrawerAlert(false);
    } else {
      setOpenDrawerAlert(isMobileUI);
      setIsMobileClient(isMobileUI);
    }

    localStorage.setItem('device', isMobileUI ? 'mobile' : 'desktop');
  }, [isMobileUI]);

  useEffect(() => {
    setTransformView(localStorage.getItem('device') == 'mobile');
  }, []);

  return (
    <>
      {transformView ? <HomePageMobile /> : <HomePageDesktop />}
      {isMobileClient && (
        <AlertMobile
          handleTransformView={() => {
            setTransformView(true);
            setOpenDrawerAlert(false);
            localStorage.setItem('device', 'mobile');
          }}
          open={openDrawerAlert}
          onClose={() => setOpenDrawerAlert(false)}
        />
      )}
    </>
  );
}
