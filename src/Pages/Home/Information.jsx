import pic1 from './assets/umrah1.png'
import pic2 from './assets/umrah2.png'
import pic3 from './assets/umrah3.png'

function Information() {
  return (
    <>
      <div className='flex flex-col lg:flex-row bg-gray-800 mt-20 pt-10 md:p-14 justify-center items-center'>

        <div className='md:hidden px-10'>
            <h1 className='text-5xl text-center text-yellow-500 font-bold uppercase'>Best in class Umrah package</h1>
        </div>

        <div className='grid grid-cols-2 p-8 gap-4'>
            <img className='h-70 object-cover rounded-2xl shadow-2xl' src={pic1} alt="" />
            <img className='h-70 object-cover rounded-2xl shadow-2xl' src={pic2} alt="" />
            <div className='col-span-2 px-4 py-2 flex justify-center items-center'>
                <img className='h-70 object-cover shadow-2xl rounded-2xl' src={pic3} alt="" />
            </div>
        </div>

        <div className='p-6 px-10 flex flex-col gap-4 text-yellow-500'>
            <div className='flex flex-col gap-4'>
                <h1 className='hidden md:block text-5xl font-bold uppercase'>Best in class Umrah package</h1>
                <h2 className='text-3xl font-bold md:font-medium'>Experience a Blessed Journey to Makkah & Madinah</h2>
            </div>
            <div className='text-2xl'>
                <ul className='flex flex-col gap-2 list-disc pt-4 p-8'>
                    <li><p><b>Premium Accommodation</b> – Stay in top-rated hotels near Masjid al-Haram & Masjid an-Nabawi.</p></li>
                    <li><p><b>Visa Assistance</b> – Hassle-free Umrah visa processing.</p></li>
                    <li><p><b>Comfortable Transport</b> – Private airport transfers & intercity travel between Makkah & Madinah.</p></li>
                    <li><p><b>Ziyarah Tours</b> – Guided visits to historical Islamic sites in both cities.</p></li>
                    <li><p><b>Meals Included</b> – Daily breakfast with optional full-board meal plans.</p></li>
                    <li><p><b>24/7 Assistance</b> – Dedicated support for a seamless experience.</p></li>
                </ul>
            </div>
        </div>

        

      </div>
    </>
  )
}

export default Information
