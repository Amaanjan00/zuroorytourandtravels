import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Whatsapp from '../../Components/Whatsapp'

function Aboutus() {
  return (
    <>
        <Whatsapp/>
        <Header/>
        <div className='p-10 md:px-40 text-[20px] text-gray-500 flex flex-col gap-10'>

          <h1 className='text-yellow-500 text-5xl font-bold'>About Us</h1>

          <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>Who We Are</h2>
            <p>Zuroory Tour and Travels is a dedicated travel agency committed to providing high-quality, reliable, and comfortable Umrah travel services. Although we are a newly established agency, our core team comprises professionals with years of hands-on experience in the travel and tourism industry. We understand the emotional and spiritual significance of Umrah and aim to make your journey to the holy cities memorable, meaningful, and completely hassle-free.</p>
          </section>

          <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>Our Mission</h2>
            <p>
              Our mission is simple yet profound — to provide best-in-class service and comfort to every pilgrim who chooses to travel with us. We strive to eliminate the common stresses of travel by offering a smooth, transparent, and spiritually enriching experience from start to finish.
              <br />
              <br />
              We believe that the journey of Umrah should not just be a trip, but a well-guided spiritual transformation. That’s why every service we offer is centered on convenience, trust, and care.
            </p>
          </section>

          <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>What We Offer</h2>
            <p>We provide a full suite of Umrah-related services designed to make your experience easy and worry-free:</p>
            <ul className='list-disc list-outside px-5'>
              <li>Tailored Umrah Packages</li>

              <li>Visa Assistance</li>

              <li>Air Ticket Booking</li>

              <li>Comfortable Hotel Stays</li>

              <li>Private and Group Transport</li>

              <li>Guided Ziyarat Tours</li>

              <li>Meal Plans and Add-ons</li>

              <li>24/7 Customer Support</li>
            </ul>
            <p>Thanks to our wide network of trusted partners and expert collaborators, we ensure all services are carried out with professionalism and respect for your spiritual goals.</p>
          </section>

          <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>Why Choose Zuroory</h2>
            <ul className='list-disc list-outside px-5'>
              <li>Experienced Team with deep knowledge of religious travel</li>

              <li>Trusted Network of service providers in Saudi Arabia</li>

              <li>Flexible Packages to suit all budgets and preferences</li>

              <li>Dedicated Support before, during, and after the trip</li>

              <li>Focus on Comfort, convenience, and spiritual well-being</li>
            </ul>
          </section>

          <section className='flex flex-col gap-3 lg:text-center pt-10'>
            <h2 className='text-5xl text-yellow-500 font-bold'>Begin Your Journey With Us</h2>
            <p><b className='text-yellow-500'>At Zuroory Tour and Travels</b>, we take pride in being a part of your sacred journey. Whether you are performing Umrah for the first time or returning for a renewed experience, our team is here to support you every step of the way.</p>
            <b>Experience peace of mind, comfort, and care — the Zuroory way.</b>
          </section>

        </div>
        <Footer/>
    </>
  )
}

export default Aboutus
