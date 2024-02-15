import Link from "next/link";
import "./Header.scss";

function Header() {
    return (
        <div
            className="
                fixed 
                h-[62px] w-full 
                flex items-center justify-center 
                border-b-2 border-solid border-gray-100 
                bg-white
            "
        >
            <div className="w-10 h-10 flex items-center left-1 absolute">
                <Link href="/mobile">
                    <img
                        src="https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                        alt="logo-legalzone"
                    />
                </Link>
            </div>
            <span className="flex text-xl font-bold ml-5 w-fit">
                Thủ tục pháp luật
            </span>
        </div>
    );
}

export default Header;
