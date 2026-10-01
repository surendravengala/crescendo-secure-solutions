import { useState } from 'react'
import './Contact.css'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwMwcUSoCR6N_s7TxlBv64p5PX3NzlOUwr8FvZEEpFJo1J9hVzU55zNR5iCm3cINWEQ/exec'

const services = [
  'Armed Security',
  'Un-Armed Security',
  'Hospital Security',
  'Industrial Security',
  'Hotel & Motel Security',
  'MNC & Company Security',
  'Schools, Colleges & Institutional Security',
  'Real Estate & Venture Security',
  'Bouncer Security',
  'Escort Security',
  'Malls & Commercials Security',
  'Event Security'
]

const initialFormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  service: '',
  location: '',
  message: ''
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData)

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))

    setSubmitted(false)
    setErrorMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSubmitted(false)
    setErrorMessage('')
    setSubmitting(true)

    try {
      /*
       * IMPORTANT:
       * Use FormData here.
       * Do NOT manually set Content-Type.
       */
      const payload = new FormData()

      payload.append('type', 'contact')
      payload.append('name', formData.name.trim())
      payload.append('company', formData.company.trim())
      payload.append('phone', formData.phone.trim())
      payload.append('email', formData.email.trim())
      payload.append('service', formData.service)
      payload.append('location', formData.location.trim())
      payload.append('message', formData.message.trim())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      })

      /*
       * Google Apps Script receives the request and
       * saves it into Contact Enquiries.
       *
       * no-cors gives an opaque response, so we don't
       * try to call response.json().
       */

      setSubmitted(true)

      setFormData(initialFormData)

    } catch (error) {
      console.error('Contact form submission error:', error)

      setErrorMessage(
        'Unable to send your enquiry. Please try again.'
      )

    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

  <div className="contact-hero-content">

    <div className="contact-hero-left">

      <div className="contact-hero-label">
        <span></span>
        CONTACT US
      </div>

      <h1>
        Let&apos;s Talk
        <br />
        About Your
        <br />
        Security
      </h1>

    </div>

    <div className="contact-hero-right">

      <p>
        Tell us about your security requirements and
        our team will work with you to create the right
        security solution for your organisation.
      </p>

    </div>

  </div>

</section>


      {/* =====================================================
          CONTACT MAIN
      ===================================================== */}

      <section className="contact-section">

        <div className="contact-container">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="contact-information">

            <span className="contact-section-label">
              GET IN TOUCH
            </span>

            <h2>
              We&apos;re here to help
            </h2>

            <p className="contact-intro">
              Whether you need security personnel for your
              organisation, property, event or institution,
              our team is ready to understand your requirements
              and provide the right security solution.
            </p>


            {/* ADDRESS */}

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <span>⌖</span>
              </div>

              <div>
                <h3>Our Address</h3>

                <p>
                  Plot No: 4-79/5, Flat No: 101,
                  <br />
                  1st Floor Omkar Kirana Shop Street
                  <br />
                  Mettkaniguda, Besides,
                  <br />
                  Gajularamaram,
                  <br />
                  Hyderabad, Telangana 500055
                </p>
              </div>

            </div>


            {/* PHONE */}

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <span>☎</span>
              </div>

              <div>
                <h3>Call Us</h3>

                <a href="tel:+917675904237">
                  +91 7675-904237
                </a>
              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <span>✉</span>
              </div>

              <div>
                <h3>Email Us</h3>

                <a href="mailto:crescendoss26@gmail.com">
                  crescendoss26@gmail.com
                </a>
              </div>

            </div>

          </div>


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div className="contact-form-card">

            <div className="contact-form-heading">

              <span>
                SEND AN ENQUIRY
              </span>

              <h2>
                Tell us what you need
              </h2>

              <p>
                Fill in the details below and our team will
                contact you.
              </p>

            </div>


            <form onSubmit={handleSubmit}>

              {/* NAME + COMPANY */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="name">
                    Full Name
                    <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="company">
                    Company / Organisation
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                  />

                </div>

              </div>


              {/* PHONE + EMAIL */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="email">
                    Email Address
                    <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* SERVICE */}

              <div className="contact-field">

                <label htmlFor="service">
                  Service Required
                  <span>*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a security service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}

                </select>

              </div>


              {/* LOCATION */}

              <div className="contact-field">

                <label htmlFor="location">
                  Location
                  <span>*</span>
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Where is the security service required?"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="contact-field">

                <label htmlFor="message">
                  Message
                  <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your security requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="contact-success-message">
                  <strong>Enquiry submitted successfully!</strong>

                  <span>
                    Thank you for contacting Crescendo Secure
                    Solutions. Our team will get back to you shortly.
                  </span>
                </div>
              )}


              {/* ERROR MESSAGE */}

              {errorMessage && (
                <div className="contact-error-message">
                  {errorMessage}
                </div>
              )}


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
                disabled={submitting}
              >

                {submitting
                  ? 'Sending Enquiry...'
                  : 'Send Enquiry'
                }

                {!submitting && (
                  <span>→</span>
                )}

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="contact-map-section">

        <div className="contact-container">

          <div className="contact-map-heading">

            <span className="contact-section-label">
              FIND US
            </span>

            <h2>
              Our Location
            </h2>

          </div>


          <div className="contact-map">

            <iframe
              title="Crescendo Secure Solutions location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.5403509101116!2d78.42876989999999!3d17.529442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f1bb6c8a947%3A0x8a4a79bf1cfe63cc!2sCrescendo%20Secure%20Solutions!5e0!3m2!1sen!2sin!4v1790774960801!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

        </div>

      </section>

    </main>
  )
}