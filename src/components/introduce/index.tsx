'use client';
import { Button, ConfigProvider, Layout, Menu, Space } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import ImageLagacy from 'next/legacy/image';
import { useEffect, useState } from 'react';
import BannerConnect from './BannerConnect';
import BannerContact from './BannerContact';
import BannerRegister from './BannerRegister';
import IntroduceFooter from './IntroduceFooter';
import Procedure from './Procedure';
import './style.scss';
import ModalProfile from './ModalProfile';
import ModalMarketing from './ModalMarketing';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { useMobileClient } from '@/src/utils/hook';

const navArr = [
  {
    name: 'Thủ tục pháp luật',
    key: 'thu-tuc-phap-luat',
  },
  {
    name: 'Quản lý công việc',
    key: 'quan-ly-cong-viec',
  },
  {
    name: 'Tải ứng dụng',
    key: 'tai-ung-dung',
  },
  {
    name: 'Liên hệ',
    key: 'lien-he',
  },
  {
    name: 'Phản hồi',
    key: 'phan-hoi',
  },
  {
    name: 'Đánh giá',
    key: 'danh-gia',
  },
  {
    name: 'Đăng ký',
    key: 'dang-ky',
  },
];

const dataProcedure = [
  {
    title: 'Hỏi đáp pháp luật',
    desc: 'Với đội ngũ Luật sư và chuyên viên pháp lý giàu kinh nghiệm, Legalzone sẽ hỗ trợ bạn tối đa giải đáp các vấn đề pháp lý mà bạn quan tâm. ',
    icon: '/images/introduce/procedure-1.png',
  },
  {
    title: 'Thủ tục pháp luật',
    desc: 'Với hệ thông thông tin báo quát về các thủ tục pháp luật, chúng tôi cung cấp các quy trình thủ tục và các thông tin thực tế thực hiện của từng thủ tục.  ',
    icon: '/images/introduce/procedure-2.png',
  },
  {
    title: 'Bài viết pháp luật',
    desc: 'Theo dõi các bài viết pháp luật, cập nhật các quy định mới nhất hiện nay',
    icon: '/images/introduce/procedure-3.png',
  },
];

const dataManageJobs = [
  {
    title: 'Bảng điều khiển',
    desc: 'Bảng điều khiển thể hiện khái quát nội dung về nội dung Quản lý công việc',
    icon: '/images/introduce/Icons-1.png',
  },
  {
    title: 'Quản lý nhân viên',
    desc: 'Bao gồm các thông tin của nhân viên trong công ty',
    icon: '/images/introduce/Icons-2.png',
  },
  {
    title: 'Quy trình hoạt động',
    desc: 'Các công việc của doanh nghiệp và cá nhân được quản lý trực tuyến một cách linh hoạt và chuyên nghiệp thông qua phần mềm quản lý công việc',
    icon: '/images/introduce/Icons-3.png',
  },
  {
    title: 'Quản lý khách hàng',
    desc: 'Hỗ trợ lưu trữ thông tin khách hàng nhanh chóng',
    icon: '/images/introduce/Icons-4.png',
  },
  {
    title: 'Chăm sóc khách hàng',
    desc: 'Tiếp nhận các thông tin phản hồi từ khách hàng và giao cho nhân viên xử lý',
    icon: '/images/introduce/Icons-5.png',
  },
  {
    title: 'Tài chính',
    desc: 'Quản lý tất cả những hóa đơn và chi phí của công ty, các bản báo giá gửi đến khách hàng',
    icon: '/images/introduce/Icons-6.png',
  },
  {
    title: 'Thông báo',
    desc: 'Thông báo tới nội bộ nhân viên trong công ty mà không cần niêm yết bằng văn bản.',
    icon: '/images/introduce/Icons-7.png',
  },
  {
    title: 'Ngày công',
    desc: 'Tra cứu ngày công nhân viên theo từng tháng, từng năm nhanh nhất',
    icon: '/images/introduce/Icons-8.png',
  },
  {
    title: 'Nghỉ phép',
    desc: 'Xin nghỉ phép, xin đến muộn mà không cần thực hiện nhiều thủ tục và giấy tờ phức tạp',
    icon: '/images/introduce/Icons-9.png',
  },
  {
    title: 'Khảo sát',
    desc: 'Thực hiện các khảo sát lấy ý kiến nhân viên mà không cần phải tổ chức cuộc họp, phát hành phiếu bầu,….',
    icon: '/images/introduce/Icons-10.png',
  },
  {
    title: 'Cài đặt',
    desc: 'Cài đặt và thay đổi tất những thông tin về công ty, nhân viên và các chức năng của phần mềm (dành riêng cho tài khoản admin)',
    icon: '/images/introduce/Icons-11.png',
  },
];

