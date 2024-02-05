function Footer() {
    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <a href="#" className="mx-4">
                    <img src="https://ttpl.vn/assets/images/icon/briefcase.png" />
                </a>
                <a href="#" className="mx-4">
                    <img src="https://ttpl.vn/assets/images/icon/file-text.png" />
                </a>
            </div>
            <div className="flex items-center">
                <a href="#" className="mx-4">
                    <img src="https://ttpl.vn/assets/images/icon/message-circle-2.png" />
                </a>
                <a href="#" className="mx-4">
                    <img className="w-7 h-7" src="https://ttpl.vn/assets/images/header/User.png" />
                </a>
            </div>
        </div>
    );
}

export default Footer;