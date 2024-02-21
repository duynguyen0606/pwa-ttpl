import { Col, Row } from 'antd';
import CrownIcon from '../common/icons/CrownIcon';

const dataPremium = [
  {
    name: 'premium1',
    bgColor: 'linear-gradient(267.31deg, #06CEAE -0.97%, #84D9D2 100%)',
  },
  {
    name: 'premium2',
    bgColor:
      'linear-gradient(267.31deg, rgba(255, 161, 72, 0.5) -0.97%, rgba(255, 185, 17, 0.5) 100%)',
  },
  {
    name: 'premium3',
    bgColor:
      'linear-gradient(267.31deg, rgba(255, 131, 149, 0.5) -0.97%, rgba(255, 180, 149, 0.5) 100%)',
  },
  {
    name: 'premium4',
    bgColor:
      'linear-gradient(267.31deg, rgba(176, 103, 255, 0.5) -0.97%, rgba(211, 134, 255, 0.5) 100%)',
  },
];

function ProfilePremium() {
  return (
    <Row gutter={16}>
      {dataPremium.map((item) => (
        <Col span={6}>
          <div
            className='w-full h-60 text-white p-4 rounded-lg relative'
            style={{ background: item.bgColor }}
          >
            <div className='absolute bottom-4 left-4'>
              <CrownIcon bgColor='#fff' width='37px' height='37px' />
              <span className='font-semibold'>PREM</span>
            </div>
          </div>
          <div>{item.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default ProfilePremium;
