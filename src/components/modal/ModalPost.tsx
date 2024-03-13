import {
  Avatar,
  Input,
  Modal,
  ModalProps,
  Select,
  Switch,
  Typography,
  Upload,
} from 'antd';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps, GetProp } from 'antd';
import { useAppSelector } from '@/src/redux/hooks';
import axios from 'axios';
import Image from 'next/image';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

function ModalPost(props: ModalProps) {
  const { open, onCancel, onOk } = props;
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { user } = useAppSelector((state) => state.authState);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [imageURL, setImageURL] = useState('');
  const CustomEditor = dynamic(
    () => import('../../components/common/customer-editor'),
    { ssr: false }
  );

  const getBase64 = (file: any): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    console.log(file);

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };
  const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };
    fmData.append('upload', file);
    try {
      const res = await axios.post(
        'https://thutucphapluat.com/api/login/upload_file',
        fmData,
        config
      );

      onSuccess('Ok');
      setImageURL(res.data.link_image);
      console.log('server res: ', res);
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      onError({ err });
    }
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <Modal title='Đăng bài viết' open={open} onCancel={onCancel}>
      <div className='flex justify-between my-4'>
        <div className='flex gap-1 items-center gap-2'>
          <Avatar size='large' src={user?.image} />
          <div>duynguyen</div>
        </div>
        <div className='flex gap-2'>
          <Switch defaultChecked />
          <span>Dành cho công ty</span>
        </div>
      </div>
      <div className='my-4'>
        <Typography.Title level={5}>Nội dung bài viết</Typography.Title>
        <CustomEditor />
      </div>
      <div className='my-4'>
        <Typography.Title level={5}>Tiêu đề</Typography.Title>
        <Input placeholder='Tiêu đề' />
      </div>
      <div className='my-4'>
        <Typography.Title level={5}>Chọn danh mục</Typography.Title>
        <Select
          labelInValue
          defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
          style={{ width: '100%' }}
          options={[
            {
              value: 'jack',
              label: 'Jack (100)',
            },
            {
              value: 'lucy',
              label: 'Lucy (101)',
            },
          ]}
        />
      </div>
      <div className='my-4'>
        <Typography.Title level={5}>Thêm vào bài viết</Typography.Title>
        <div>
          <Upload
            customRequest={uploadFile}
            // action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
            listType='picture-card'
            fileList={fileList}
            maxCount={5}
            onChange={handleChange}
            onPreview={handlePreview}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={() => setPreviewOpen(false)}
          >
            <Image alt='image' width={400} height={400} src={previewImage} />
          </Modal>
        </div>
      </div>
    </Modal>
  );
}

export default ModalPost;
