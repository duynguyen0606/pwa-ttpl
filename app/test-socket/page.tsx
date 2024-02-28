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

// pickUpLocation ={   formatted_address:
//   'Vinhomes Times City, Vĩnh Tuy, Hai Bà Trưng, Hà Nội, Việt Nam',
// id: 1708678390679,
// location: {
//   latitude: 20.9945438,
//   latitudeDelta: 0.004452590797672684,
//   longitude: 105.8677181,
//   longitudeDelta: 0.009148679673671722,
// },
// name: 'Vinhomes Times City',}

// arrivedLocation ={
//   formatted_address:
//     '120 Phố Yên Lãng, Thịnh Quang, Đống Đa, Hanoi, Vietnam',
//   id: 1708618673363,
//   location: {
//     latitude: 21.0101235,
//     latitudeDelta: 0.004452590797672684,
//     longitude: 105.8153503,
//     longitudeDelta: 0.009148679673671722,
//   },
//   name: '120 Phố Yên Lãng',
// },

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
      dataUser: {
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
    });
  };
  // 20.98971015762548, 105.87304615414742

  const handleTurnOn = () => {
    socketGrab.connect();
  };

  const hanldeTurnOff = () => {
    socketGrab.disconnect();
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
      pickupLocation: {
        formatted_address:
          '141 P. Nam Dư, Lĩnh Nam, Hoàng Mai, Hà Nội, Việt Nam',
        id: 1708678390679,
        location: {
          lat: 20.983715,
          latitudeDelta: 0.004452590797672684,
          lon: 105.888896,
          longitudeDelta: 0.009148679673671722,
        },
        name: '141 P. Nam Dư',
      },
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

  const handleDriverArrivedPickupLocation = () => {
    if (riderId && driverId) {
      socketGrab.emit('driverArrivedPickupLocation', { riderId, driverId });
    }
  };

  const handleUserCancel = () => {
    socketGrab.disconnect();
  };

  // useEffect(() => {
  //   (() => {
  //     fetch('https://server-chat.nhvngroup.com/api/auth/xxx').then((data2) =>
  //       console.log(Promise.resolve(data2.json()))
  //     );
  //   })();
  // }, []);

  useEffect(() => {
    socketGrab.on('driverFound', (data) => console.log(data));
    return () => {
      socketGrab.off('driverFound');
    };
  }, []);

  useEffect(() => {
    socketGrab.on('rideRequest', (data) => {
      console.log('Đã tìm thấy tài xế');
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
    socketGrab.on('driverCancel', () => {
      alert('Tài xế đã huỷ chuyến');
    });

    return () => {
      socketGrab.off('rideAccepted');
      socketGrab.off('driverCancel');
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
    socketGrab.on('driverArrivedPickupLocation', () => {
      alert('Tài xế đã đến điểm đón');
    });
    return () => {
      socketGrab.off('driverStartDelivery');
      socketGrab.off('driverArrivedPickupLocation');
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
      <Button onClick={handleDriverArrivedPickupLocation}>
        Tài xế đã đến điểm đón
      </Button>
      <Button onClick={handleUserCancel}>User huỷ chuyến hoặc huỷ quét</Button>
      <Button onClick={handleTurnOn}>Bật app</Button>
      <Button onClick={hanldeTurnOff}>Tắt app</Button>
    </div>
  );
}

export default Index;
