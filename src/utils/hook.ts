import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { redirect } from 'next/navigation';

export const usePageAuth = ({
  redirectAuth = '/',
}: {
  redirectAuth?: string;
}) => {
  const { user } = useAppSelector((state) => state.authState);
  useEffect(() => {
    if (!user) {
      redirect('/');
    }
  }, []);
};
