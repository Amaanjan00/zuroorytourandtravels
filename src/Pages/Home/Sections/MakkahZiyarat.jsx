import cavehira from '../assets/cavehira.jpg'
import cavethawr from '../assets/cavethawr.jpg'
import masjidaisha from '../assets/masjidaisha.jpg'
import mina from '../assets/mina.jpg'
import arafat from '../assets/arafat.jpg'

function MakkahZiyarat() {
  return (
    <>
      <div className='px-0 py-5 mt-10 flex flex-col gap-7 md:px-20'>

        <div className='px-10'>
            <h1 className='uppercase text-3xl font-bold text-yellow-500'>Ziyarat locations in Makkah</h1>
        </div>

        <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-5'>

            <div className='relative flex shrink-0 ml-5'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={cavehira} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Cave Hira</h1>
                    <p className='text-[18px] text-white'>Where Prophet Muhammad received the first revelation, Quran.</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={cavethawr} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Cave Thawr</h1>
                    <p className='text-[18px] text-white'>Shelter of Prophet Muhammad and Abu Bakr during migration</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={masjidaisha} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Masjid Aisha</h1>
                    <p className='text-[18px] text-white'>Miqat mosque for pilgrims to enter Ihram from Makkah</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={mina} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Mina</h1>
                    <p className='text-[18px] text-white'>Tented city where Hajj pilgrims stay and perform stoning ritual.</p>
                </div>
            </div>

            <div className='relative flex shrink-0 mr-10'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={arafat} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Arafat</h1>
                    <p className='text-[18px] text-white'>Key Hajj site where pilgrims gather for supplication and prayer.</p>
                </div>
            </div>

        </div>

      </div>
    </>
  )
}

export default MakkahZiyarat
