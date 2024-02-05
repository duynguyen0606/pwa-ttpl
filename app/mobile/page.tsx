import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";

function Home() {
    const data = [
        {
            id: 0,
            img: 'https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp',
        },
        {
            id: 1,
            img: 'https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp',
        },
        {
            id: 2,
            img: 'https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp',
        },
    ]


    return ( 
        <div className="p-2 relative">
            <Header/>
            <Slider data={data}/>

            {/* Danh sách folder */}
            <div>
                <div className="flex text-base font-bold text-[#262C41] justify-between items-center">
                    Danh sách thủ tục
                    <button className="text-sm text-[#F58533]">
                        Xem tất cả
                    </button>
                </div>
                <Blog />
            </div>

            <a href="tel: 0888888888" className="fixed bottom-16 left-4 z-[2] ">
                <div className="flex w-28 h-9 bg-[#F58533] rounded-3xl items-center justify-left pl-2">
                    <img src="https://ttpl.vn/assets/images/icon/phone.png" alt="phone" className="w-5 h-4 pr-1"/>
                    <span className="text-white text-xs">0888888888</span>
                </div>
            </a>

            <Footer />
        </div> 
    );
}

export default Home;