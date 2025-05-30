import video from './assets/headervideo.mp4'

function Video() {
  return (
    <>
      <div className='relative h-[90vh] w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={video}></video>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-700/80'></div>
        <div className='absolute text-white bottom-0 inset-x-0 p-10 lg:inset-x-20 lg:bottom-20 lg:w-[50%] flex flex-col gap-5'>
            <h1 className='text-4xl uppercase md:normal-case lg:text-5xl font-extrabold'>Embark on a blessed Umrah journey with comfort, convenience, and spiritual fulfillment.</h1>
            <p className='text-[18px] uppercase md:normal-case lg:text-2xl lg:pr-50'>Seamless Umrah experience with premium services and guided support.</p>
        </div>
      </div>
    </>
  )
}

export default Video
