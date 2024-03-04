'use client';

import { Button, ConfigProvider, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const dataNavs = [
  {
    label: 'Nội dung',
    key: 1,
  },
  {
    label: 'Thực tế thực hiện',
    key: 2,
  },
  {
    label: 'Lược đồ',
    key: 3,
  },
  {
    label: 'Bình luận',
    key: 4,
  },
];

const dataChildNavs = [
  {
    name: 'Nội dung',
    key: 1,
  },
  {
    name: 'Trình tự thực hiện',
    key: 2,
  },
];

function ProcedureSlugContent({ data }: { data: any }) {
  const [tabChildActive, setTabChildActive] = useState(1);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const [isMobileClient, setIsMobileClient] = useState(false);

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);
  return (
    <div>
      <div className='flex m-4'>
        {dataChildNavs.map((item) => (
          <div
            className='font-semibold text-lg py-2 px-4 flex-1 text-center bg-slate-100 cursor-pointer'
            style={{
              backgroundColor:
                tabChildActive === item.key
                  ? 'var(--primary-color)'
                  : '#F2F2F2',
              color: tabChildActive === item.key ? '#fff' : '#000',
            }}
            onClick={() => setTabChildActive(item.key)}
            key={item.key}
          >
            {item.name}
          </div>
        ))}
      </div>

      {tabChildActive === 1 ? (
        <>
          {data && (
            <>
              <div className={!isMobileClient ? 'p-4' : ''}>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex  py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Tên thủ tục</div>
                  <span>{data?.title}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Mã thủ tục</div>
                  <span>{data?.number}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Số quyết định</div>
                  <span>{data?.so_quyet_dinh}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Loại thủ tục</div>
                  <span>{data?.loai_thu_tuc}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Lĩnh vực thực hiện
                  </div>
                  <span>{data.name_area}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Đối tượng thực hiện
                  </div>
                  <span>{data.object_implementation}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Kết quả thực hiện
                  </div>
                  <span>{data.result}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Thành phần hồ sơ</div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.profile_composition,
                    }}
                  />
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Yêu cầu/Điều kiện
                  </div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.conditions_required,
                    }}
                  />
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Biểu mẫu</div>
                  <span></span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Thời gian giải quyết
                  </div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.settlement_term,
                    }}
                  />
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Biểu mẫu</div>
                  <span>{data.postal_services}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Lệ phí</div>
                  <span>{data.price}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Cơ quan có thẩm quyền
                  </div>
                  <span>{data.co_quan_co_tham_quyen}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Địa chỉ tiếp nhận hồ sơ
                  </div>
                  <span>{data.dia_chi_tiep_nhan_hs}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>
                    Cơ quan được uỷ quyền
                  </div>
                  <span></span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Cơ quan phối hợp</div>
                  <span></span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Từ khoá</div>
                  <span>{data.tu_khoa}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Mô tả</div>
                  <span>{data.description}</span>
                </div>
                <div
                  className={`${
                    isMobileClient ? 'flex-col' : 'items-center'
                  } flex py-2 gap-2 border-b border-slate-300`}
                >
                  <div className='font-semibold min-w-40'>Căn cứ pháp lý</div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.legal_grounds,
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <div
          className='p-4'
          dangerouslySetInnerHTML={{
            __html: data.the_order_execution,
          }}
        />
      )}
      <div
        className={`${
          isMobileClient ? 'flex-col' : 'items-center'
        } flex py-2 gap-2 border-b border-slate-300 p-4 m-4`}
      >
        <div className='font-semibold min-w-40'>Tác giả</div>
        <span
          className='font-semibold'
          style={{ color: 'var(--primary-color)' }}
        >
          Công ty Luật legalzone
        </span>
      </div>
    </div>
  );
}

export default ProcedureSlugContent;
