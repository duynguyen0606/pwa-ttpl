import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './premiumStyle.scss';
import { useMobileClient } from '@/src/utils/hook';

function BasicContent() {
  const isMobileClient = useMobileClient();

  return (
    <div
      className={`${
        isMobileClient ? 'text-sm px-1 mobile-client' : 'mt-8 mb-16'
      }`}
    >
      <div
        className={`${
          isMobileClient
            ? 'text-[--secondary-color] font-bold mb-4 leading-6'
            : 'text-center font-semibold mb-0.5 text-lg'
        }`}
      >
        Thành viên Basic được nhận các quyền lợi của thành viên Free và thêm
      </div>
      {!isMobileClient && (
        <div className='text-center mb-2'>Có thể tra cứu:</div>
      )}
      <div className='mt-4 flex flex-wrap'>
        <ul
          className={`list-disc
                    ${isMobileClient ? '' : 'grid grid-cols-2 gap-3'}`}
        >
          <li>Được tặng 250 điểm là nhân viên</li>
          <li>Hiển thị bảng điều khiển : Vào làm, và Ra về</li>
          <li>
            Hiển thị KPI, hiện % của KPI, &nbsp;hiện phiếu lương, hiển thị nghỉ
            phép
          </li>
          <li>
            Hiển thị thủ tục hành chính : Tab thủ tục, có thể xem thực tế thực
            hiện, xem lược đồ, &nbsp;hiển thị tab lĩnh vực, tab đối tượng thực
            hiện, cơ cấu tổ chức, xem chi tiết cơ cấu tổ chức
          </li>
          <li>
            Hiện khách hàng, hiển thị Chăm sóc khách hàng, hiện thị sự kiện
          </li>
          <li>Hiển thị nhân viên, có thể thêm và sửa nhân viên</li>
          <li>Hiển thị tài liệu, hiển thị quy trình</li>
          <li>Hiển thị ngày công theo tháng hoặc theo tuần</li>
          <li>
            Cài đặt quyền cho quy trình : có thể tạo quy trình, hiển thị khách
            hàng. Hiển thị lịch sử hoạt động, thông tin tiến độ
          </li>
          <li>
            Hiển thị tài liệu, hiển thị bình luận, hiển thị khách hàng nhận xét
          </li>
          <li>
            Hiển thị các bước thực hiện, thêm các bước thực hiện, tạo nhiệm vụ,
            có thể comment trên nhiệm vụ
          </li>
          <li>
            Cài đặt quyền cho tài chính : hiển thị tài chính , hiển thị hoá đơn,
            xem chi tiết hoá đơn, có thể thêm mới hoá đơn, tải xuống hoá đơn, có
            thể thêm thanh toán, hiển thị chi phí, hiển thị báo giá
          </li>
          <li>
            Cài đặt quyền cho Chăm sóc khách hàng : hiển thị chăm sóc khách
            hàng, cho phép thêm yêu cầu hỗ trợ khách hàng, cho phép thay đổi
            trạng thái yêu cầu hỗ trợ khách hàng, và xem chi tiết chăm sóc khách
            hàng
          </li>
          <li>
            Cài đặt quyền cho ngày công : hiện ngày công, hiển thị hằng ngày
          </li>
          <li>
            Cài đặt cho quyền nghỉ phép : hiển thị theo chờ phê duyệt , hiển thị
            tất cả các ngày nghỉ phép
          </li>
          <li>Cài đặt quyền cho thông báo : xem chi tiết thông báo</li>
          <li>Hiển thị cho khảo sát : thêm khảo sát</li>
          <li>
            Có thể truy cập vé hỗ trợ khách hàng : OK, tất cả các loại vé hỗ trợ
            khách hàng, thêm vé hỗ trợ, sửa vé hỗ trợ, xoá vé hỗ trợ
          </li>
        </ul>
      </div>
      <div className='text-center mt-4'>
        Mua gói chỉ có tác dụng với tài khoản công ty luật , doanh nghiệp
      </div>
    </div>
  );
}

export default BasicContent;
