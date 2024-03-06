import CanBackLayout from '@/src/components/layout/mobile/CanBackLayout';
import BlogItem from '@/src/components/mobile/procedure-item/ProcedureItem';

function Index() {
  return (
    <CanBackLayout back='../my-procedure' title='Thủ tục đã xem'>
      <div className='py-5 px-4'>
        <div className='mt-5 text-base text-[#262C41] font-bold'>
          Thủ tục đã xem
        </div>
        {/* <div>
                    <BlogItem
                        organ={
                            "Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"
                        }
                        field={"Xuất nhập khẩu"}
                    />
                    <BlogItem
                        organ={
                            "Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"
                        }
                        field={"Xuất nhập khẩu"}
                    />
                </div> */}
      </div>
    </CanBackLayout>
  );
}

export default Index;
