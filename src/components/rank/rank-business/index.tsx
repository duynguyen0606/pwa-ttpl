import Image from 'next/image';

function RankBusiness() {
  return (
    <div id='rank-business'>
      <div className='flex bg-white items-center gap-2 p-4 rounded-lg'>
        <div className='text-xl font-semibold'>#1</div>
        <div className='flex gap-2 items-center'>
          <Image
            src='https://drive.google.com/uc?id=1vLPCXwk1Fo3LkXI9N2ejCz2J0abYImZB'
            alt='avatar'
            width={60}
            height={60}
            className='rounded-full'
          />
          <div>
            <h3 className='text-xl font-semibold'>Công ty luật Legalzone</h3>
            <p>
              Phòng 1603, Sảnh A3, Toà nhà Ecolife, 58 Tố Hữu, phường Trung Văn,
              quận Nam Từ Liêm, thành phố Hà Nội
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankBusiness;
