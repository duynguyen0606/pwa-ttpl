'use client';

import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// export const socketGrab = io(`https://server-chat.nhvngroup.com/grab`, {
//   path: '/socket-io',
//   autoConnect: false,
// });

export const socketGrab = io(`http://localhost:3001/grab`, {
  path: '/socket-io',
  autoConnect: false,
});

const MAX_RADIUS = 5; // 5km
const INTERVAL = 30000; // 30 giây
enum DriverStatus {
  REJECT_REQUEST = -1,
  AVAILABLE = 0,
  ACCEPT_REQUEST = 1,
  ARRIVING_PICKUP_POINT = 2,
  ARRIVED_PICKUP_POINT = 3,
  START_TRANSPORTING = 4,
  TRANSPORTING = 5,
  COMPLETED_TRANSPORTING = 6,
}

enum RiderStatus {
  FINDING_DRIVER = 0,
  ACCEPT_DRIVER = 1,
  CANCEL_DRIVER = 2,
}

function Index() {
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

  const handleUserCancel = () => {
    socketGrab.disconnect();
  };

  // phía người đặt xe
  useEffect(() => {
    socketGrab.on('noDriverFound', () => {
      console.log('Không tìm thấy tài xế');
    });
    socketGrab.on('driverFound', (data) => console.log(data));
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
    };
  }, []);

  return (
    <div>
      <Button onClick={handleUser}>User bắn </Button>
      {/* <Button onClick={handleDriver}>Tài xế bắn </Button>
      <Button onClick={handleAccept}>Tài xế chấp nhận</Button>
      <Button onClick={handleCancel}>Tài xế huỷ </Button>
      <Button onClick={handleCompleted}>Giao hàng thành công </Button>
      <Button onClick={handleStartDelivery}>Tài xế bắt đầu di chuyển</Button>
      <Button onClick={handleDriverArrivedPickupLocation}>
        Tài xế đã đến điểm đón
      </Button> */}
      <Button onClick={handleUserCancel}>User huỷ chuyến</Button>
      <Button onClick={handleTurnOn}>Bật app</Button>
      <Button onClick={hanldeTurnOff}>Tắt app</Button>
    </div>
  );
}

export default Index;
