import { Button, Modal, ModalProps, Rate } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const dataProfile = [
  {
    title: '18.000',
    desc: 'Khách hàng sử dụng dịch vụ',
    image: '/images/introduce-profile/user.png',
  },
  {
    title: '17.500',
    desc: 'Khách hàng đánh giá cao',
    image: '/images/introduce-profile/star.png',
  },
  {
    title: '159.184',
    desc: 'Khách hàng tìm kiếm thủ tục pháp luật',
    image: '/images/introduce-profile/like.png',
  },
  {
    title: '2.250',
    desc: 'Dự án',
    image: '/images/introduce-profile/project.png',
  },
  {
    title: '9',
    desc: 'Năm kinh nghiệm',
    image: '/images/introduce-profile/calendar.png',
  },
  {
    title: '02',
    desc: 'Văn phòng',
    image: '/images/introduce-profile/location.png',
  },
];

const solutionsArr = [
  'Quản lý doanh nghiệp',
  'Số hoá hợp đồng',
  'Truyền thông',
  'Mạng xã hội gắn kết doanh nghiệp',
  'Tư vấn pháp luật 4.0',
  'Các giải pháp dành cho doanh nghiệp khác',
  'Thông tin pháp luật',
  'Các lĩnh vực khác',
];

const founderList = [
  {
    name: 'Trần đức thành',
    position: 'Founder',
    desc: 'Luật sư Trần Đức Thành là người sáng lập, Giám đốc công ty TNHH Legalzone xuất phát từ mong muốn xây dựng hãng luật hàng đầu Việt Nam, hướng tới thị trường pháp lý thế giới. Với sự nỗ lực của Luật sư Trần Đức Thành và toàn thể nhân viên trong công ty, Legalzone ngày càng dược nhiều khách hàng tin cậy.',
    avatar: '/images/introduce-profile/duc-thanh.png',
  },
  {
    name: 'Ngô quỳnh anh',
    position: 'Luật sư',
    desc: ' LS. Quỳnh Anh là một Luật sư thành viên của Legalzone, có kinh nghiệm chuyên sâu về tư vấn đầu tư, công bố sản phẩm, tài chính, ngân hàng, và hợp đồng.',
    avatar: '/images/introduce-profile/quynh-anh.png',
  },
  {
    name: 'Quyền thị mai anh',
    position: 'Luật sư',
    desc: 'Là Luật sư thành viên của Legalzone và chịu trách nhiệm về mảng tư vấn dự án, tư vấn tài chính và phát triển kinh doanh, tư vấn và soạn thảo hồ sơ cho các doanh nghiệp, tham gia đàm phán và tố tụng trong các vụ việc tranh chấp hợp đồng thương mại.',
    avatar: '/images/introduce-profile/mai-anh.png',
  },
  {
    name: 'Quan thị nga',
    position: 'Chuyên viên tư vấn',
    desc: 'Chuyên viên Nga là chuyên viên tư vấn về bảo hiểm, đàm phán và soạn thảo hợp đồng, tranh chấp hợp đồng.',
    avatar: '/images/introduce-profile/thi-nga.png',
  },
  {
    name: 'Vũ dương trà my',
    position: 'Chuyên viên tư vấn',
    desc: 'Chuyên viên My là thành viên của Legalzone, chuyên tư vấn về đất đai. Chuyên viên đã có kinh nghiệm nhiều năm trong việc giải quyết những vụ việc tranh chấp quyền sử dụng đất.',
    avatar: '/images/introduce-profile/tra-my.png',
  },
];

