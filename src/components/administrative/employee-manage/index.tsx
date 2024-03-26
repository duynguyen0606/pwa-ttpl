import { Col, ConfigProvider, Row, Select } from 'antd';
import { useMemo, useState } from 'react';
import EmployeeInfor from './EmployeeInfor';
import EmployeeSocial from './EmployeeSocial';
import EmployeeDocument from './EmployeeDocument';
import EmployeeFlow from './EmployeeFlow';
import EmployeeWorkday from './EmployeeWorkday';
import EmployeeKPI from './EmployeeKPI';
import EmployeeSalary from './EmployeeSalary';
import EmployeeDaysOff from './EmployeeDaysOff';
import EmployeeCost from './EmployeeCost';
import EmployeeMission from './EmployeeMission';

enum TabSelection {
  EE_INFOR = 'employee_infor',
  EE_SOCIAL = 'employee_social',
  EE_DOCUMENT = 'employee_document',
  EE_FLOW = 'employee_flow',
  EE_WORKDAY = 'employee_workday',
  EE_KPI = 'employee_kpi',
  EE_SALARY = 'employee_salary',
  EE_DAYS_OFF = 'employee_days_off',
  EE_COST = 'employee_cost',
  EE_MISSION = 'employee_mission',
}

function CustomerManagement() {
  const [seletecTab, setSelectedTab] = useState('');
  const handleChange = (value: string) => {
    setSelectedTab(value);
  };

  const renderChild = useMemo(() => {
    switch (seletecTab) {
      case TabSelection.EE_INFOR:
        return <EmployeeInfor />;
      case TabSelection.EE_SOCIAL:
        return <EmployeeSocial />;
      case TabSelection.EE_DOCUMENT:
        return <EmployeeDocument />;
      case TabSelection.EE_FLOW:
        return <EmployeeFlow />;
      case TabSelection.EE_WORKDAY:
        return <EmployeeWorkday />;
      case TabSelection.EE_KPI:
        return <EmployeeKPI />;
      case TabSelection.EE_SALARY:
        return <EmployeeSalary />;
      case TabSelection.EE_DAYS_OFF:
        return <EmployeeDaysOff />;
      case TabSelection.EE_COST:
        return <EmployeeCost />;
      case TabSelection.EE_MISSION:
        return <EmployeeMission />;
      default:
        return <EmployeeInfor />;
    }
  }, [seletecTab]);

  const renderTitleChild = useMemo(() => {
    switch (seletecTab) {
      case TabSelection.EE_SOCIAL:
        return 'Social Links';
      case TabSelection.EE_DOCUMENT:
        return 'Tài liệu';
      case TabSelection.EE_FLOW:
        return 'Quy trình';
      case TabSelection.EE_WORKDAY:
        return 'Ngày công';
      case TabSelection.EE_KPI:
        return '%KPI';
      case TabSelection.EE_SALARY:
        return 'Phiếu lương';
      case TabSelection.EE_DAYS_OFF:
        return 'Ngày nghỉ';
      case TabSelection.EE_COST:
        return 'Chi phí';
      case TabSelection.EE_MISSION:
        return 'Nhiệm vụ';
      default:
        return '';
    }
  }, [seletecTab]);

  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <div className='bg-white p-4'>
            <div className='font-semibold border-b border-[#ccc] pb-2 mb-2'>
              Tất cả khách hàng
            </div>
            <div>
              <div
                className='p-2 rounded-lg text-white'
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                <div>Ngo long vu</div>
                <div>ngovu5122@gmail.com</div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <div className='bg-white p-4'>
            <div
              className={`flex justify-between items-center p-4 text-white`}
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              <Select
                defaultValue={TabSelection.EE_INFOR}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: TabSelection.EE_INFOR, label: 'Thông tin' },
                  { value: TabSelection.EE_SOCIAL, label: 'Social links' },
                  { value: TabSelection.EE_DOCUMENT, label: 'Tài liệu' },
                  { value: TabSelection.EE_FLOW, label: 'Quy trình' },
                  { value: TabSelection.EE_WORKDAY, label: 'Ngày công' },
                  { value: TabSelection.EE_KPI, label: '%KPI' },
                  { value: TabSelection.EE_SALARY, label: 'Phiếu lương' },
                  { value: TabSelection.EE_DAYS_OFF, label: 'Nghỉ phép' },
                  { value: TabSelection.EE_COST, label: 'Chi phí' },
                  { value: TabSelection.EE_MISSION, label: 'Nhiệm vụ' },
                ]}
              />

              <div>
                <div>Ngô long vũ</div>
                <div>ngovu5122000@gmail.com</div>
              </div>
              <div>
                <div>Quy trình hoạt động</div>
                <div>1</div>
              </div>
              <div>
                <div>Giá trị hoá đơn</div>
                <div>0Đ</div>
              </div>
              <div>
                <div>Lương thực lĩnh</div>
                <div>0Đ</div>
              </div>
              <div>
                <div>Còn nợ</div>
                <div>0Đ</div>
              </div>
            </div>

            <div className='p-4'>
              {!!renderTitleChild && (
                <div className='uppercase font-semibold mb-4'>
                  {renderTitleChild}
                </div>
              )}
              {renderChild}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CustomerManagement;
