import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

export const usePageAuth = () => {
  const { user } = useAppSelector((state) => state.authState);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [router, user]);
};

export const useMobileClient: () => boolean = () => {
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  return isMobileClient;
};
