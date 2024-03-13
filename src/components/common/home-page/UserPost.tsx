import { useAppSelector } from '@/src/redux/hooks';
import { Avatar, Input } from 'antd';
import Image from 'next/image';

function UserPost({ onOpenModal }: { onOpenModal: () => void }) {
  const { user } = useAppSelector((state) => state.authState);
  return (
    <div className='bg-white rounded-lg p-4'>
      <div className='flex items-center gap-2'>
        <div className='w-10'>
          <Avatar shape='circle' size='large' src={user?.image} />
        </div>
        <Input
          size='large'
          onClick={onOpenModal}
          placeholder='Bạn đang nghĩ gì ?'
        />
      </div>
      <div className='flex justify-center gap-2 py-4 '>
        <div className='p-2 rounded-full bg-orange-100' onClick={onOpenModal}>
          <Image
            src='/images/icons/orange-document.png'
            alt='document'
            width={25}
            height={25}
          />
        </div>
        <div className='p-2 rounded-full bg-orange-100' onClick={onOpenModal}>
          <Image
            src='/images/icons/orange-video.png'
            alt='video'
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
}

export default UserPost;
