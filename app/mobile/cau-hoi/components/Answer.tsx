function Answer({ user, content }: { user: any; content: any }) {
  return (
    <div className='border-t-[1px] border-dashed border-[#E5E5E5] mt-3 pt-4'>
      {content && (
        <>
          {user ? (
            <div className='flex items-center flex-wrap mb-3'>
              <img
                className='w-9 h-9 rounded-full object-cover'
                src={
                  user.img
                    ? user.img
                    : 'https://ttpl.vn/assets/images/logo/logo-legalzone.png'
                }
                alt='avatar user'
              />
              <div className='ml-3'>
                <a href='' className='text-[#444] font-bold'>
                  {user.name}
                </a>
                <p className='text-xs text-[#979797]'>52 ngày trước</p>
              </div>
            </div>
          ) : (
            <h2 className='text-lg font-bold text-[#F58533]'>
              Câu trả lời tham khảo
            </h2>
          )}
          <p className='text-[#F58533]'>{content}</p>
        </>
      )}
    </div>
  );
}

export default Answer;
