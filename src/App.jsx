import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import AboutSection from './components/AboutSection'
import Industries from './components/Industries'
import Process from './components/Process'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'

import About from './pages/About'
import ServicesPage from './pages/Services'
import WhyUs from './pages/WhyUS'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import RequestQuote from './pages/RequestQuote'

import './styles.css'

import { FaWhatsapp } from 'react-icons/fa'


/* =========================================================
   COMMON WHATSAPP BUTTON
========================================================= */

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-btn"
      href="https://wa.me/7675904237"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Stats />

        <AboutSection />

        <Industries />

        <Process />

        <Trust />

        <CTA />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  )
}


/* =========================================================
   TEMPORARY PAGE
   Careers / Contact / Unknown pages
========================================================= */

function PlaceholderPage({ title }) {
  return (
    <>
      <Header />

      <main className="placeholder-page">
        <div className="placeholder-content">

          <div className="placeholder-eyebrow">
            CRESCENDO SECURE SOLUTIONS
          </div>

          <h1>{title}</h1>

          <p>
            This page will be developed next.
          </p>

        </div>
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  )
}


/* =========================================================
   APP ROUTES
========================================================= */

export default function App() {
  return (
    <Routes>

      {/* =================================================
          HOME
      ================================================= */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* =================================================
          ABOUT
      ================================================= */}

      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
            <WhatsAppButton />
          </>
        }
      />


      {/* =================================================
          SERVICES
      ================================================= */}

      <Route
        path="/services"
        element={
          <>
            <Header />
            <ServicesPage />
            <WhatsAppButton />
          </>
        }
      />


      {/* =================================================
          WHY US
      ================================================= */}

      <Route
        path="/why-us"
        element={
          <>
            <Header />
            <WhyUs />
            <WhatsAppButton />
          </>
        }
      />


      {/* =================================================
          CAREERS
      ================================================= */}

      <Route
  path="/careers"
  element={
    <>
      <Header />
      <Careers />
      <Footer />
      <WhatsAppButton />
    </>
  }
/>


      {/* =================================================
          CONTACT
      ================================================= */}

      <Route
  path="/contact"
  element={
    <>
      <Header />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  }
/>

 {/* =================================================
            Request quote
================================================= */}

<Route
    path="/request-quote"
    element={
      <>
        <Header />
        <RequestQuote />
        <Footer />
        <WhatsAppButton />
      </>
    }
  />






      {/* =================================================
          UNKNOWN URL
      ================================================= */}

      <Route
        path="*"
        element={
          <PlaceholderPage title="Page Not Found" />
        }
      />

    </Routes>
  )
}