const customerThink = [
  {
    name: 'CÔNG TY CỔ PHẦN DỊCH VỤ NARA ONE',
    star: 5,
    desc: 'Chúng tôi thường xuyên có nhu cầu được tư vấn pháp lý về hoạt động đăng ký cấp Giấy chứng nhận đầu tư. Công ty Legalzone đã cung cấp cho chúng tôi dịch vụ tư vấn pháp lý trong một số dự án và chúng tôi hài lòng về sự nhiệt huyết và tinh thần trách nhiệm của đội ngũ nhân viên của Legalzone trong quá trình hợp tác.',
  },
  {
    name: 'CÔNG TY TNHH DASAN PRECISIONS PRODUCT VINA',
    star: 5,
    desc: 'Công ty của chúng tôi đã nhận được dịch vụ tư vấn của Legalzone – với trách nhiệm hỗ trợ tư vấn pháp lý trong việc đăng ký cấp Giấy chứng nhận đăng ký đầu tư dự án DASAN PRECISIONS PRODUCT VINA tại Bắc Ninh. Chúng tôi thực sự thỏa mãn và hài lòng với sự trợ giúp và dịch vụ chuyên nghiệp, nhanh chóng của Legalzone.',
  },
  {
    name: 'CÔNG TY CỔ PHẦN CY TECH VINA',
    star: 5,
    desc: 'Tôi đã xem các hồ sơ đơn đăng ký đầu tư đã được nộp tại Việt Nam. Đầu tiên, bộ phận tác nghiệp đã báo cáo rằng họ rất hài lòng với chất lượng dịch vụ do Quý công ty cung cấp. Chúng tôi gửi lời cám ơn và đánh giá cao về sự hợp tác giữa hai bên…”',
  },
  {
    name: 'CÔNG TY CỔ PHẦN DỊCH VỤ NARA ONE',
    star: 5,
    desc: 'Chúng tôi thường xuyên có nhu cầu được tư vấn pháp lý về hoạt động đăng ký cấp Giấy chứng nhận đầu tư. Công ty Legalzone đã cung cấp cho chúng tôi dịch vụ tư vấn pháp lý trong một số dự án và chúng tôi hài lòng về sự nhiệt huyết và tinh thần trách nhiệm của đội ngũ nhân viên của Legalzone trong quá trình hợp tác.',
  },
  {
    name: 'CÔNG TY TNHH DASAN PRECISIONS PRODUCT VINA',
    star: 5,
    desc: 'Công ty của chúng tôi đã nhận được dịch vụ tư vấn của Legalzone – với trách nhiệm hỗ trợ tư vấn pháp lý trong việc đăng ký cấp Giấy chứng nhận đăng ký đầu tư dự án DASAN PRECISIONS PRODUCT VINA tại Bắc Ninh. Chúng tôi thực sự thỏa mãn và hài lòng với sự trợ giúp và dịch vụ chuyên nghiệp, nhanh chóng của Legalzone.',
  },
  {
    name: 'CÔNG TY CỔ PHẦN CY TECH VINA',
    star: 5,
    desc: 'Tôi đã xem các hồ sơ đơn đăng ký đầu tư đã được nộp tại Việt Nam. Đầu tiên, bộ phận tác nghiệp đã báo cáo rằng họ rất hài lòng với chất lượng dịch vụ do Quý công ty cung cấp. Chúng tôi gửi lời cám ơn và đánh giá cao về sự hợp tác giữa hai bên…”',
  },
  {
    name: 'CÔNG TY CỔ PHẦN DỊCH VỤ NARA ONE',
    star: 5,
    desc: 'Chúng tôi thường xuyên có nhu cầu được tư vấn pháp lý về hoạt động đăng ký cấp Giấy chứng nhận đầu tư. Công ty Legalzone đã cung cấp cho chúng tôi dịch vụ tư vấn pháp lý trong một số dự án và chúng tôi hài lòng về sự nhiệt huyết và tinh thần trách nhiệm của đội ngũ nhân viên của Legalzone trong quá trình hợp tác.',
  },
  {
    name: 'CÔNG TY TNHH DASAN PRECISIONS PRODUCT VINA',
    star: 5,
    desc: 'Công ty của chúng tôi đã nhận được dịch vụ tư vấn của Legalzone – với trách nhiệm hỗ trợ tư vấn pháp lý trong việc đăng ký cấp Giấy chứng nhận đăng ký đầu tư dự án DASAN PRECISIONS PRODUCT VINA tại Bắc Ninh. Chúng tôi thực sự thỏa mãn và hài lòng với sự trợ giúp và dịch vụ chuyên nghiệp, nhanh chóng của Legalzone.',
  },
  {
    name: 'CÔNG TY CỔ PHẦN CY TECH VINA',
    star: 5,
    desc: 'Tôi đã xem các hồ sơ đơn đăng ký đầu tư đã được nộp tại Việt Nam. Đầu tiên, bộ phận tác nghiệp đã báo cáo rằng họ rất hài lòng với chất lượng dịch vụ do Quý công ty cung cấp. Chúng tôi gửi lời cám ơn và đánh giá cao về sự hợp tác giữa hai bên…”',
  },
];

