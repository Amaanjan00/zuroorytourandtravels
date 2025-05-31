import { useState } from 'react'
import logo from '../assets/logo/headerlogo.png'
import { Link } from 'react-router'

function Header() {

    const [head, setHead] = useState(false)

  return (
    <>
        <div className='hidden lg:block sticky top-0 bg-white z-99999'>
            <header className='flex justify-between items-center px-20 py-4 shadow-2xl'>
                <div className='w-40'>
                    <Link to='/'><img className='object-contain' src={logo} alt="" /></Link>
                </div>
                <nav>
                    <ul className='flex text-gray-500 text-[16px] gap-10 uppercase'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><a href="tel:+919007167409">Book You Umrah Now</a></li>
                    </ul>
                </nav>
                <div className=''>
                    <h1 className='text-yellow-600 uppercase'>Contact: <span><a className='text-gray-500' type='phone' href="tel:+91 9007167409">+91 9007167409</a></span></h1>
                </div>
            </header>
        </div>


        <div className='block lg:hidden sticky top-0 bg-white z-99999'>
            <header className='flex justify-between items-center px-10 py-4 shadow-2xl'>

                <div className='w-35'>
                    <Link to='/'><img className='object-contain' src={logo} alt="" /></Link>
                </div>

                <div className=''>
                    <svg onClick={() => setHead(true)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" fill='#d6b657' viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
            </header>
        </div>

        {
            head &&

            <div className='fixed top-0 bg-white h-full w-full z-999999'>

                <div className='my-0 h-full flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between pl-10'>
                            <img className='w-50 object-contain' src={logo} alt="" />
                            <div className='p-10'>
                                <svg onClick={() => setHead(false)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" fill='#d6b657' height="40" viewBox="0 0 50 50">
                                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className='bg-white/50 backdrop-blur-2xl rounded-2xl shadow-2xl m-10'>
                            <nav className='p-10'>
                                <ul className='flex flex-col text-gray-500 text-[18px] font-bold gap-10 uppercase'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><a href="tel:+919007167409">Book You Umrah Now</a></li>
                                    <li><a href="tel:+919007167409">Customer Care</a></li>
                                    <li><Link to="/refund-policy">Refund Policy</Link></li>
                                    <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Poilicy</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className='p-10 mb-5 text-gray-500'>

                        <div>

                        </div>

                        <div>
                            <div className="flex flex-col gap-1">
                                <p>Got a question? Contact: </p>
                                <a className="text-yellow-500" href="mailto:zuroorytt@gmail.com">zuroorytt@gmail.com</a>
                            </div>

                            <p>All rights reserved &copy; 2025 Zuroory Tour and Travels</p>
                        </div>
                    </div>
                </div>

            </div>
        }
    </>
  )
}

export default Header
