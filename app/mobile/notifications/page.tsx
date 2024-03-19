import CanBackLayout from '@/src/components/layout/mobile/CanBackLayout';

function Index() {
  return (
    <CanBackLayout back='/mobile' title='Thông báo'>
      <div className='p-4'>No notification found.</div>
    </CanBackLayout>
  );
}

export default Index;
