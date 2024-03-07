'use client';

import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// export const socketGrab = io(`https://server-chat.nhvngroup.com/grab`, {
//   path: '/socket-io',
//   autoConnect: false,
// });
const socketGrab = io(`http://localhost:3001/grab`, {
  path: '/socket-io',
  autoConnect: false,
});

const MAX_RADIUS = 5; // 5km
const INTERVAL = 30000; // 30 giây
enum DriverStatus {
  REJECT_REQUEST = -1, // Tài xế từ chối
  AVAILABLE = 0, // Tài xế bật app và đang đợi quốc
  ACCEPT_REQUEST = 1, // Tài xế chấp nhận yêu cầu
  ARRIVING_PICKUP_POINT = 2, // Tài xế đang đến điểm đón
  ARRIVED_PICKUP_POINT = 3, // Tài xế đã đến điểm đón
  START_TRANSPORTING = 4, // Tài xế bắt đầu vận chuyển
  TRANSPORTING = 5, // Tài xế đang vận chuyển
  COMPLETED_TRANSPORTING = 6, // Tài xế hoàn thành chuyến đi
}

enum RiderStatus {
  FINDING_DRIVER = 0,
  ACCEPT_DRIVER = 1,
  CANCEL_DRIVER = 2,
  CANCEL_DRIVER_ACCEPT = 3,
}

function Index() {
  const [driverId, setDriverId] = useState(null);
  const handleUser = () => {
    socketGrab.emit('riderRequest', {
      infor: {
        driver_id: '6617',
        name: 'User',
        phone_number: '0987765218',
        license_plate: '10M2 - 123.52',
        rating: '5',
      },
      pickupLocation: {
        formatted_address:
          '141 P. Nam Dư, Lĩnh Nam, Hoàng Mai, Hà Nội, Việt Nam',
        id: 1708678390679,
        location: {
          latitude: 20.983715,
          latitudeDelta: 0.004452590797672684,
          longitude: 105.888896,
          longitudeDelta: 0.009148679673671722,
        },
        name: '141 P. Nam Dư',
      },
      arrivedLocation: {
        formatted_address:
          '120 Phố Yên Lãng, Thịnh Quang, Đống Đa, Hanoi, Vietnam',
        id: 1708618673363,
        location: {
          latitude: 21.0101235,
          latitudeDelta: 0.004452590797672684,
          longitude: 105.8153503,
          longitudeDelta: 0.009148679673671722,
        },
        name: '120 Phố Yên Lãng',
      },
      status: RiderStatus.FINDING_DRIVER,
    });
  };
  // 20.98971015762548, 105.87304615414742

  const handleTurnOn = () => {
    socketGrab.connect();
  };

  const hanldeTurnOff = () => {
    socketGrab.disconnect();
  };

  const handleUserCancel = (status: number) => {
    // socketGrab.disconnect();
    socketGrab.emit('riderResponse', { status });
  };

  // phía người đặt xe
  useEffect(() => {
    socketGrab.on('noDriverFound', () => {
      console.log('Không tìm thấy tài xế');
    });
    socketGrab.on('driverFound', (data) => console.log(data));
    socketGrab.on('driverMoving', (data) => console.log(data));
    socketGrab.on('driverResponse', (data) => {
      const { status } = data;
      if (status === DriverStatus.REJECT_REQUEST) {
        console.log('Tài xế từ chối yêu cầu của bạn');
      } else if (status === DriverStatus.AVAILABLE) {
        console.log('Tài xế không nhận yêu cầu của bạn');
      } else if (status === DriverStatus.ACCEPT_REQUEST) {
        console.log('Tài xế chấp nhận yêu cầu của bạn');
      } else if (status === DriverStatus.ARRIVING_PICKUP_POINT) {
        console.log('Tài xế đang di chuyển đến điểm đón');
      } else if (status === DriverStatus.ARRIVED_PICKUP_POINT) {
        console.log('Tài xế đã đến điểm đón');
      } else if (status === DriverStatus.START_TRANSPORTING) {
        console.log('Tài xế bắt đầu giao hàng');
      } else if (status === DriverStatus.TRANSPORTING) {
        console.log('Tài xế đang giao hàng');
      } else if (status === DriverStatus.COMPLETED_TRANSPORTING) {
        console.log('Tài xế giao hàng thành công');
      }
    });

    return () => {
      socketGrab.off('driverFound');
      socketGrab.off('noDriverFound');
      socketGrab.off('driverResponse');
      socketGrab.off('driverMoving');
    };
  }, []);

  return (
    <div>
      <Button onClick={handleUser}>User bắn </Button>
      <Button onClick={() => handleUserCancel(RiderStatus.CANCEL_DRIVER)}>
        User huỷ chuyến khi tài xế chưa chấp nhận
      </Button>
      <Button
        onClick={() => handleUserCancel(RiderStatus.CANCEL_DRIVER_ACCEPT)}
      >
        User huỷ chuyến sau khi tài xế đã chấp nhận
      </Button>
      <Button onClick={handleTurnOn}>Bật app</Button>
      <Button onClick={hanldeTurnOff}>Tắt app</Button>
    </div>
  );
}

export default Index;
