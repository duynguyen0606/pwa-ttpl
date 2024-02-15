import { Input } from 'antd';
import Image from 'next/image';

function CreateComment() {
  return (
    <div id='create-comment' className='flex gap-4 mb-4'>
      <div className='w-8'>
        <Image
          src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
          alt='avatar'
          width={30}
          height={30}
        />
      </div>
      <div className='flex-1'>
        <Input placeholder='Nhập bình luận của bạn' />
      </div>
    </div>
  );
}

export default CreateComment;
