import { useAppSelector } from '@/src/redux/hooks';
import { sendPostFormDataWithToken } from '@/src/utils';
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Radio,
  Row,
  Space,
  Table,
  TableProps,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import CustomButton from '../../common/CustomButton';

interface DataType {
  key: string;
  name: string;
  position: string;
  phoneNumber: string;
  //   age: number;
  //   address: string;
  //   tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Vị trí',
    key: 'position',
    dataIndex: 'position',
  },
  {
    title: 'Số điện thoại',
    key: 'phoneNumber',
    dataIndex: 'phoneNumber',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    position: 'Giám đốc',
    phoneNumber: '0987654321',
  },
  {
    key: '2',
    name: 'Jim Green',
    position: 'Giám đốc',
    phoneNumber: '0987654321',
  },
  {
    key: '3',
    name: 'Joe Black',
    position: 'Giám đốc',
    phoneNumber: '0987654321',
  },
];

function EmployeeInfor() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileListLink, setFileListLink] = useState<string>('');
  const { token } = useAppSelector((state) => state.authState);
  const [openModalAddContact, setOpenModalAddContact] = useState(false);
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    console.log(fileList);
    setFileList(newFileList);
  };

  const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //     // Auth
    //   },
    // };
    fmData.append('upload', file);
    try {
      const res = await sendPostFormDataWithToken({
        data: { upload: file },
        token: token,
        url: 'https://thutucphapluat.com/api/login/upload_file',
      });

      onSuccess('Ok');
      if (res) {
        setFileListLink((prev) => prev + res.files);
      }

      console.log('server res: ', res);
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      onError({ err });
    }
  };
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <div className='font-semibold p-2 uppercase border-l-4 border-l-[#000]'>
            Thông tin chi tiết khách hàng
          </div>
          <div className='mt-2'>
            <Upload
              accept='*'
              customRequest={uploadFile}
              // action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              listType='picture-card'
              fileList={fileList}
              onChange={onChange}
              onRemove={() => {
                setFileList([]);
              }}
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </div>
          <Form layout='vertical'>
            <Form.Item label='Họ'>
              <Input placeholder='Họ' />
            </Form.Item>
            <Form.Item label='Tên'>
              <Input placeholder='Tên' />
            </Form.Item>
            <Form.Item label='Số điện thoại'>
              <Input placeholder='Số điện thoại' />
            </Form.Item>
            <Form.Item label='Email'>
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item label='Ngày tháng năm sinh'>
              <Input placeholder='Ngày tháng năm sinh' />
            </Form.Item>
            <Form.Item label='Giới tính'>
              <Radio.Group>
                <Radio value='men'> Nam </Radio>
                <Radio value='female'> Nữ </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label='Dân tộc'>
              <Input placeholder='Dân tộc' />
            </Form.Item>
            <Form.Item label='Tôn giáo'>
              <Input placeholder='Tôn giáo' />
            </Form.Item>
            <Form.Item label='Tình trạng hôn nhân'>
              <Radio.Group>
                <Radio value='single'> Độc thân </Radio>
                <Radio value='married'> Đã kết hôn </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label='Quốc tịch'>
              <Input placeholder='Quốc tịch' />
            </Form.Item>
            <Form.Item label='Địa chỉ'>
              <Input placeholder='Địa chỉ' />
            </Form.Item>
            <Form.Item label='Địa chỉ thường chú'>
              <Input placeholder='Địa chỉ thường chú' />
            </Form.Item>
            <Form.Item label='Địa chỉ hiện tại'>
              <Input placeholder='Địa chỉ hiện tại' />
            </Form.Item>
            <Form.Item label='Quận/huyện'>
              <Input placeholder='Quận/huyện' />
            </Form.Item>
            <Form.Item label='Tỉnh/thành phố'>
              <Input placeholder='Tỉnh/thành phố' />
            </Form.Item>
          </Form>
        </Col>
        <Col span={18}>
          <div className='flex justify-between mb-4'>
            <div className='font-semibold p-2 uppercase border-l-4 border-l-[#000]'>
              Giấy tờ tuỳ thân
            </div>
          </div>
          <div className='mb-4'>
            <Row gutter={16}>
              <Col span={12}>
                <div
                  className='rounded-lg p-4'
                  style={{
                    background:
                      'radial-gradient(circle at 36%, #FFEADB, #FFEADB 65%, #FEE6D0 66%, #FEE6D0 75%)',
                  }}
                >
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/images/dashboard/building.png'
                      alt='building'
                      width={30}
                      height={30}
                    />
                    <span>Nơi cấp</span>
                  </div>
                  <div>
                    <span className='text-xs'>So CMND/CCCD</span>
                    <div className='font-semibold text-xl'>031833213213</div>
                  </div>
                  <div>
                    <span className='text-xs'>Ngay cap</span>
                    <div className='font-semibold text-xl'>2024-02-23</div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div
                  className='rounded-lg p-4 text-white'
                  style={{
                    background:
                      'radial-gradient(circle at 36%, #F58837, #F58837 65%, #F99953 66%, #F99953 75%)',
                  }}
                >
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/images/dashboard/credit-card.png'
                      alt='credit-card'
                      width={30}
                      height={30}
                    />
                    <div>Chi nhanh</div>
                  </div>
                  <div>
                    <span className='text-xs'>So tai khoan</span>
                    <div className='font-semibold text-xl'>031833213213</div>
                  </div>
                  <div>
                    <span className='text-xs'>Chi nhanh</span>
                    <div className='font-semibold text-xl'>
                      Sam son thanh hoa
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='flex justify-between mb-4'>
            <div className='font-semibold p-2 uppercase border-l-4 border-l-[#000]'>
              Thông tin về công việc
            </div>
          </div>
          <div>
            <ConfigProvider
              theme={{
                components: {
                  Table: {
                    headerBg: 'var(--primary-color)',
                    headerColor: '#fff',
                  },
                },
              }}
            >
              <Table columns={columns} dataSource={data} />
            </ConfigProvider>
          </div>
          <div className='flex justify-between mb-4'>
            <div className='font-semibold p-2 uppercase border-l-4 border-l-[#000]'>
              Thông tin account
            </div>
          </div>
          <div>
            <ConfigProvider
              theme={{
                components: {
                  Table: {
                    headerBg: 'var(--primary-color)',
                    headerColor: '#fff',
                  },
                },
              }}
            >
              <Table columns={columns} dataSource={data} />
            </ConfigProvider>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeInfor;
