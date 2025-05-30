import hotel from './assets/icons/1.png'
import flight from './assets/icons/2.png'
import visa from './assets/icons/3.png'
import zamzam from './assets/icons/4.png'
import food from './assets/icons/5.png'
import ziyarat from './assets/icons/6.png'
import transportation from './assets/icons/7.png'
import umrahkit from './assets/icons/8.png'

function Docsrequired() {
  return (
    <>
        <div className='flex flex-col font-bold mt-5 md:mt-12 md:mb-10 w-full text-gray-600'>

            <div className='p-2 text-center'>
                <h1 className='text-3xl uppercase lg:text-5xl'>Package Includes</h1>
            </div>

            <div className='hidden md:inline-grid md:grid-cols-2 lg:grid-cols-4 lg:px-30 gap-5 items-center justify-center font-bold text-[18px]'>
                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={hotel} alt="" />
                    <h1 className='text-2xl uppercase'>Hotel</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={flight} alt="" />
                    <h1 className='text-2xl uppercase'>Flight</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={visa} alt="" />
                    <h1 className='text-2xl uppercase'>Visa</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={zamzam} alt="" />
                    <h1 className='text-2xl uppercase'>Zam Zam</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={food} alt="" />
                    <h1 className='text-2xl uppercase'>Food</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={ziyarat} alt="" />
                    <h1 className='text-2xl uppercase'>Ziyarat</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={transportation} alt="" />
                    <h1 className='text-2xl uppercase'>Transportation</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={umrahkit} alt="" />
                    <h1 className='text-2xl uppercase'>Umrah Kit</h1>
                </div>
            </div>

        </div>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden ml-8 mb-8 pt-8">

            <div className="min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4">
                <img className='h-70 w-70 object-contain p-5 py-0' src={hotel} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Hotel</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={flight} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Flight</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={visa} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Visa</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={zamzam} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Zam Zam</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={food} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Food</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={ziyarat} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Ziyarat</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={transportation} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Transportation</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={umrahkit} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Umrah Kit</h1>
            </div>
        </div>   
    </>

  )
        
}

export default Docsrequired
