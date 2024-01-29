import { useMemo } from 'react';
import { OptionsSidebar } from './RankSideBar';
import RankPost from './rank-post';
import { Collapse, CollapseProps } from 'antd';
import { renderCollapseIcon } from '@/src/utils';
import Image from 'next/image';
import RankLawyer, { RankType } from './rank-lawyer';
import RankBusiness from './rank-business';
import RankProcedure from './rank-procedure';
import RankQA from './rank-QA';
import RankStaff from './rank-staff';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <div>
        <div className='flex gap-4'>
          <Image
            src='https://ttpl.vn/files/profile_images/_file6107794f3df1a-avatar.png'
            alt='avatar'
            width={45}
            height={45}
            objectFit='cover'
            className='rounded-full'
          />
          <div>
            <h3 className='font-semibold'>Vũ thắng</h3>
            <p style={{ color: 'var(--description-color)' }}>729 ngày trước</p>
          </div>
        </div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '4',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '5',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '6',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
];

function RankDetail({ activeTab }: { activeTab: number }) {
  const renderContent = useMemo(() => {
    switch (activeTab) {
      case OptionsSidebar.post:
        return <RankPost />;
      case OptionsSidebar.procedure:
        return <RankProcedure />;
      case OptionsSidebar.answer:
        return <RankQA />;
      case OptionsSidebar.lawyer:
        return (
          <div className='min-w-full overflow-auto'>
            <RankLawyer />
          </div>
        );
      case OptionsSidebar.lawCompany:
        return <RankBusiness type={1} />;
      case OptionsSidebar.business:
        return <RankBusiness type={2} />;
      case OptionsSidebar.account:
        return (
          <div className='min-w-full overflow-auto'>
            <RankStaff type={RankType.account} />
          </div>
        );
      default:
        return 'post';
    }
  }, [activeTab]);
  return renderContent;
}

export default RankDetail;
