import { useAppSelector } from '@/src/redux/hooks';
import { Avatar, Badge, Button, Popover } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

function Notification() {
  const { listNotification } = useAppSelector((state) => state.userState);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Badge count={listNotification.length}>
      <Popover
        content={
          <div>
            {listNotification.length > 0 &&
              listNotification.map((item) => (
                <div
                  key={item.avatar_create_by}
                  className='flex items-start gap-2 py-2'
                >
                  <Avatar src={item.avatar_create_by} size='large' />
                  <div>
                    <span className='font-semibold text-lg'>
                      {item.name_create_by}
                    </span>{' '}
                    <span>{item.name_type}</span>
                  </div>
                </div>
              ))}
          </div>
        }
        title='Thông báo'
        trigger='click'
        open={open}
        placement='bottomRight'
        onOpenChange={handleOpenChange}
      >
        <Button
          type='link'
          icon={
            <Image
              src='/images/icons/notification.png'
              alt='notification'
              width={50}
              height={50}
            />
          }
          onClick={() => setOpen(!open)}
        />
      </Popover>
    </Badge>
  );
}

export default Notification;
