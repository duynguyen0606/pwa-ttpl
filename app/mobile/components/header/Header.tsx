
import './Header.scss'

function Header({ fixed = false }) {
    const classes = 'h-[62px] w-full flex items-center justify-center border-b-2 border-solid border-gray-100 bg-white'
    return ( 
        <div className={fixed ? `fixed ${classes}` : classes}>
            <div className='w-10 h-10 flex items-center left-1 absolute'>
                <img src='https://ttpl.vn/assets/images/logo/logo-legalzone.png' alt='logo-legalzone'/>
            </div>
            <span className='flex text-xl font-bold ml-5 w-fit'>Thủ tục pháp luật</span>
        </div>
    );
}

export default Header;