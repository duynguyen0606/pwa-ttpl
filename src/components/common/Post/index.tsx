import { Button } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import './style.scss';

function Post() {
  return (
    <div id='post' className='p-4 flex flex-col gap-4 bg-white rounded-lg'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div style={{ width: 40 }}>
            <Image
              src='https://drive.google.com/uc?id=1vLPCXwk1Fo3LkXI9N2ejCz2J0abYImZB'
              alt='avatar'
              width={40}
              height={40}
              objectFit='cover'
              className='rounded-full'
            />
          </div>
          <div>
            <h4>Công ty luật legal zone</h4>
            <p className='text-neutral-300'>12 ngày trước</p>
          </div>
        </div>
        <Button>Theo dõi</Button>
      </div>
      <ImageLegacy
        src='https://drive.google.com/uc?id=1MbkooiKtjanSpJI6uWmz9p_O1WOLFTBx'
        alt='body-image'
        layout='responsive'
        width={412}
        height={232}
      />
      <div className='pb-4 border-b-[1px] border-solid border-slate-100'>
        <h4 className='font-semibold'>Quy trình bán hàng</h4>
        <p
          className='dot-4 post-desc'
          dangerouslySetInnerHTML={{
            __html: `
          Ý nghĩa của Quy trình bán hàng Bạn có muốn tăng doanh thu và khách hàng trung thành cho doanh nghiệp của bạn? Bạn có muốn mọi nhân viên bán hàng của bạn đều làm việc theo một phương pháp thống nhất và hiệu quả? Nếu câu trả lời là có, bạn cần có một quy trình bán hàng rõ ràng và đơn giản.Khái niệm Quy trình bán hàngQuy trình bán hàng là gì và tại sao nó quan trọng? Quy trình bán hàng là một loạt các bước và phương pháp mà một công ty sử dụng để liên hệ và thuyết phục những khách hàng tiềm năng. Quy trình bán hàng giúp bạn kiểm soát quá trình chuyển đổi khách hàng từ lúc tìm kiếm sản phẩm đến lúc mua hàng.Lợi ích của việc thiết lập Quy trình bán hàngQuy trình bán hàng cũng giúp bạn dự đoán được doanh thu và đánh giá hiệu suất của nhân viên bán hàng. Một quy trình bán hàng tốt sẽ giúp bạn loại bỏ những khách hàng không phù hợp và tập trung vào những khách hàng có tiềm năng cao.Nguồn cảm hứng từ Quy trình bán hàngNếu bạn có thể thực hiện quy trình bán hàng một cách nhất quán và chuyên nghiệp, bạn sẽ tăng khả năng giữ chân khách hàng và tạo ra sự trung thành.Nghịch lý về Quy trình bán hàngQuá nhiều quy trình sẽ giết chết nhóm bán hàng, nhưng nhóm bán hàng sẽ chết nếu không có quy trình. Tại sao quy trình lại giết chết nhóm?Quy trình và Năng lực của Nhóm bán hàngVới nhóm có năng lực trên thị trường, có kinh nghiệm và được cho hoạt động độc lập theo hướng cộng tác viên thì quy trình sẽ thúc đẩy kết quả và giúp ích cho quản trị nhóm.Thách thức của Môi trường biến động và Quy trìnhTrong một môi trường biến động, quy trình chỉ có tác dụng trong một thời gian, sau đó cần phá bỏ và xây dựng lại. Nỗ lực xây dựng quy trình ban đầu có thể là lãng phí.Quy trình bán hàng hiệu quả là như thế nào?Những nhân viên làm việc kém hiệu quả có thể núp sau lý do "cần có quy trình hiệu quả hơn," nhưng việc thiết lập quy trình đòi hỏi sự chi tiết và đánh giá chất lượng.Các yếu tố quan trọng của Quy trình bán hàngCác Giai Đoạn Rõ Ràng: Mọi người trong nhóm cần biết và tuân thủ việc bán hàng theo từng giai đoạn. Đây sẽ là kim chỉ nam chi phối những tương tác cụ thể với khách hàng tiềm năng. Các giai đoạn có thể điều chỉnh tùy thuộc vào sản phẩm, tính chất và quy mô của công ty.Quản Lý Quan Hệ Khách Hàng qua CRM: Sử dụng CRM để theo dõi các thỏa thuận, xác định giai đoạn, và phân tích cuộc hội thoại. Đặt ra những yêu cầu cụ thể cần theo dõi ở từng giai đoạn, như việc khách hàng đang đánh giá danh sách bất động sản phù hợp với mức giá 1 tỷ, thuộc giai đoạn tư vấn sản phẩm tiềm năng.Danh Sách Hướng Dẫn Công Nghệ (Tech Stack): Chọn các công cụ hỗ trợ nhóm bán hàng một cách hiệu quả và nâng cao năng suất, bao gồm thiết kế, seeding, và các công cụ hỗ trợ khác. Hướng dẫn cần phải chi tiết, mô tả rõ sự phối hợp và các giai đoạn sử dụng công nghệ.Data Câu Hỏi: Xác định những câu hỏi quan trọng như: Khách hàng muốn mua sản phẩm gì? Họ sẽ chi trả bao nhiêu tiền? Có chính sách giảm giá không? Lợi ích của khách hàng là gì? Hạn mức giảm giá? Đặc trưng của sản phẩm? Các câu hỏi này cần được lập trước và yêu cầu nhân sự bán hàng thường xuyên cập nhật để duy trì chất lượng câu trả lời.Thông Điệp Chung: Giao phó từng thông điệp để truyền tải tới khách hàng trong từng giai đoạn và tình huống. Điều này giúp đảm bảo rằng thông điệp được truyền đạt đồng nhất và mạch lạc.Lời Thoại Trình Bày: Sử dụng danh sách lời thoại demo liên quan đến tính cách và phân loại khách hàng để tối ưu hóa tương tác và hiểu biết từ phía khách hàng.&lt;/&gt;&lt;&gt;&nbsp;&lt;/&gt;&lt;&gt;&nbsp;&lt;/&gt;`,
          }}
        />
        <div className='flex float-right gap-2 text-neutral-300 mt-2'>
          <p>15 lượt xem</p>
          <p>0 lượt thích</p>
        </div>
      </div>
      <div className='post-actions flex justify-between items-center'>
        <Button
          icon={
            <Image
              src='/images/icons/like.png'
              alt='like icon'
              width={18}
              height={18}
            />
          }
        >
          Like
        </Button>
        <Button
          icon={
            <Image
              src='/images/icons/dislike.png'
              alt='like icon'
              width={18}
              height={18}
            />
          }
        >
          Dislike
        </Button>
        <Button
          icon={
            <Image
              src='/images/icons/comment.png'
              alt='like icon'
              width={18}
              height={18}
            />
          }
        >
          Comment
        </Button>
        <Button
          icon={
            <Image
              src='/images/icons/share.png'
              alt='like icon'
              width={18}
              height={18}
            />
          }
        >
          Share
        </Button>
      </div>
    </div>
  );
}

export default Post;
