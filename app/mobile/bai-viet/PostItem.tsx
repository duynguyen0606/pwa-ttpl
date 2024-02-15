import { DislikeIcon, LikeIcon, LikedIcon } from '@/src/assests/icons';
import Link from 'next/link';

function PostItem({ data }: { data: any }) {
  return (
    <div className='px-4 pt-4 mb-2 bg-white '>
      <header className='flex justify-between mb-2'>
        <div className='flex'>
          <img
            src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
            className='w-10 h-10 object-cover rounded-full'
            alt='avatar'
          />
          <div className='flex flex-col ml-2 justify-center'>
            <Link
              href='/mobile/trang-ca-nhan'
              className='text-sm font-bold text-[#262C41]'
            >
              {`${data.user}`}
            </Link>
            <p className='text-xs text-[#B5B9C7]'>
              {`${data.publishAt} ngày trước`}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center '>
          <div className='rounded py-[6px] px-[10px] text-xs font-medium text-[#262C41] bg-[#F4F5F8]'>
            Theo dõi
          </div>
        </div>
      </header>

      <div>
        <div className='overflow-hidden'>
          <img
            className='w-full'
            loading='lazy'
            src={`${
              data.src
                ? data.src
                : 'https://lh3.googleusercontent.com/d/1Rjt7q0xvL0JFWcoTql-stBdJSAJnguVU=s1000?authuser=0'
            }`}
            alt='Bài viết'
          />
        </div>
        <div className='mt-2'>
          <a
            href='#'
            className='text-sm font-bold text-[#262C41] overflow-hidden'
          >
            {`${data.title}`}
          </a>
          <p className='text-xs text-[#686E7E] my-1 line-clamp-3'>
            {`${data.description}`}
          </p>
        </div>
      </div>

      <footer>
        <div className='top-footer flex items-center justify-between py-1 text-xs text-[#B5B9C7]'>
          <div className='show-like text-sm flex flex-row'>
            {data.like ? (
              <>
                <LikedIcon className='h-[18px] w-[18px] mr-1' />
                <span>{`${data.like}`}</span>
              </>
            ) : null}
          </div>
          <div className='comment-shared flex flex-row items-center font-medium'>
            {/* comment */}
            {data.comment ? (
              <div className='comment'>{`${data.comment} bình luận`}</div>
            ) : null}

            {/* dot */}
            {data.comment && data.share ? (
              <div className='w-1 h-1 mx-1 bg-[#A1A5AC] rounded-full'></div>
            ) : null}

            {/* share */}
            {data.share ? (
              <div className='shared'>{`${data.share} lượt chia sẻ`}</div>
            ) : null}
          </div>
        </div>
        <div
          className='bottom-footer
                    flex items-center justify-between 
                    border-t-[1px] border-solid border-[#E5E5E5] 
                    flex-wrap 
                    py-2 mt-1
                    text-sm font-medium text-[#686E7E]
                '
        >
          <div className='flex flex-row items-center'>
            <LikeIcon className='h-[18px] w-[18px]' />
            <span className='ml-2'>Like</span>
          </div>
          <div className='flex flex-row items-center'>
            <DislikeIcon className='h-[18px] w-[18px]' />
            <span className='ml-2'>Dislike</span>
          </div>
          <div className='flex flex-row items-center'>
            <img
              className=''
              src='https://ttpl.vn/assets/images/icon/Comment.png'
              alt='comment'
            />
            <span className='ml-2'>Comment</span>
          </div>
          <div className='flex flex-row items-center'>
            <img
              className=''
              src='https://ttpl.vn/assets/images/icon/Share.png'
              alt='share'
            />
            <span className='ml-2'>Share</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PostItem;
