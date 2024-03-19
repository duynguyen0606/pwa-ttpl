import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";

function Index() {
    return (
        <CanBackLayout back="/mobile/profile/loadProcedure" title="Thủ tục đã xem">
            <div className="py-5 px-4">
                <div className="mt-5 text-base text-[#262C41] font-bold">
                    Thủ tục đã xem
                </div>
                
            </div>
        </CanBackLayout>
    );
}

export default Index;
