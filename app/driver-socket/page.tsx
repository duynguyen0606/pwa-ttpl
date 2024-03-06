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

// DriverStatus:
// 0: available
// 1: chấp nhận cuốc
// 2: đang đến điểm đón
// 3: Đã đến điểm dón
// 4: Bắt đầu giao hàng
// 5: Đang giao hàng
// 6: Giao hàng thành công

// RiderStatus:
// 0: Tìm tài xế
// 1: Đặt chuyến
// 2: Huỷ chuyến

enum DriverStatus {
  REJECT_REQUEST = -1,
  AVAILABLE = 0,
  ACCEPT_REQUEST = 1,
  ARRIVING_PICKUP_POINT = 2,
  ARRIVED_PICKUP_POINT = 3,
  START_TRANSPORTING = 4,
  TRANSPORTING = 5,
  COMPLETED_TRANSPORTING = 6,
  PASS_REQUEST = 7,
  // PASS_
}

enum RiderStatus {
  FINDING_DRIVER = 0,
  ACCEPT_DRIVER = 1,
  CANCEL_DRIVER = 2,
}

function Index() {
  const [activeUser, setActiveUser] = useState(false);
  const [activerDriver, setActiveDriver] = useState(false);
  const [driverId, setDriverId] = useState(null);
  const [riderId, setRiderId] = useState(null);
  const [status, setStatus] = useState(0);

  let intervalId: any;

  const handleTurnOn = () => {
    socketGrab.connect();
  };

  const hanldeTurnOff = () => {
    socketGrab.disconnect();
  };

  const handleDriver = () => {
    if (driverId && riderId) {
    } else
      socketGrab.emit('driverRequest', {
        infor: {
          driver_id: '6617',
          name: 'Tài xế',
          phone_number: '0987765218',
          license_plate: '10M2 - 123.52',
          rating: '5',
        },
        currentLocation: {
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
        status: DriverStatus.AVAILABLE,
      });
  };

  const handleStatus = (status: number) => {
    setStatus(status);
    if (driverId && riderId) {
      if (
        status === DriverStatus.ARRIVING_PICKUP_POINT ||
        status === DriverStatus.START_TRANSPORTING
      ) {
        intervalId = setInterval(() => {
          socketGrab.emit('driverResponse', {
            driverId,
            riderId,
            currentLocation: {
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
            status,
          });
        }, 1000);
      } else {
        socketGrab.emit('driverResponse', {
          driverId,
          riderId,
          status,
        });
      }
    }
  };

  useEffect(() => {
    if (
      status === DriverStatus.COMPLETED_TRANSPORTING ||
      status === DriverStatus.REJECT_REQUEST
    ) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [status]);

  useEffect(() => {
    socketGrab.on('rideRequest', (data) => {
      console.log('Bạn nhận được yêu cầu từ', data);
      setDriverId(data?.driverSocketId);
      setRiderId(data?.riderId);
    });
    // socketGrab.on('')
    return () => {
      socketGrab.off('rideRequest');
    };
  }, []);

  return (
    <div>
      {/* <Button onClick={handleUser}>User bắn </Button> */}
      <Button onClick={handleDriver}>Tài xế bắn </Button>
      <Button onClick={() => handleStatus(DriverStatus.ACCEPT_REQUEST)}>
        Tài xế chấp nhận
      </Button>
      <Button onClick={() => handleStatus(DriverStatus.REJECT_REQUEST)}>
        Tài xế huỷ
      </Button>
      <Button onClick={() => handleStatus(DriverStatus.PASS_REQUEST)}>
        Tài xế bỏ qua
      </Button>
      <Button onClick={() => handleStatus(DriverStatus.ARRIVING_PICKUP_POINT)}>
        Tài xế đang đến điểm đón
      </Button>
      <Button onClick={() => handleStatus(DriverStatus.ARRIVED_PICKUP_POINT)}>
        Tài xế đã đến điểm đón
      </Button>
      <Button onClick={() => handleStatus(DriverStatus.START_TRANSPORTING)}>
        Tài xế bắt đầu giao hàng
      </Button>
      <Button onClick={() => handleStatus(DriverStatus.TRANSPORTING)}>
        Giao hàng đang giao hàng
      </Button>
      <Button onClick={() => handleStatus(DriverStatus.COMPLETED_TRANSPORTING)}>
        Giao hàng thành công
      </Button>
      {/* <Button onClick={handleUserCancel}>User huỷ chuyến hoặc huỷ quét</Button> */}
      <Button onClick={handleTurnOn}>Bật app</Button>
      <Button onClick={hanldeTurnOff}>Tắt app</Button>
    </div>
  );
}

export default Index;
