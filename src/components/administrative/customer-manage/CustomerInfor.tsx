import { useAppSelector } from '@/src/redux/hooks';
import { sendPostFormDataWithToken } from '@/src/utils';
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
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
import ModalAddContact from './ModalAddContact';

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
    title: 'Tên',
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

function CustomerInfor() {
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
            <Form.Item label='Tên công ty'>
              <Input placeholder='Tên công ty' />
            </Form.Item>
            <Form.Item label='Email'>
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item label='Địa chỉ'>
              <Input placeholder='Địa chỉ' />
            </Form.Item>
            <Form.Item label='Thành phố'>
              <Input placeholder='Thành phố' />
            </Form.Item>
            <Form.Item label='Tiểu bang'>
              <Input placeholder='Tiểu bang' />
            </Form.Item>
            <Form.Item label='Mã vùng'>
              <Input placeholder='Mã vùng' />
            </Form.Item>
            <Form.Item label='Đất nước'>
              <Input placeholder='Đất nước' />
            </Form.Item>
            <Form.Item label='Số điện thoại'>
              <Input placeholder='Số điện thoại' />
            </Form.Item>
            <Form.Item label='Website'>
              <Input placeholder='Website' />
            </Form.Item>
            <Form.Item label='VAT'>
              <Input placeholder='VAT' />
            </Form.Item>
          </Form>
        </Col>
        <Col span={18}>
          <div className='flex justify-between mb-4'>
            <div className='font-semibold p-2 uppercase border-l-4 border-l-[#000]'>
              Tất cả thông tin liên lạc
            </div>
            <div className='flex gap-2'>
              <Button>Gửi lời mời</Button>
              <Button
                icon={
                  <Image
                    src='/images/dashboard/plus.png'
                    width={20}
                    alt='plus'
                    height={20}
                  />
                }
                onClick={() => setOpenModalAddContact(true)}
                className='button-primary button-flex'
              >
                Thêm liên hệ mới
              </Button>
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
      <ModalAddContact
        onCancel={() => setOpenModalAddContact(false)}
        open={openModalAddContact}
      />
    </div>
  );
}

export default CustomerInfor;
