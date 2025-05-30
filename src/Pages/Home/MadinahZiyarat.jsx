import masjidnabawi from './assets/masjidnabawi.jpeg'
import baqi from './assets/baqi.jpg'
import masjidquba from './assets/masjidquba.jpg'
import uhud from './assets/uhud.jpg'

function MakkahZiyarat() {
  return (
    <>
      <div className='px-0 py-5 mt-5 flex flex-col gap-7 md:px-20'>
      
        <div className='px-10'>
            <h1 className='uppercase text-3xl font-bold text-yellow-500'>Ziyarat locations in Madinah</h1>
        </div>

        <div className='flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-5'>

            <div className='relative flex shrink-0 ml-10'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={masjidnabawi} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Masjid Nabawi</h1>
                    <p className='text-[18px] text-white'>Prophet Muhammad’s mosque and resting place in Madinah.</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={baqi} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Baqi Cemetery</h1>
                    <p className='text-[18px] text-white'>Historic cemetery housing graves of Prophet’s family, companions.</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={masjidquba} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Masjid Quba</h1>
                    <p className='text-[18px] text-white'>First mosque built in Islam by Prophet Muhammad.</p>
                </div>
            </div>

            <div className='relative flex shrink-0 mr-10'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={uhud} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Uhud Mountain</h1>
                    <p className='text-[18px] text-white'>Site of major battle between Muslims and Quraysh.</p>
                </div>
            </div>

        </div>

      </div>
    </>
  )
}

export default MakkahZiyarat
