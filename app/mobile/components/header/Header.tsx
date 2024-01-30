
import './Header.scss'

function Header() {
    return ( 
        <div className='h-16 flex items-center p-0 border-b-2 divide-solid border-gray-100'>
            <div className='w-10 h-10 flex items-center'>
                <img src='https://ttpl.vn/assets/images/logo/logo-legalzone.png' alt='logo-legalzone'/>
            </div>
            <span className='title text-xl font-bold ml-5 translate-x-2/3 absolute w-fit'>Thủ tục pháp luật</span>
        </div>
    );
}

export default Header;