function ModalProfile(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  return (
    <Modal
      width={'80%'}
      closeIcon={null}
      footer={null}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <div className='relative text-white' style={{ paddingTop: '62.5%' }}>
        <ImageLegacy
          src='/images/introduce-profile/header.png'
          layout='fill'
          alt='header-background'
          className='absolute'
        />
        <div className='flex absolute w-11/12 bottom-2/3 right-1/2 translate-x-1/2 translate-y-1/2'>
          <div className='flex-1'>
            <div className='font-semibold text-xl uppercase pb-2'>
              Hệ thống thủ tục pháp luật
            </div>
            <ul>
              <li className='pb-2'>
                Hệ thống thủ tục pháp luật luôn đi đầu trong cách mạng công nghệ
                quản lý doanh nghiệp và truyền thông doanh nghiệp với chi phí
                thấp hiếm có.
              </li>
              <li className='pb-2'>
                Ứng dụng các nguyên tắc quản lý công việc theo quy trình, kpi
                linh hoạt hệ thống tạo ra ứng dụng quản lý công việc thích hợp
                với hầu hết doanh nghiệp và tuỳ biến mang tính cách mạng.
              </li>
              <li className='pb-2'>
                Với kinh nghiệm 9 năm quản trị giải pháp doanh nghiệp, hệ thống
                là thành quả pháp luật 4.0, hệ thống quản lý tiêu chuẩn.
              </li>
            </ul>
          </div>
          <div className='relative flex-1' style={{ paddingTop: '37.5%' }}>
            <ImageLegacy
              src='/images/introduce-profile/banner-header.png'
              alt='banner-header'
              layout='fill'
              className='absolute'
            />
          </div>
        </div>
      </div>
      <div className='relative' style={{ paddingTop: '62.5%' }}>
        <ImageLegacy
          src='/images/introduce-profile/profile.png'
          layout='fill'
          alt='header-background'
          className='absolute'
        />
        <div className='p-10 absolute w-11/12 bottom-2/3 right-1/2 translate-x-1/2 translate-y-1/2'>
          <div
            className='bg-white rounded-lg p-10'
            style={{ boxShadow: '30px 30px 30px 30px #c3c3c340' }}
          >
            <ul className='grid grid-cols-3 gap-4'>
              {dataProfile.map((item) => (
                <li key={item.title} className='flex gap-2'>
                  <div className='w-10'>
                    <Image src={item.image} alt='icon' width={30} height={30} />
                  </div>
                  <div>
                    <div className='font-semibold text-lg'>{item.title}</div>
                    <div>{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex pt-20'>
            <div
              className='relative flex-1 items-center'
              style={{ paddingTop: '37.5%' }}
            >
              <ImageLegacy
                src='/images/introduce-profile/banner-profile.png'
                alt='banner profile'
                layout='fill'
                className='absolute'
              />
            </div>
            <div className='flex-1 pt-10'>
              <div className='pb-4 text-xl font-semibold'>
                Chúng tôi cung cấp các giải pháp
              </div>
              <div>
                <ul className='grid grid-cols-2 gap-2'>
                  {solutionsArr.map((item) => (
                    <li className='flex gap-1' key={item}>
                      <div style={{ minWidth: 16 }}>
                        <Image
                          src='/images/introduce-profile/check.png'
                          width={16}
                          height={16}
                          alt='check'
                        />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 py-10' style={{ backgroundColor: '#FFEEE1' }}>
        <div className='text-center font-semibold text-xl uppercase pb-10'>
          Founder
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {founderList.slice(0, 3).map((item) => (
            <div
              key={item.name}
              className='text-center bg-white p-4 rounded-lg'
            >
              <Image
                src={item.avatar}
                alt='avatar'
                width={72}
                height={72}
                className='m-auto'
              />
              <div className='font-semibold uppercase'>{item.name}</div>
              <div className='py-2'>{item.position}</div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 w-2/3 gap-4 m-auto pt-4'>
          {founderList.slice(3).map((item) => (
            <div
              key={item.name}
              className='text-center bg-white p-4 rounded-lg'
            >
              <Image
                src={item.avatar}
                alt='avatar'
                width={72}
                height={72}
                className='m-auto'
              />
              <div className='font-semibold text-xl uppercase'>{item.name}</div>
              <div className='py-2'>{item.position}</div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='relative' style={{ paddingTop: '62.5%' }}>
        <ImageLegacy
          src='/images/introduce-profile/customer-think-bg.png'
          layout='fill'
          className='absolute'
          alt='customer think bg'
        />
        <div className='absolute w-11/12 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
          <div className='text-xl font-semibold text-center'>
            Khách hàng nghĩ gì về chúng tôi
          </div>
          <p className='text-center pt-2 pb-10'>
            Đây là những câu chuyện của những khách hàng đã tham gia cùng chúng
            tôi
          </p>
          <Swiper
            loop={true}
            spaceBetween={16}
            slidesPerView={3}
            slidesPerGroup={3}
          >
            {customerThink.map((item, index) => (
              <SwiperSlide key={item.desc}>
                <div className='p-4 border-2 border-red-100 rounded-lg'>
                  <h2 className='dot-2 profile-slider-title'>{item.name}</h2>
                  <Rate disabled defaultValue={5} />
                  <p className='dot-7 profile-slider-desc'>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className='text-xl font-semibold text-center mb-10'>
          Thành tựu đạt được
        </div>
        <div className='flex gap-10 mb-10'>
          <div className='flex-1 text-xs'>
            Hệ thống thủ tục pháp luật đã xây dựng dịch vụ tư vấn pháp luật trên
            nhiều kênh đa dạng như: tư vấn pháp luật trực tiếp tại văn phòng; tư
            vấn pháp luật qua tổng đài; tư vấn qua Email, group tư vấn pháp luật
            và nhiều hình thức tư vấn khác. Đặc biệt Hệ thống thủ tục pháp luật
            đã hỗ trợ hàng nghìn người lao động qua nhiều hoạt động tư vấn pháp
            luật miễn phí. Trải qua hơn 09 năm hoạt động trong lĩnh vực tư vấn
            pháp luật, Hệ thống thủ tục pháp luật ngày một lớn mạnh, chuyên
            nghiệp hơn và xây dựng được đội ngũ Luật sư, Chuyên viên có trình
            độ, chuyên môn cao, luôn hướng đến lợi ích của khách hàng.
          </div>
          <div className='flex-1'>
            <div style={{ width: 260, marginLeft: 'auto' }}>
              <Image
                src='/images/introduce-profile/archive-1.png'
                layout='responsive'
                width={505}
                height={321}
                alt='archive 1'
              />
            </div>
          </div>
        </div>
        <div className='flex gap-10 mb-10'>
          <div className='flex-1'>
            <div style={{ width: 260, marginRight: 'auto' }}>
              <Image
                src='/images/introduce-profile/archive-2.png'
                layout='responsive'
                width={505}
                height={321}
                alt='archive 2'
              />
            </div>
          </div>
          <div className='flex-1 text-xs'>
            Hệ thống thủ tục pháp luật đã xây dựng dịch vụ tư vấn pháp luật trên
            nhiều kênh đa dạng như: tư vấn pháp luật trực tiếp tại văn phòng; tư
            vấn pháp luật qua tổng đài; tư vấn qua Email, group tư vấn pháp luật
            và nhiều hình thức tư vấn khác. Đặc biệt Hệ thống thủ tục pháp luật
            đã hỗ trợ hàng nghìn người lao động qua nhiều hoạt động tư vấn pháp
            luật miễn phí. Trải qua hơn 09 năm hoạt động trong lĩnh vực tư vấn
            pháp luật, Hệ thống thủ tục pháp luật ngày một lớn mạnh, chuyên
            nghiệp hơn và xây dựng được đội ngũ Luật sư, Chuyên viên có trình
            độ, chuyên môn cao, luôn hướng đến lợi ích của khách hàng.
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-semibold text-center mb-10'>
          Sản phẩm 4.0
        </h2>
        <div className='flex mb-10'>
          <div className='flex-1 text-xs'>
            <h2 className='text-xl font-semibold'>Website Thủ tục pháp luật</h2>
            <p>
              Hệ thống thủ tục pháp luật xây dựng các phần mềm hỗ trợ việc quản
              lý nâng cao hiệu quả làm việc tại các doanh nghiệp, đặc biệt là
              các doanh nghiệp Việt Nam. Hướng tới mục tiêu là đối tác tin cậy
              của các công ty, công ty Luật hàng đầu Việt Nam trong việc tạo ra
              giải pháp để phát triển vững chắc, xây dựng hệ thống pháp luật
              4.0, hệ thống quản lý doanh nghiệp trong tương lai với giá thành
              hợp lý nhất, và thời gian triển khai nhanh nhất.
              <br />
              Với xuất phát là một văn phòng có chuyên môn cao trong lĩnh vực tư
              vấn pháp luật, Thủ tục pháp luật thấu hiểu được những vấn đề quản
              trị mà các doanh nghiệp đang gặp phải. Chính vì vậy, Chúng tôi đã
              xây dựng một hệ thống nền tảng quản lý “số” dựa trên những kinh
              nghiệm vận hành và quản lý doanh nghiệp mà chúng tôi đã thực hiện
              để ra mắt với Quý khách hàng phần mềm THỦ TỤC PHÁP LUẬT
            </p>
            <br />
            <Button className='rounded-full button-primary'>
              Trải nghiệm ngay
            </Button>
          </div>
          <div className='flex-1'>
            <div style={{ width: 260, marginLeft: 'auto', marginTop: 20 }}>
              <Image
                src='/images/introduce-profile/4.0.png'
                layout='responsive'
                width={505}
                height={321}
                alt='4.0'
              />
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <div style={{ width: 260, marginRight: 'auto', marginTop: 20 }}>
              <Image
                src='/images/introduce-profile/footer.png'
                layout='responsive'
                width={519}
                height={490}
                alt='iphone 12'
              />
            </div>
          </div>
          <div className='flex-1 text-xs'>
            <h2 className='text-xl font-semibold'>
              Ứng dụng Thủ tục pháp luật
            </h2>
            <p>
              Thủ tục pháp luật là app mà chúng tôi đã nghiên cứu và tạo nên,
              giúp quý khách hàng có thể tra cứu các thủ tục pháp luật một cách
              dễ dàng và theo dõi những tin tức pháp luật mới. Cùng với đó là
              quản lý tiến độ công việc khi quý khách hàng sử dụng kèm theo
              websystem với cùng tên gọi Thủ tục pháp luật.
            </p>
            <br />
            <div className='flex gap-2'>
              <div style={{ width: 100 }}>
                <Image
                  src='/images/introduce/app-store.png'
                  alt='app-store'
                  width={202}
                  height={70}
                />
              </div>
              <div style={{ width: 118 }}>
                <Image
                  src='/images/introduce/ch-play.png'
                  alt='app-store'
                  width={202}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalProfile;
