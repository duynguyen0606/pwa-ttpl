import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";

function Index() {
    console.log('mount');
    
    return (
        <CanBackLayout back="/mobile/profile/loadProcedure" title="Thủ tục đã lưu">
            <div className="py-5 px-4">
                <div className="mt-5 text-base text-[#262C41] font-bold">
                    Thủ tục đã lưu
                </div>
               
            </div>
        </CanBackLayout>
    );
}

export default Index;
