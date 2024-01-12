import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';

function IntroduceFooter() {
  return (
    <div className='relative'>
      <div className='relative' style={{ paddingTop: '62.5%' }}>
        <ImageLegacy
          src='/images/introduce/footer.png'
          alt='footer'
          layout='fill'
          className='absolute'
        />
      </div>
      <div className='absolute flex items-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-full text-white px-20'>
        <div className='flex-1'>
          <div className='text-xl font-semibold'>LegalZone cam kết</div>
          <p className='py-4'>
            Công ty Luật TNHH Legalzone cam kết sẽ cung cấp các dịch vụ pháp lý
            chất lượng cao, mang đến những tư vấn pháp lý hữu ích và giải pháp
            sáng tạo nhất cho Quý khách, nhằm giúp giải quyết hiệu quả nhất
            những vướng mắc và tháo gỡ những khó khăn của Quý khách.
          </p>
          <div className='italic font-semibold'>
            Hãy để chúng tôi đồng hành cùng bạn
          </div>
          <div className='grid gap-2 py-4'>
            <div className='flex items-start gap-2'>
              <Image
                src='/images/introduce/location.png'
                alt='location icon'
                width={30}
                height={30}
              />
              <div>
                Phòng 1603, số 58 Tố Hữu, phường Trung Văn, quận Nam Từ Liêm,
                thành phố Hà Nội
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/introduce/phone.png'
                alt='phone icon'
                width={30}
                height={30}
              />
              <div>0888889366</div>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/introduce/email.png'
                alt='email icon'
                width={30}
                height={30}
              />
              <div>thutucphapluat@gmail.com</div>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/introduce/site.png'
                alt='site icon'
                width={30}
                height={30}
              />
              <div>https://thutucphapluat.com/</div>
            </div>
          </div>
          <div className='flex gap-2'>
            <Image
              src='/images/introduce/facebook-fill.png'
              alt='facebook'
              width={30}
              height={30}
            />
            <Image
              src='/images/introduce/instagram-fill.png'
              alt='instagram'
              width={30}
              height={30}
            />
            <Image
              src='/images/introduce/snapchat-fill.png'
              alt='snapchat'
              width={30}
              height={30}
            />
            <Image
              src='/images/introduce/pinterest-fill.png'
              alt='pinterest'
              width={30}
              height={30}
            />
            <Image
              src='/images/introduce/tumblr-fill.png'
              alt='tumblr'
              width={30}
              height={30}
            />
            <Image
              src='/images/introduce/twitter-fill.png'
              alt='twitter'
              width={30}
              height={30}
            />
            <Image
              src='/images/introduce/youtube-fill.png'
              alt='youtube'
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className='relative flex-1' style={{ paddingTop: '42.5%' }}>
          <ImageLegacy
            src='/images/introduce/footer2.png'
            alt='footer-2'
            layout='fill'
            className='absolute'
          />
        </div>
      </div>
    </div>
  );
}

export default IntroduceFooter;
