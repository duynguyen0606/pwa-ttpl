'use client'

import { useState } from 'react'
import './style.scss'

function Login() {
    const [showForgotPassword, setShowForgotPassword] = useState(false)
    const [register, setRegister] = useState(false)

    return ( 
        <div className="f-1 p-4">
            <div >
                <button className='w-7 h-7 rounded-full bg-custom bg-[#f6f6fd]'>
                    <img src="https://ttpl.vn/assets/images/mobile/type-back-login.png" alt="" />
                </button>
            </div>
            <form className="py-4">
                <h2 className='text-3xl font-semibold my-5'>Đăng nhập</h2>
                <div className="flex flex-col mb-4 relative">
                    <label className='text-xs text-gray-600 mb-1 ' htmlFor = 'email'>
                        Email/Số điện thoại
                    </label>
                    <input className='text-base h-12 w-full rounded-lg px-2 bg-custom bg-[#F4F5F8]' type="text" name="email" placeholder="Email" />
                </div>
                <div className="flex flex-col mb-1 relative">
                    <label className='text-xs text-gray-600 mb-1 ' htmlFor="password">
                        Mật khẩu
                    </label>
                    <input className='text-base h-12 w-full rounded-lg px-2 bg-custom bg-[#F4F5F8]' type="password" name="password" placeholder="Mật khẩu" />
                    <img className="absolute right-5 bottom-4 cursor-pointer hide-pass" src="https://ttpl.vn/assets/images/icon/Eye.png"></img>
                </div>
                <div className="text-sm text-end text-[#4755D4] cursor-pointer ">
                    Quên mật khẩu ?
                </div>
                <div className="flex w-full h-[54px] text-white bg-custom bg-[#4755D4] text-base rounded-[20px] mt-5 mb-2 items-center justify-center">
                    <button>Đăng nhập</button>
                </div>
                <div className="text-xs text-center">
                    Bạn chưa có tài khoản?
                    <span className='font-bold text-[#4755D4] mx-1 cursor-pointer'> Đăng ký</span>
                </div>
            </form>

            <div className="flex items-center justify-center">
                {/* <div className='flex flex-col w-4/5 text-sm items-center mt-6 px-6 py-2 divide-dashed border-t-2'> */}
                <div className='item'>
                    <span>Hoặc đăng nhập bằng mạng xã hội</span>
                    <div className="fb-gg">
                        <a href='#' className='fb-icon'>
                            <img src='https://ttpl.vn/assets/images/mobile/icon-facebook.png' alt=''/>
                        </a>
                        <a href='#' className='gg-icon'>
                            <img src='https://ttpl.vn/assets/images/mobile/icons-google.png' alt=''/>
                        </a>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Login