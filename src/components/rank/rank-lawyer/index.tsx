import Image from 'next/image';
import './style.scss';

export enum RankType {
  lawyer = 1,
  account = 2,
}

function RankLawyer(props: { type?: number }) {
  const { type = RankType.lawyer } = props;
  return (
    <div id='rank-lawyer'>
      <div className='rank-lawyer-header flex justify-center gap-10'>
        <div className='flex flex-col items-center gap-2 rank-second'>
          <div className='font-semibold text-xl'>#1</div>
          <Image
            src='https://ttpl.vn/assets/images/rank/icon_rank.png'
            alt='top1-rank'
            width={40}
            height={40}
          />
          <Image
            src='https://ttpl.vn/files/profile_images/_file63607a670166f-avatar.png'
            alt='avatar'
            width={120}
            height={120}
            className='rounded-full'
          />
          <div>Hoàng thị hoài</div>
          <div className='flex'>
            <Image
              src='/images/icons/star.png'
              alt='star'
              width={30}
              height={30}
            />
            <Image
              src='/images/icons/star.png'
              alt='star'
              width={30}
              height={30}
            />
          </div>
          {type === RankType.account && <div>Điểm thưởng: 456789</div>}
        </div>
        <div className='flex flex-col items-center gap-2 rank-first'>
          <div className='font-semibold text-xl'>#1</div>
          <Image
            src='https://ttpl.vn/assets/images/rank/icon_rank.png'
            alt='top1-rank'
            width={40}
            height={40}
          />
          <Image
            src='https://ttpl.vn/files/profile_images/_file63607a670166f-avatar.png'
            alt='avatar'
            width={120}
            height={120}
            className='rounded-full'
          />
          <div>Hoàng thị hoài</div>
          <div className='flex'>
            <Image
              src='/images/icons/star.png'
              alt='star'
              width={30}
              height={30}
            />
            <Image
              src='/images/icons/star.png'
              alt='star'
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 rank-third'>
          <div className='font-semibold text-xl'>#1</div>
          <Image
            src='https://ttpl.vn/assets/images/rank/icon_rank.png'
            alt='top1-rank'
            width={40}
            height={40}
          />
          <Image
            src='https://ttpl.vn/files/profile_images/_file63607a670166f-avatar.png'
            alt='avatar'
            width={120}
            height={120}
            className='rounded-full'
          />
          <div>Hoàng thị hoài</div>
          <div className='flex'>
            <Image
              src='/images/icons/star.png'
              alt='star'
              width={30}
              height={30}
            />
            <Image
              src='/images/icons/star.png'
              alt='star'
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className='pt-6'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='font-semibold text-xl'>#4</div>
          <div
            className='flex items-center gap-2 rounded-full flex-1 px-4 py-2'
            style={{ backgroundColor: '#F3F3F3' }}
          >
            <Image
              src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
              alt='avatar'
              width={30}
              height={30}
              className='rounded-lg'
            />
            <div>Bùi Quang Anh</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-4'>
          <div className='font-semibold text-xl'>#4</div>
          <div
            className='rounded-full flex-1 px-4 py-2 flex justify-between'
            style={{ backgroundColor: '#F3F3F3' }}
          >
            <div className='flex items-center gap-2'>
              <Image
                src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
                alt='avatar'
                width={30}
                height={30}
                className='rounded-lg'
              />
              <div>Bùi Quang Anh</div>
            </div>

            {type === RankType.account && (
              <div>
                <div className='flex'>
                  <Image
                    src='/images/icons/star.png'
                    alt='star'
                    width={30}
                    height={30}
                  />
                  <Image
                    src='/images/icons/star.png'
                    alt='star'
                    width={30}
                    height={30}
                  />
                </div>
                <div>Điểm thưởng: 456789</div>
              </div>
            )}
          </div>
        </div>
        <div className='flex items-center gap-4 mb-4'>
          <div className='font-semibold text-xl'>#4</div>
          <div
            className='flex items-center gap-2 rounded-full flex-1 px-4 py-2'
            style={{ backgroundColor: '#F3F3F3' }}
          >
            <Image
              src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
              alt='avatar'
              width={30}
              height={30}
              className='rounded-lg'
            />
            <div>Bùi Quang Anh</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-4'>
          <div className='font-semibold text-xl'>#4</div>
          <div
            className='flex items-center gap-2 rounded-full flex-1 px-4 py-2'
            style={{ backgroundColor: '#F3F3F3' }}
          >
            <Image
              src='https://ttpl.vn/assets/images/logo/logo-legalzone.png'
              alt='avatar'
              width={30}
              height={30}
              className='rounded-lg'
            />
            <div>Bùi Quang Anh</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankLawyer;
