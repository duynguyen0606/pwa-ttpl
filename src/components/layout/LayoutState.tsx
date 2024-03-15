'use client';

import { getListArticle } from '@/src/redux/feature/postSlice';
import {
  getListFollower,
  getListMyPost,
  getListNotification,
  getListWatching,
} from '@/src/redux/feature/userSlice';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function LayoutState(props: PropsWithChildren) {
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const { token } = useAppSelector((state) => state.authState);
  const [isMobileClient, setIsMobileClient] = useState(false);

  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListArticle());
  }, []);

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  useEffect(() => {
    if (token) {
      dispatch(getListNotification({ token }));
      dispatch(getListMyPost({ token }));
      dispatch(getListFollower({ token }));
      dispatch(getListWatching({ token }));
      dispatch(getListMyPost({ token }));
    }
  }, [token]);

  return (
    <div>
      {children}

      {!isMobileClient && (
        <div>
          {/* phone */}
          <Link href='tel:0888889366' className='fixed left-8 bottom-10'>
            <div
              className='
              flex items-center justify-center 
              h-[60px] w-[164px]
              bg-[var(--primary-color)]
            '
              style={{
                borderRadius: '5.5rem',
              }}
            >
              <Image
                src='/images/introduce/phone.png'
                alt=''
                width={35}
                height={35}
              />
              <span className='text-white ml-2'>0888889366</span>
            </div>
          </Link>

          {/* dmca */}
          <Link
            href='https://www.dmca.com/Protection/Status.aspx?ID=7dd76e90-0606-47eb-af77-697796ce89a5&refurl=https://ttpl.vn/'
            className='fixed bottom-0 right-0'
          >
            <Image
              src='https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=7dd76e90-0606-47eb-af77-697796ce89a5'
              alt='DMCA.com Protection Status'
              width='121'
              height='24'
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default LayoutState;
