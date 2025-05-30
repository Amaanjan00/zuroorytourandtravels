import logo from '../assets/logo/headerlogo.png'

function Header() {
  return (
    <>
        <div className='hidden lg:block sticky top-0 bg-white z-99999'>
            <header className='flex justify-between items-center px-20 py-4 shadow-2xl'>
                <div className='w-40'>
                    <img className='object-contain' src={logo} alt="" />
                </div>
                <nav>
                    <ul className='flex text-gray-500 text-[16px] gap-10 uppercase'>
                        <li><a href=""></a>Home</li>
                        <li><a href=""></a>Umrah Packages</li>
                        <li><a href=""></a>Contact</li>
                        <li><a href=""></a>About</li>
                    </ul>
                </nav>
                <div className=''>
                    <h1 className='text-yellow-600 uppercase'>Contact: <span><a className='text-gray-500' type='phone' href="tel:+91 9007167409">+91 9007167409</a></span></h1>
                </div>
            </header>
        </div>


        <div className='block lg:hidden sticky top-0 bg-white z-99999'>
            <header className='flex justify-between items-center px-10 py-4 shadow-2xl'>

                <div className='w-30'>
                    <img className='object-contain' src={logo} alt="" />
                </div>

                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" fill='#d6b657' viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
            </header>
        </div>
    </>
  )
}

export default Header
