'use client'

import { ModalForgotPassword } from '@/src/components/modal'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Login() {
    const router = useRouter()
    const [showForgotPassword, setShowForgotPassword] = useState(false)
    const [register, setRegister] = useState(false)

    return ( 
        <div className='relative'>
            <div className=' pt-3 pl-[11px] pl-0 pb-2'>
                <button className='w-7 h-7 rounded-full  bg-[#f6f6fd]' onClick={() => router.push('/mobile')}>
                    <img src="https://ttpl.vn/assets/images/mobile/type-back-login.png" alt="" />
                </button>
            </div>

            <div className="f-1 p-[15px]">
                {/* form login */}
                <form>
                    <h2 className='text-3xl text-[#262C41] font-semibold mb-5'>Đăng nhập</h2>
                    <div className="flex flex-col mb-4 relative">
                        <label className='text-[10px] text-[#686E7E] mb-1 ' htmlFor = 'email'>
                            Email/Số điện thoại
                        </label>
                        <input className='text-xs h-10 w-full rounded-lg px-2  bg-[#F4F5F8]' type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col mb-1 relative">
                        <label className='text-[10px] text-[#686E7E] mb-1 ' htmlFor="password">
                            Mật khẩu
                        </label>
                        <input className='text-xs h-10 w-full rounded-lg px-2  bg-[#F4F5F8]' type="password" name="password" placeholder="Mật khẩu" />
                        <img className="absolute right-5 bottom-[10px] hide-pass" src="https://ttpl.vn/assets/images/icon/Eye.png"></img>
                    </div>
                    <div className='text-end text-xs text-[#4755D4] pt-1'>
                        <span onClick={() => setShowForgotPassword(true)}>
                            Quên mật khẩu ?
                        </span>
                    </div>
                    <div className="flex w-full h-12 text-white  bg-[#4755D4] text-sm rounded-[20px] mt-5 mb-2 items-center justify-center">
                        <button>Đăng nhập</button>
                    </div>
                </form>

                {/* Not account */}
                <div className="text-[10px] text-center">
                    Bạn chưa có tài khoản?
                    <span className='font-bold text-[#4755D4] mx-1'> Đăng ký</span>
                </div>

                {/* other login */}
                <div className="flex items-center justify-center">
                    <div className='w-4/5 border-t-[1px] border-dashed flex flex-col text-xs items-center mt-6 px-3 py-6 '>
                        <span className='text-xs mb-3'>Hoặc đăng nhập bằng mạng xã hội</span>
                        <div className="flex w-full justify-center">
                            <a href='#' className='justify-center mx-2 w-11 h-11 flex items-center bg-[#F6F6FD] rounded-full'>
                                <img src='https://ttpl.vn/assets/images/mobile/icon-facebook.png' alt=''/>
                            </a>
                            <a href='#' className='justify-center mx-2 w-11 h-11 flex items-center bg-[#F6F6FD] rounded-full'>
                                <img src='https://ttpl.vn/assets/images/mobile/icons-google.png' alt=''/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Forgot password modal */}
            {/* {showForgotPassword && (
                <div className='fixed w-full h-full top-0 bg-[#3C3C3C]'>
                    <div className='absolute top-1/4 w-full p-4 bg-white rounded-lg'>
                        <div className=''>
                            <button className='w-7 h-7 rounded-full bg-[#f6f6fd]' onClick={() => setShowForgotPassword(false)}>
                                <img src="https://ttpl.vn/assets/images/mobile/type-back-login.png" alt="" />
                            </button>
                        </div>
                        <form>
                            <div className='flex flex-col items-center justify-center py-2'>
                                <h3 className='text-base font-bold uppercase pb-1'>Quên mật khẩu</h3>
                                <h4 className='py-1'>Điền email của bạn để xác nhận đặt lại mật khẩu</h4>
                            </div>                        
                            <input className='text-xs h-12 w-full rounded-lg px-2  bg-[#F4F5F8]' type="email" name="email" placeholder="Email" />
                            <div className="flex w-full h-12 text-white  bg-[#4755D4] text-sm font-bold rounded-[40px] mt-4 mb-2 items-center justify-center">
                                <button>Xác nhận</button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}

            <ModalForgotPassword open={showForgotPassword} onCancel={() => setShowForgotPassword(false)}/>
        </div>
    )
}

export default Login