import {
  apiGetListActualImplementation,
  apiGetListProcedureComment,
  apiProcedureComment,
} from '@/src/api/procedure';
import { useAppSelector } from '@/src/redux/hooks';
import {
  Avatar,
  Button,
  Form,
  Input,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import { useEffect, useState } from 'react';
import CommentCom from '../common/comment';
import CommentModel from '@/src/models/Comment';
import CommentItem from '../common/comment/CommentItem';
import axios from 'axios';
import { sendPostFormDataWithToken } from '@/src/utils';

function ProcedureSlugComment({ id }: { id?: string }) {
  const { user, token } = useAppSelector((state) => state.authState);
  const [showUpload, setShowUpload] = useState(false);
  const [data, setData] = useState<Array<any>>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileListLink, setFileListLink] = useState<string>('');
  const [message, setMessage] = useState('');

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    console.log(fileList);
    setFileList(newFileList);
  };

  useEffect(() => {
    if (user && id) {
      (async () => {
        const dataRes = await apiGetListProcedureComment(id, token);
        if (dataRes.status) {
          setData(dataRes.data);
        }
      })();
    }
  }, [user, id]);

  const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        // Auth
      },
    };
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

  const handleComment = async (values: any) => {
    if ((message && user && id) || (user && fileListLink && id)) {
      const dataRes = await apiProcedureComment({
        comment: message,
        files: fileListLink,
        id_help_articles: id as string,
        token,
      });
      if (dataRes?.status) {
        setMessage('');
        setFileListLink('');
        setFileList([]);
        setShowUpload(false);
        setData((prev) => [dataRes.data[0], ...prev]);
      }
    }
  };

  return (
    <div>
      <div className='flex gap-2 w-full'>
        <Avatar shape='circle' src={user?.image} />
        <Form
          style={{ width: '100%' }}
          onFinish={(values) => handleComment(values)}
        >
          <div className='flex-1 p-4 bg-slate-200 rounded-lg'>
            <Input
              placeholder='Viết bình luận'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className='flex justify-between pt-2'>
              <div>
                <Button
                  size='small'
                  onClick={() => setShowUpload((prev) => !prev)}
                >
                  Tải file lên
                </Button>
                {showUpload && (
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
                )}
              </div>
              <Button htmlType='submit' size='small'>
                Bình luận
              </Button>
            </div>
          </div>
        </Form>
      </div>
      {data.length > 0 &&
        data.map((item) => (
          <CommentItem
            data={
              new CommentModel({
                created_by_avartar: item.avatar,
                created_by_full_name: item.first_name,
                created_at: item.created_at,
                title: item.comment,
                files: item.files,
              })
            }
          />
        ))}
    </div>
  );
}

export default ProcedureSlugComment;
