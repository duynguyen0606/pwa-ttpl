import { Button } from 'antd';
import Image from 'next/image';

function CustomButton({ type }: { type: 'update' | 'delete' | 'save' }) {
  return type === 'update' ? (
    <Button
      style={{
        backgroundColor: 'var(--secondary-color)',
        borderRadius: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      icon={
        <Image
          src='/images/dashboard/update.png'
          alt='update'
          width={20}
          height={20}
        />
      }
    />
  ) : (
    <>
      {type === 'delete' ? (
      <Button
        className='button-flex'
        style={{
          backgroundColor: '#e83b2f',
          borderRadius: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        icon={
          <Image
            src='/images/dashboard/delete.png'
            alt='delete'
            width={20}
            height={20}
          />
        }
      />
      ) : (
      <Button
        className='button-flex'
        style={{
          backgroundColor: '#4061ab',
          borderRadius: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        icon={
          <Image
            src='/images/dashboard/download.png'
            alt='delete'
            width={20}
            height={20}
          />
        }
      />
      )}
    </>

  );
}

export default CustomButton;
