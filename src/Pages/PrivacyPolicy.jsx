import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function PrivacyPolicy() {
  return (
    <>
      <Header/>
      <div className='p-10 md:px-40 text-[20px] text-gray-500 flex flex-col gap-10'>

        <h1 className='text-yellow-500 text-5xl font-bold'>Privacy Policy</h1>

        <section>
            <p><b>Effective date:</b></p>
            <br />
            <p>This Privacy Policy outlines how <b>Zuroory Tour and Travels</b> collects, uses, and protects your personal information when you use our services. By accessing or using our website or booking with us, you agree to the terms of this policy.</p>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>1. Information We Collect</h2>
            <ul className='list-disc list-outside px-5'>
                <li>Full name, passport details, contact information (email, phone number)</li>
                <li>Payment details and billing information</li>
                <li>Travel preferences and booking history</li>
                <li>Any additional information voluntarily provided by you for visa and travel arrangements</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>2. How We Use Your Information</h2>
            <ul className='list-disc list-outside px-5'>
                <li>To process bookings, visas, and travel arrangements</li>
                <li>To contact you regarding your travel plans</li>
                <li>To improve our services and customer support</li>
                <li>To send important travel updates, offers, and promotional information (only with your consent)</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>3. Data Sharing and Disclosure</h2>
            <ul className='list-disc list-outside px-5'>
                <li>We may share your data with airlines, visa authorities, and hotel partners solely for the purpose of booking and processing your travel.</li>
                <li>We do not sell or rent your personal information to third parties.</li>
                <li>Your information may be disclosed when legally required or to comply with regulatory obligations.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>4. Data Security</h2>
            <ul className='list-disc list-outside px-5'>
                <li>We take reasonable measures to protect your data from unauthorized access, alteration, or disclosure.</li>
                <li>However, no system is 100% secure, and we cannot guarantee absolute security of your data.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>5. Cookies and Tracking</h2>
            <ul className='list-disc list-outside px-5'>
                <li>We may use cookies to enhance user experience and track website usage patterns.</li>
                <li>You can manage your browser settings to disable cookies at any time.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>6. Your Rights</h2>
            <ul className='list-disc list-outside px-5'>
                <li>You can request to access, correct, or delete your personal data held by us.</li>
                <li>You may opt out of marketing communications at any time.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>7. Third-Party Links</h2>
            <ul className='list-disc list-outside px-5'>
                <li>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>8. Policy Updates</h2>
            <ul className='list-disc list-outside px-5'>
                <li>We may update this policy from time to time. Changes will be posted on our website with the revised effective date.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>9. Contact Us</h2>
            <ul className='list-disc list-outside px-5'>
                <li>If you have questions or concerns about our Privacy Policy, please contact us at: <br /> <b>Email:</b> zuroorytravels@gmail.com</li>
            </ul>
        </section>

        <section>
            <b className='text-yellow-500'>By using our services, you agree to the collection and use of your information as described in this Privacy Policy.</b>
        </section>

      </div>
      <Footer/>
    </>
  )
}

export default PrivacyPolicy
