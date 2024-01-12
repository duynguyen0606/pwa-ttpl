import Image from 'next/image';

export const renderCollapseIcon = (isActive?: boolean) => {
  return (
    <div
      className='rounded-full p-1 overflow-hidden'
      style={{ backgroundColor: 'var(--primary-color)' }}
    >
      <Image
        src={!!isActive ? '/images/icons/up.png' : '/images/icons/down.png'}
        alt='expand icon'
        width={20}
        height={20}
      />
    </div>
  );
};
