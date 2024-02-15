'use client';

import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const socketGrab = io(`http://localhost:8001/grab`, {
  path: '/socket-io',
});

const MAX_RADIUS = 5; // 5km
const INTERVAL = 30000; // 30 giây

function Index() {
  const [activeUser, setActiveUser] = useState(false);
  const [activerDriver, setActiveDriver] = useState(false);
  const [driverId, setDriverId] = useState(null);
  const [riderId, setRiderId] = useState(null);
  const handleUser = () => {
    socketGrab.emit('riderRequest', {
      user: { id: 1, name: 'người đặt xe' },
      location: { lat: 21.20121741252062, lon: 105.80895570462165 },
    });
  };
  const handleDriver = () => {
    socketGrab.emit('driverLocation', {
      user: { id: 2, name: 'người lái xe' },
      location: { lat: 21.193908324002063, lon: 105.81256463938357 },
    });
  };
  const handleAccept = () => {
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

  const handleCompleted = () => {
    if (riderId && driverId) {
      socketGrab.emit('rideCompleted', { riderId, driverId });
    }
  };

  useEffect(() => {
    socketGrab.on('driverFound', (data) => console.log(data));
  }, []);

  useEffect(() => {
    socketGrab.on('rideRequest', (data) => {
      setDriverId(data?.driverSocketId);
      setRiderId(data?.riderId);
    });
  }, []);

  useEffect(() => {
    socketGrab.on('rideAccepted', (data) =>
      console.log('tài xế chấp nhận', data)
    );
  }, []);

  useEffect(() => {
    socketGrab.on('rideCompleted', () => {
      // Cập nhật UI hoặc hiển thị thông báo
      alert('Chuyến đi của bạn đã hoàn thành!');
    });
  }, []);

  console.log(driverId);

  return (
    <div>
      <Button onClick={handleUser}>User bắn </Button>
      <Button onClick={handleDriver}>Tài xế bắn </Button>
      <Button onClick={handleAccept}>Tài xế chấp nhận</Button>
      <Button onClick={handleCancel}>Tài xế huỷ </Button>
      <Button onClick={handleCompleted}>Giao hàng thành công </Button>
    </div>
  );
}

export default Index;
