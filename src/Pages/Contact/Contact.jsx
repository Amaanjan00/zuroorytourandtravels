import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function Contact() {
  return (
    <>
        <Header/>
        <div>
            <div className='p-10 md:px-20 lg:px-40 text-[20px] text-gray-500 flex flex-col gap-10'>
              <h1 className='text-yellow-500 text-5xl font-bold'>Contact Us</h1>

              <h2 className='text-4xl font-bold'>Find Us!</h2>

              <section className='flex flex-col lg:flex-row justify-between items-center md:items-start gap-5'>
                <div className='hidden md:flex w-fit shadow-2xl rounded-2xl p-2'>
                  <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.363787014492!2d88.30949177539792!3d22.565493379496697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027832e364299b%3A0x8f813fc3c69812d1!2s2%2C%20Tarapada%20Chatterjee%20Ln%2C%20Naora%2C%20Shibpur%2C%20Howrah%2C%20West%20Bengal%20711103!5e0!3m2!1sen!2sin!4v1748691398339!5m2!1sen!2sin" width="500" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='flex md:hidden w-fit shadow-2xl rounded-2xl p-2 mb-20'>
                  <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.363787014492!2d88.30949177539792!3d22.565493379496697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027832e364299b%3A0x8f813fc3c69812d1!2s2%2C%20Tarapada%20Chatterjee%20Ln%2C%20Naora%2C%20Shibpur%2C%20Howrah%2C%20West%20Bengal%20711103!5e0!3m2!1sen!2sin!4v1748691398339!5m2!1sen!2sin" width="350" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='lg:p-10 flex flex-col gap-5'>
                  <p><b className='text-yellow-500'>Address: </b>2/5 Tarapada Chatterjee Lane, Shibpur, Howrah, West Bengal - 711103</p>
                  <p><b className='text-yellow-500'>Contact No: </b><a href="tel:+919007167409">+91 9007167409</a></p>
                  <p><b className='text-yellow-500'>Email Address: </b><a href="mailto:zuroorytt@gmail.com">zuroorytt@gmail.com</a></p>
                </div>
              </section>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact
