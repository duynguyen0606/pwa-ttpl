import { useMobileClient } from '@/src/utils/hook';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function FreeContent() {
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
        Xem toàn bộ thủ tục hành chính Online
      </div>
      {!isMobileClient && (
        <div className='text-center mb-2'>Có thể tra cứu:</div>
      )}
      <div className='mt-4 flex flex-wrap justify-center'>
        <ul
          className={`list-disc
                    ${isMobileClient ? '' : 'grid grid-cols-2 gap-3'}`}
        >
          <li>Được tặng 200 điểm là nhân viên</li>
          <li>Hiển thị cho bảng điều khiển</li>
          <li>
            Hiển thị thủ tục hành chính: Tab thủ tục, xem các nội dung thủ tục
          </li>
          <li>Hiện khách hàng</li>
          <li>Hiển thị nhân viên</li>
          <li>Hiển thị KPI</li>
          <li>Hiển thị tài chính</li>
          <li>Hiển thị chăm sóc khách hàng</li>
          <li>Hiển thị ngày công</li>
          <li>Hiển thị nghỉ phép</li>
          <li>Hiển thị cho thông báo, và khảo sát</li>
          <li>
            Có thể truy cập vé hỗ trợ khách hàng : hỗ trợ cơ bản và nâng cao
          </li>
        </ul>
      </div>
      {!isMobileClient && (
        <div className='text-center mt-4'>
          Mua gói chỉ có tác dụng với tài khoản công ty luật , doanh nghiệp
        </div>
      )}
    </div>
  );
}

export default FreeContent;
