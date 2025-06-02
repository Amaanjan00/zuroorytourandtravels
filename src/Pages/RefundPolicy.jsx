import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function RefundPolicy() {
  return (
    <>
      <Header/>
      <div className='p-10 md:px-40 text-[20px] text-gray-500 flex flex-col gap-10'>

        <h1 className='text-yellow-500 text-5xl font-bold'>Refund Policy</h1>

        <section>
            <p><b>Effective date:</b></p>
            <br />
            <p>At <b>Zuroory Tour and Travels</b>, we strive to provide all our customers with the best possible service and clarity when it comes to cancellations and refunds. This policy outlines the conditions under which refunds may be granted and the process for requesting them.</p>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>1. Cancellation by Customer</h2>
            <ul className='list-disc list-outside px-5'>
                <li>All cancellation requests must be submitted in writing via email or official WhatsApp communication.</li>
                <li>Refund eligibility depends on how many days before the scheduled departure the cancellation is made.</li>
                <li>Refunds are processed excluding any non-refundable charges like visa fees, airfare, or service fees.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>2. Refund Eligibility</h2>
            <ul className='list-disc list-outside px-5'>
                <li><b>Within 7-days of the booking</b> 80% Refundable</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>3. Non-Refundable Cases</h2>
            <ul className='list-disc list-outside px-5'>
                <li>Visa rejections, delays, or errors due to incorrect documentation</li>
                <li>Missed flights or failure to show up at the time of departure</li>
                <li>Services that have already been utilized, such as airline tickets or hotel stays</li>
                <li>Force Majeure events (natural disasters, pandemics, political unrest, etc.)</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>4. Cancellation by Zuroory Tour and Travels</h2>
            <ul className='list-disc list-outside px-5'>
                <li>If we are forced to cancel your booking due to unavoidable reasons, you will receive a full or partial refund depending on the situation.</li>
                <li>We are not liable for compensation beyond the cost of the package.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>5. Refund Process</h2>
            <ul className='list-disc list-outside px-5'>
                <li>Once approved, refunds will be processed within 7–14 business days.</li>
                <li>Refunds will be made via the original mode of payment or bank transfer.</li>
                <li>Customers will be notified via email/WhatsApp once the refund has been processed.</li>
            </ul>
        </section>

        <section className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>6. Contact for Refunds</h2>
            <ul className='list-disc list-outside px-5'>
                <li>To request a refund, contact us at:<br />
                    <b>Email:</b> zuroorytt@gmail.com<br />
                    <b>Phone/WhatsApp:</b>+91 9007167409
                </li>
            </ul>
        </section>

        <section>
            <b className='text-yellow-500'>By booking with Zuroory Tour and Travels, you acknowledge and agree to the terms of this Refund Policy.</b>
        </section>

      </div>
      <Footer/>
    </>
  )
}

export default RefundPolicy
