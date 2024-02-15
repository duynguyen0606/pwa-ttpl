import Link from "next/link";
import Blog from "@/src/components/mobile/blog/Blog";
import Footer from "@/src/components/mobile/footer/Footer";

function Index() {
    return (
        <div>
            {/* Header */}
            <div
                className="
                    p-4 
                    flex items-center 
                    text-xl font-bold text-[#262C41]
                    border-b-[1px] border-solid border-[#F1F1F1]
                "
            >
                <Link href="/mobile">
                    <img
                        className="mr-2"
                        src="https://ttpl.vn/assets/images/mobile/type-back.png"
                    />
                </Link>
                Danh sách thủ tục
            </div>

            {/* List procedure */}
            <div className="m-4 pb-28">
                <Blog />
            </div>

            <Footer />
        </div>
    );
}

export default Index;
