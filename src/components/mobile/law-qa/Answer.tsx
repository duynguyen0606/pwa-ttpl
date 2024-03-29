import Image from 'next/image';

function Answer({
  user,
  content,
  create_at,
}: {
  user?: any;
  content: any;
  create_at?: string;
}) {
  return (
    <div className='border-t-[1px] border-dashed border-[#E5E5E5] mt-3 pt-4'>
      {content && (
        <>
          {user ? (
            <div className='flex items-center flex-wrap mb-3'>
              <Image
                className='w-9 h-9 rounded-full object-cover'
                src={
                  user.img
                    ? user.img
                    : 'https://ttpl.vn/assets/images/logo/logo-legalzone.png'
                }
                alt='avatar user'
                width={36}
                height={36}
              />
              <div className='ml-3'>
                <a href='' className='text-[#444] font-bold'>
                  {user?.name}
                </a>
                <p className='text-xs text-[#979797]'>{create_at}</p>
              </div>
            </div>
          ) : (
            <h2 className='text-lg font-bold text-[--primary-color]'>
              Câu trả lời tham khảo
            </h2>
          )}
          <p className='text-[--primary-color]'>{content}</p>
        </>
      )}
    </div>
  );
}

export default Answer;
