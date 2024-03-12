import Image from 'next/image';

function ProfileFollowComp({
  layout,
  dataList,
}: {
  layout: 'grid' | 'vertical';
  dataList: Array<any>;
}) {
  return (
    <div className={`mt-2 text-${layout === 'grid' ? '[8px]' : 'xs'}`}>
      {dataList.length > 0 ? (
        <>
          <div
            className={
              layout === 'grid'
                ? 'grid grid-cols-2 gap-3 pb-1'
                : 'flex flex-col'
            }
          >
            {dataList.map((item) => (
              <div
                key={item?.id}
                className={`flex items-center justify-between p-2 rounded-lg ${
                  layout === 'grid' ? 'border border-gray-300' : ''
                }`}
              >
                <div className='flex items-center gap-2'>
                  <Image
                    className='rounded-full object-fit'
                    src={item?.avatar_user_follow || item?.avatar_user_watching}
                    alt=''
                    width={22}
                    height={22}
                  />
                  <div>
                    {item?.name_user_follow || item?.name_user_watching}
                  </div>
                </div>
                <button
                  className='rounded py-[6px] px-[10px] font-medium'
                  style={{
                    color: item?.follow == 1 ? '#FFF' : '#262C41',
                    backgroundColor: item?.follow == 1 ? '#F58533' : '#F4F5F8',
                  }}
                >
                  {item?.follow ? 'Bỏ theo dõi' : 'Theo dõi'}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ProfileFollowComp;
