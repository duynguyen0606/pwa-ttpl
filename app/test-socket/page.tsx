'use client';

import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const socketGrab = io(`http://localhost:3001/grab`, {
  path: '/socket-io',
});

const MAX_RADIUS = 5; // 5km
const INTERVAL = 30000; // 30 giây
// "data": {
//   "driver_id": "6617",
//   "name": "Jane Doe",
//   "phone_number": "0987765218",
//   "license_plate": "10M2 - 123.52",
//   "rating": "5"
// }

// {
//     driver_id: "6617",
//   name: "",
//   phone_number: "0987765218",
//   license_plate: "10M2 - 123.52",
//   rating: "5"
// }

function Index() {
  const [activeUser, setActiveUser] = useState(false);
  const [activerDriver, setActiveDriver] = useState(false);
  const [driverId, setDriverId] = useState(null);
  const [riderId, setRiderId] = useState(null);
  const handleUser = () => {
    socketGrab.emit('riderRequest', {
      data: {
        driver_id: '6617',
        name: 'User',
        phone_number: '0987765218',
        license_plate: '10M2 - 123.52',
        rating: '5',
      },
      location: { lat: 21.20121741252062, lon: 105.80895570462165 },
    });
  };
  const handleDriver = () => {
    socketGrab.emit('driverLocation', {
      data: {
        driver_id: '6617',
        name: 'Tài xế',
        phone_number: '0987765218',
        license_plate: '10M2 - 123.52',
        rating: '5',
      },
      location: { lat: 21.193908324002063, lon: 105.81256463938357 },
    });
  };

  const handleAccept = () => {
    console.log(driverId, riderId);
    if (driverId && riderId) {
      socketGrab.emit('driverResponse', {
        driverId: driverId,
        riderId: riderId,
        accepted: true,
      });
    }
  };

  const handleCancel = () => {
    if (driverId && riderId) {
      socketGrab.emit('driverCancel', { driverId, riderId });
    }
  };

  const handleStartDelivery = () => {
    console.log(driverId, riderId, 'xxx');
    if (driverId && riderId) {
      socketGrab.emit('driverStartDelivery', { driverId, riderId });
    }
  };

  const handleCompleted = () => {
    if (riderId && driverId) {
      socketGrab.emit('rideCompleted', { riderId, driverId });
    }
  };

  useEffect(() => {
    socketGrab.on('driverFound', (data) => console.log(data));
    return () => {
      socketGrab.off('driverFound');
    };
  }, []);

  useEffect(() => {
    socketGrab.on('rideRequest', (data) => {
      setDriverId(data?.driverSocketId);
      setRiderId(data?.riderId);
    });
    return () => {
      socketGrab.off('rideRequest');
    };
  }, []);

  // phía người đặt xe
  useEffect(() => {
    socketGrab.on('rideAccepted', (data) =>
      console.log('tài xế chấp nhận', data)
    );
    socketGrab.on('rideCancelled', () => {
      alert('Tài xế đã huỷ chuyến');
    });

    return () => {
      socketGrab.off('rideAccepted');
      socketGrab.off('rideCancelled');
    };
  }, []);

  // phía người đặt xe
  useEffect(() => {
    socketGrab.on('rideCompleted', (data) => {
      console.log(data);
      // Cập nhật UI hoặc hiển thị thông báo
      alert('Chuyến đi của bạn đã hoàn thành!');
    });
    return () => {
      socketGrab.off('rideCompleted');
    };
  }, []);

  // phía người đặt xe
  useEffect(() => {
    socketGrab.on('driverStartDelivery', () => {
      alert('Tài xế bắt đầu giao hàng');
    });
    return () => {
      socketGrab.off('driverStartDelivery');
    };
  }, []);

  return (
    <div>
      <Button onClick={handleUser}>User bắn </Button>
      <Button onClick={handleDriver}>Tài xế bắn </Button>
      <Button onClick={handleAccept}>Tài xế chấp nhận</Button>
      <Button onClick={handleCancel}>Tài xế huỷ </Button>
      <Button onClick={handleCompleted}>Giao hàng thành công </Button>
      <Button onClick={handleStartDelivery}>Tài xế bắt đầu di chuyển</Button>
    </div>
  );
}

export default Index;
