import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function TermsAndConditions() {
  return (
    <>
        <Header/>
        <div className='p-10 md:px-40 text-[20px] text-gray-500 flex flex-col gap-10'>

            <h1 className='text-yellow-500 text-5xl font-bold'>Terms and Conditions</h1>

            <section>
                <p><b>Effective date: 02/06/2025</b></p>
                <br />
                <p>Welcome to <b>Zuroory Tour and Travels</b>. By booking a package or using our services, you agree to the following terms and conditions. Please read them carefully before proceeding with any transactions.</p>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>1. Booking and Payments</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>All bookings must be made through our authorized channels (website, WhatsApp, or office).</li>

                    <li>A minimum advance payment is required at the time of booking. Full payment must be completed before departure.</li>

                    <li>Payment methods include bank transfer, UPI, or other approved modes. We do not accept cash beyond permissible limits as per local laws.</li>

                    <li>All prices are subject to change based on availability, airline charges, exchange rates, and Saudi regulations.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>2. Cancellation and Refund Policy</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>Cancellations must be informed in writing via email or official communication channels.</li>

                    <li>Refunds (if applicable) will be processed based on how early the cancellation is made: 
                        <span>
                        <ul>
                            <li>30+ days before travel: 80% refund (excluding non-refundable visa/airline fees)</li>
                            <li>15–29 days before travel: 50% refund</li>
                            <li>Less than 15 days: No refund</li>
                        </ul>
                        </span>
                    </li>

                    <li>Visa rejection or delays beyond our control are not refundable, but we may assist with rebooking options.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>3. Passport and Visa Requirements</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>Passports must be valid for at least 6 months from the date of travel.</li>

                    <li>It is the responsibility of the traveler to provide accurate and complete documents for visa processing.</li>

                    <li>Zuroory Tour and Travels is not liable for delays, rejections, or penalties due to incorrect or incomplete documents.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>4. Package Inclusions and Exclusions</h2>
                <p>Each Umrah package will clearly list inclusions and exclusions. Unless specified, packages do not include:</p>
                <ul className='list-disc list-outside px-5'>
                    <li>PCR tests, medical insurance, personal expenses</li>

                    <li>Additional Ziyarat tours not listed</li>

                    <li>Special meals or room service</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>5. Travel Itinerary and Changes</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>All itineraries are subject to change due to airline schedules, weather, or unforeseen circumstances.</li>

                    <li>Zuroory will make every effort to inform travelers in advance and minimize inconvenience.</li>

                    <li>The company is not responsible for missed flights or delays caused by external factors beyond our control.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>6. Health and Safety</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>All travelers must adhere to health regulations set by Saudi authorities.</li>

                    <li>If a traveler is unwell or unfit to travel, we may require a medical certificate.</li>

                    <li>Zuroory Tour and Travels will not be liable for any medical issues, injuries, or accidents during the trip, though we assist in arranging emergency support.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>7. Code of Conduct</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>All travelers are expected to behave respectfully and follow Islamic guidelines during the pilgrimage.</li>

                    <li>Disruptive or unlawful behavior may lead to removal from the group at the traveler’s own expense.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>8. Liability Disclaimer</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>Zuroory Tour and Travels acts as an intermediary between travelers and service providers (airlines, hotels, transport).</li>

                    <li>We are not liable for service failures, losses, or injuries caused by third parties or acts of God.</li>

                    <li>Compensation claims are limited to the cost of the package booked, subject to case evaluation.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>9. Privacy and Data Use</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>Personal information collected during the booking process will be used solely for travel arrangements and not shared with third parties except where required by law or service necessity.</li>
                </ul>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold'>10. Jurisdiction</h2>
                <ul className='list-disc list-outside px-5'>
                    <li>All disputes are subject to the jurisdiction of courts located in West Bengal, India.</li>
                </ul>
            </section>

            <section>
                <b className='text-yellow-500'>By booking with Zuroory Tour and Travels, you confirm that you have read, understood, and agree to these terms and conditions.</b>
            </section>

        </div>
        <Footer/>
    </>
  )
}

export default TermsAndConditions
