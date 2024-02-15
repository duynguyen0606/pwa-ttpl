import Link from "next/link";

function Footer() {
    return ( 
        <div className="fixed w-full h-16 bottom-0 bg-cover bg-center bg-[url(https://ttpl.vn/assets/images/Backgound-footer.png)]
        ">
            <Link href="/mobile" className="absolute translate-x-2/4 right-1/2 z-[1] rounded-full bottom-[14px]">
                <img src="https://ttpl.vn/assets/images/Home.png"/>
            </Link>
            <div className="fixed bottom-0 w-full px-[15px] py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="#" className="mx-4">
                        <img src="https://ttpl.vn/assets/images/icon/briefcase.png" />
                    </Link>
                    <Link href="/mobile/bai-viet" className="mx-4">
                        <img src="https://ttpl.vn/assets/images/icon/file-text.png" />
                    </Link>
                </div>  
                <div className="flex items-center">
                    <Link href="#" className="mx-4">
                        <img src="https://ttpl.vn/assets/images/icon/message-circle-2.png" />
                    </Link>
                    <Link href="/mobile/dang-nhap" className="mx-4">
                        <img className="w-7 h-7" src="https://ttpl.vn/assets/images/header/User.png" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;