const items = navArr.map((item, index) => ({
  key: item.key,
  label: item.name.toUpperCase(),
}));

function IntroducePage() {
  const router = useRouter();
  // const selectedTab = router.
  const [isFixed, setIsFixed] = useState(false);
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalMarketing, setShowModalMarketing] = useState(false);
  const isMobileClient = useMobileClient();
  // const [selectedKeys, setSelectedKeys] = useState(navArr.filter(item => item.key === ))

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setIsFixed(currentScrollPosition > 0);
    // if (currentScrollPosition > 20) {
    //   setIsFixed(true);
    // } else if (currentScrollPosition === 0) {
    //   setIsFixed(false);
    // }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <Layout id='introduce-page'>
      <div
        id='introduce-banner'
        className='relative'
        style={{ paddingTop: `${isMobileClient ? '120%' : '67.5%'}` }}
      >
        <Header
          style={{
            top: 0,
            zIndex: 20,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: isFixed ? 'var(--primary-color)' : 'transparent',
          }}
          className={`${isFixed ? 'fixed' : 'absolute'}`}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: 'var(--primary-color)',
              },
              components: {
                Menu: {
                  horizontalItemSelectedColor: '#fff',
                  itemHoverColor: '#fff',
                  itemColor: '#fff',
                },
              },
            }}
          >
            <Menu
              mode='horizontal'
              // selectable={}
              items={items}
              onClick={(item) => router.push(`#${item.key}`)}
              style={{
                flex: 1,
                minWidth: 0,
                backgroundColor: 'transparent',
                borderBottom: 'unset',
                color: '#fff',
              }}
            />
          </ConfigProvider>
        </Header>
        <div className='banner-content'>
          <div
            className={`${
              !isMobileClient ? 'text-4xl' : 'text-2xl'
            } uppercase mb-2`}
          >
            Hệ thống thủ tục pháp luật
          </div>
          <ul>
            <li>
              Hệ thống thủ tục pháp luật là hệ thống Hỗ trợ pháp lý bao gồm:
            </li>
            <li>Thông tin thủ tục pháp luật thường xuyên được cập nhật.</li>
            <li>
              Mạng xã hội pháp lý, các cổng thông tin truyền thông nội bộ và
              công chúng nói chung của doanh nghiệp ( mạng xã hội).
            </li>
            <li>Bài viết pháp lý đã qua kiểm duyệt.</li>
            <li>Hệ thống phần mềm quản lý doanh nghiệp.</li>
            <li>Hệ thống hỗ trợ doanh nghiệp online của Luật sư cả nước.</li>
          </ul>
          <div className='banner-actions'>
            <Space size='large' direction='vertical'>
              <Button onClick={() => setShowModalProfile(true)} size='large'>
                Profile
              </Button>
              <Button onClick={() => setShowModalMarketing(true)} size='large'>
                Marketing doanh nghiệp
              </Button>
            </Space>
          </div>
        </div>
        <ImageLagacy
          src='/images/introduce/banner.png'
          layout='fill'
          className='absolute'
        />
      </div>
      <Content
        style={{
          maxWidth: 1200,
          margin: isMobileClient ? '20px 20px 0 20px' : '100px 100px 0 100px',
        }}
      >
        <Procedure
          id='thu-tuc-phap-luat'
          title='Thủ tục pháp luật'
          description='Thủ tục pháp luật là app mà chúng tôi đã nghiên cứu và tạo nên, giúp quý khách hàng có thể tra cứu các thủ tục pháp luật một cách dễ dàng và theo dõi những tin tức pháp luật mới. Cùng với đó là quản lý tiến độ công việc khi quý khách hàng sử dụng kèm theo websystem với cùng tên gọi Thủ tục pháp luật.'
          dataNav={dataProcedure}
          bannerLink='/images/introduce/procedure.png'
        />
        <Procedure
          id='quan-ly-cong-viec'
          title='Quản lý công việc'
          description='Legalzone xây dựng các phần mềm hỗ trợ việc quản lý nâng cao hiệu quả làm việc tại các công ty, đặc biệt là các công ty Luật, hướng tới mục tiêu là đối tác tin cậy của các công ty, công ty Luật hàng đầu Việt Nam trong việc tạo ra giải pháp để phát triển vững chắc trong tương lai với giá thành hợp lý nhất, và thời gian triển khai nhanh nhất.
          Với xuất phát là một văn phòng có chuyên môn cao trong lĩnh vực tư vấn pháp luật, Legalzone thấu hiểu được những vấn đề quản trị mà các doanh nghiệp đang gặp phải. Chính vì vậy, Chúng tôi đã xây dựng một hệ thống nền tảng quản lý “số” dựa trên những kinh nghiệm vận hành và quản lý doanh nghiệp mà chúng tôi đã thực hiện để ra mắt với Quý khách hàng PHẦN MỀM QUẢN LÝ CÔNG VIỆC CỦA  LEGALZONE'
          dataNav={dataManageJobs}
          bannerLink='/images/introduce/manage-jobs.png'
        />
      </Content>
      <BannerConnect />
      <Content
        style={{
          maxWidth: 1200,
          margin: isMobileClient ? '20px 20px 0 20px' : '100px 100px 0 100px',
        }}
      >
        <BannerContact
          id='lien-he'
          title='Liên hệ'
          btnText='Liên hệ ngay'
          description='Công ty Luật TNHH Legalzone cam kết sẽ cung cấp các dịch vụ pháp lý chất lượng cao, mang đến những tư vấn pháp lý hữu ích và giải pháp sáng tạo nhất cho Quý khách, nhằm giúp giải quyết hiệu quả nhất những vướng mắc và tháo gỡ những khó khăn của Quý khách.'
          image='/images/introduce/image-23.png'
          direction='text-right'
        />
        <BannerContact
          id='phan-hoi'
          title='Phản hồi'
          btnText='Phản hồi ngay'
          description='Legalzone luôn lắng nghe và thấu hiểu những phản hồi của bạn. Hãy cho chúng tôi biết thêm về trải nghiệm của bạn khi sử dụng dịch vụ của công ty chúng tôi. '
          image='/images/introduce/image-24.png'
          direction='text-left'
        />
        <BannerContact
          id='danh-gia'
          title='Đánh giá'
          btnText='Đánh giá ngay'
          description='Nếu thấy phần mềm hữu ích, hãy đánh giá chúng tôi 5 sao'
          image='/images/introduce/image-25.png'
          direction='text-right'
        />
      </Content>
      <BannerRegister />
      <IntroduceFooter />
      <ModalProfile
        open={showModalProfile}
        onCancel={() => setShowModalProfile(false)}
      />
      <ModalMarketing
        open={showModalMarketing}
        onCancel={() => setShowModalMarketing(false)}
      />
    </Layout>
  );
}

export default IntroducePage;
