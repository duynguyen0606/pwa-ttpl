import Link from "next/link";

function Footer() {
    return ( 
        <div className="fixed w-full h-16 bottom-0 bg-cover bg-center bg-[url(https://ttpl.vn/assets/images/Backgound-footer.png)]
        ">
            <a href="/mobile" className="absolute translate-x-2/4 right-1/2 z-[1] rounded-full bottom-[14px]">
                <img src="https://ttpl.vn/assets/images/Home.png"/>
            </a>
            <div className="fixed bottom-0 w-full px-[15px] py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="mx-4">
                        <img src="https://ttpl.vn/assets/images/icon/briefcase.png" />
                    </a>
                    <Link href="/mobile/bai-viet" className="mx-4">
                        <img src="https://ttpl.vn/assets/images/icon/file-text.png" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <a href="#" className="mx-4">
                        <img src="https://ttpl.vn/assets/images/icon/message-circle-2.png" />
                    </a>
                    <a href="/mobile/dang-nhap" className="mx-4">
                        <img className="w-7 h-7" src="https://ttpl.vn/assets/images/header/User.png" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;