import logo from '../assets/logo/headerlogo.png'

function Footer() {
  return (
    <>
        <footer>
        <div className="flex px-7 flex-col justify-center items-center gap-7 bg-amber-50 py-10">

            <h1 className="text-2xl text-center px-5 text-amber-600 font-medium">Get exclusive updates to offers, deals & surprises.</h1>

            <div className="bg-white shadow-[0_10px_50px_rgba(194,_103,_0,_0.8)] w-full lg:w-[30vw] h-12 flex justify-between rounded-[7px]">
                <input type="text" className="p-2 h-full w-full font-medium" placeholder="Enter your email to register" />
                <button className="bg-amber-600 text-white px-5 m-1 rounded-[5px]">Submit</button>
            </div>

            <p className="text-[12px] text-center mt-7 text-gray-500 font-medium">You are signing up to receive updates and newsletters. <br /> By signing up, you are consenting to our privacy policy but you can opt out at any time.</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-25 px-10 lg:px-20 py-15 bg-gray-800 text-gray-400">
            <div className='flex lg:flex-row flex-col gap-25 text-2xl'>

                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-yellow-500'>OUR SERVICES</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[20px]'>
                        <li><a href="">Umrah Packages</a></li>
                        <li><a href="">Flight Booking</a></li>
                        <li><a href="">Visa Assistance</a></li>
                        <li><a href="">Hotel Stay</a></li>
                        <li><a href="">Ziyarat Tours</a></li>
                        <li><a href="">Transport</a></li>
                        <li><a href="">Meal Plans</a></li>
                        <li><a href="">Group Booking</a></li>
                        <li><a href="">Private Umrah</a></li>
                        <li><a href="">24/7 Support</a></li>
                    </ul>
                </div>

                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-yellow-500'>HELP</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[20px]'>
                        <li><a href="">Customer Care</a></li>
                        <li><a href="">Shipping & Returns</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Poilicy</a></li>
                    </ul>
                </div>
                
                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-yellow-500'>ABOUT</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[20px]'>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">License & Registration</a></li>
                    </ul>
                </div>
            </div>

            <div className='w-50'>
                <img src={logo} className='object-contain brightness-1 invert-100' alt="" />
            </div>
        </div>

        <div className="flex items-center lg:justify-between lg:flex-row flex-col gap-5 mt-[1px] py-5 lg:px-20 bg-gray-800 text-gray-400">
            <div className="flex lg:flex-row flex-col items-center gap-1">
                <p>Got a question? Contact: </p>
                <a className="text-yellow-500" href="">zuroorytt@gmail.com</a>
            </div>

            <p>All rights reserved &copy; 2025 Zuroory Tour and Travels</p>
        </div>
    </footer> 
    </>
  )
}

export default Footer
