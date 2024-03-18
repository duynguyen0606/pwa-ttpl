'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAppSelector } from '@/src/redux/hooks';
import { ModalDialog } from '../../modal';
import Image from 'next/image';

function Footer() {
  const { user } = useAppSelector((state) => state.authState);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div
      className='
                fixed 
                w-full h-16 
                bottom-0 
                bg-cover bg-center bg-[url(https://ttpl.vn/assets/images/Backgound-footer.png)]
            '
    >
      <Link
        href='/mobile'
        className='absolute translate-x-2/4 right-1/2 z-[1] rounded-full bottom-[14px]'
      >
        <Image
          src='https://ttpl.vn/assets/images/Home.png'
          alt=''
          width={77}
          height={77}
        />
      </Link>
      <div
        className='
                    fixed 
                    bottom-0 
                    w-full 
                    px-[15px] py-4 
                    flex items-center justify-between
                '
      >
        {/* left icon HOME */}
        <div className='flex items-center'>
          <div
            className='mx-4'
            onClick={user ? () => setOpenDialog(true) : undefined}
          >
            <Image
              src='https://ttpl.vn/assets/images/icon/briefcase.png'
              alt=''
              width={33}
              height={33}
            />
          </div>

          <Link href='/mobile/bai-viet' className='mx-4'>
            <Image
              src='https://ttpl.vn/assets/images/icon/file-text.png'
              alt=''
              width={33}
              height={33}
            />
          </Link>
        </div>

        {/* right icon HOME */}
        <div className='flex items-center'>
          <Link href='#' className='mx-4'>
            <Image
              src='https://ttpl.vn/assets/images/icon/message-circle-2.png'
              alt=''
              width={33}
              height={33}
            />
          </Link>

          {user ? (
            <Link href='/mobile/my-profile' className='mx-4'>
              <Image
                className='w-7 h-7 rounded-full'
                src={user?.image}
                alt='logo-legalzone'
                width={28}
                height={28}
              />
            </Link>
          ) : (
            <Link href='/mobile/dang-nhap' className='mx-4'>
              <Image
                className='w-7 h-7'
                src='https://ttpl.vn/assets/images/header/User.png'
                alt=''
                width={33}
                height={33}
              />
            </Link>
          )}
        </div>
      </div>

      {/* Dialog modal */}
      <ModalDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </div>
  );
}

export default Footer;
