import banner from './assets/banner.jpg'

function Pricing() {
  return (
    <>
      <div className=''>

        <div className='border-2 m-4 lg:m-10 rounded-2xl border-gray-200 flex flex-col lg:flex-row justify-between'>

          <div className='flex flex-col gap-10 p-10 lg:w-[50vw]'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-yellow-500 text-3xl'>Pricing</h1>
              <div className='flex flex-col gap-4'>
                <h1 className='text-5xl font-medium'>Simple Pricing, No hidden Costs</h1>
                <p className='text-[18px] font-medium text-gray-500'>With Zuroory Tour and Travels, you dont have to worry about any hidden costs.</p>
              </div>
            </div>

          <div className=''>

            <div className=''>

              <div className='flex flex-col gap-4 mb-10'>
                <h1 className='text-4xl'>The Umrah Package</h1>
                <p className='text-[18px] font-medium text-gray-500'>Umrah is a spiritual journey to the holy city of Makkah that can be performed at any time of the year. It involves a set of sacred rituals including Tawaf (circumambulation of the Kaaba) and Sa’i (walking between Safa and Marwah), symbolizing devotion, humility, and the pursuit of Allah’s blessings.</p>
              </div>

              <div className=''>
                <h1 className='text-2xl text-yellow-500'>What's included</h1>
                <ul className='text-[18px] text-gray-500 list-disc list-inside p-5 grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
                  <li>Hotel</li>
                  <li>Flight</li>
                  <li>Zam Zam</li>
                  <li>Fooding</li>
                  <li>Ziyarat</li>
                  <li>Laundry</li>
                  <li className='md:col-span-2'>24x7 Customer service</li>
                </ul>
              </div>

            </div>


          </div>
          </div>

          <div className='p-8 m-3 bg-yellow-50 rounded-2xl text-center flex flex-col gap-5 justify-center'>
            <h2 className='text-2xl text-gray-500 font-bold'>Price starts at only</h2>
            <div className='flex items-baseline justify-center'>
              <h1 className='text-5xl font-bold px-2 py-4'>₹1,09,999</h1>
              <p className='text-2xl font-medium text-gray-500'>INR</p>
            </div>
            <button className='bg-yellow-500 py-2 font-bold text-2xl rounded-4xl'>Inquire Now</button>
            <p>*The pricing for customised packages will be priced according to the itinerary</p>
          </div>

        </div>

        
      </div>
    </>
  )
}

export default Pricing
