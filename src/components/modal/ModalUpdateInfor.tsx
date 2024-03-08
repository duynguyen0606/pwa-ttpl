import { useAppSelector } from '@/src/redux/hooks';
import { Col, Form, Input, Modal, ModalProps, Row, Typography } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type FieldType = {
  username?: string;
  birthday?: string;
  email?: string;
  city?: string;
  district: string;
  address: string;
  idNumber: number;
  passportNumber: number;
};

function ModalUpdateInfor(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  const { user } = useAppSelector((state) => state.authState);
  const fileInputBGRef = useRef() as MutableRefObject<HTMLInputElement>;
  const fileInputAvatarRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [previewBGImage, setPreviewBGImage] = useState('');
  const [previewAvatar, setPreviewAvatar] = useState('');

  useEffect(() => {
    return () => {
      previewBGImage && URL.revokeObjectURL(previewBGImage);
      fileInputAvatarRef && URL.revokeObjectURL(previewAvatar);
    };
  }, [previewBGImage, fileInputAvatarRef]);

  const handleChangeBG = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPreviewBGImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPreviewAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title='Chỉnh sửa thông tin'
      width={'80%'}
    >
      <div className='relative mb-16'>
        <ImageLegacy
          src={
            previewBGImage ||
            'https://ttpl.vn/assets/images/myprofile/anh-bia.png'
          }
          layout='responsive'
          width={900}
          height={280}
        />
        <div className='p-2 rounded-full absolute bottom-4 right-4 bg-slate-400 cursor-pointer'>
          <Image
            src='/images/icons/white-camera.png'
            alt='camera'
            width={25}
            height={25}
            onClick={() => {
              // if (fileInputRef?.current) {
              fileInputBGRef?.current.click();
              // }
            }}
          />
          <input
            onChange={handleChangeBG}
            multiple={false}
            ref={fileInputBGRef}
            type='file'
            hidden
          />
        </div>
        <div className='w-40 h-40 bg-white rounded-full absolute text-center right-1/2 bottom-0 border-4 border-white translate-x-1/2 translate-y-1/4'>
          <ImageLegacy
            src={
              previewAvatar ||
              'https://drive.google.com/thumbnail?id=1elps2eDFZtgScBOX8Bd3ypZtUJ2Pfn4R&sz=s1000'
            }
            layout='responsive'
            width={150}
            height={150}
            className='rounded-full'
          />
          <div className='p-2 rounded-full absolute bottom-2 right-2 bg-slate-400 cursor-pointer'>
            <Image
              src='/images/icons/white-camera.png'
              alt='camera'
              width={25}
              height={25}
              onClick={() => {
                // if (fileInputRef?.current) {
                fileInputAvatarRef?.current.click();
                // }
              }}
            />
            <input
              onChange={handleChangeAvatar}
              multiple={false}
              ref={fileInputAvatarRef}
              type='file'
              hidden
            />
          </div>
        </div>
      </div>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        name='basic'
        labelAlign='left'
        labelWrap
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Row gutter={16}>
          <Col span={12}>
            <div className='bg-slate-200 p-4 mb-4 rounded-lg'>
              <Form.Item<FieldType> label='Họ và tên' name='username'>
                <Input defaultValue={user?.full_name} />
              </Form.Item>
              <Form.Item<FieldType> label='Ngày sinh' name='birthday'>
                <Input />
              </Form.Item>
              <Form.Item<FieldType> label='Email' name='email'>
                <Input defaultValue={user?.email} />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div className='bg-slate-200 p-4 mb-4 rounded-lg'>
              <Form.Item<FieldType> label='Tỉnh/Thành phố' name='city'>
                <Input />
              </Form.Item>
              <Form.Item<FieldType> label='Quận/Huyện' name='district'>
                <Input />
              </Form.Item>
              <Form.Item<FieldType> label='Địa chỉ' name='address'>
                <Input />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div className='bg-slate-200 p-4 mb-4 rounded-lg'>
              <Form.Item<FieldType> label='số CMND' name='idNumber'>
                <Input />
              </Form.Item>
              <Form.Item<FieldType> label='Ngày cấp' name='address'>
                <Input />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div className='bg-slate-200 p-4 mb-4 rounded-lg'>
              <Form.Item<FieldType> label='số Hộ chiếu' name='passportNumber'>
                <Input />
              </Form.Item>
              <Form.Item<FieldType> label='Ngày cấp' name='address'>
                <Input />
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default ModalUpdateInfor;
