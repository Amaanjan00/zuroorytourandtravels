import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Aboutus from './Pages/About Us/Aboutus.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import App from './App.jsx'
import TermsAndConditions from './Pages/TermsAndConditions.jsx'
import RefundPolicy from './Pages/RefundPolicy.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/about', element: <Aboutus/>},
  {path: '/contact', element: <Contact/>},
  {path: '/terms-and-conditions', element: <TermsAndConditions/>},
  {path: '/refund-policy', element: <RefundPolicy/>},
  {path: '/privacy-policy', element: <PrivacyPolicy/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
