import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const usePageAuth = () => {
  const { user } = useAppSelector((state) => state.authState);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [router, user]);
};
