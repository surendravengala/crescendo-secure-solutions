import { useState } from 'react'
import './RequestQuote.css'

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


const personnelOptions = [
  '1',
  '2',
  '3',
  '5',
  '10',
  '15',
  '20',
  '25',
  '50',
  '50+'
]


const shiftOptions = [
  'Day Shift',
  'Night Shift',
  '24 Hours',
  'Day & Night',
  'Custom Requirement'
]


const initialFormData = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  service: '',
  location: '',
  personnel: '',
  shift: '',
  startDate: '',
  requirements: ''
}


export default function RequestQuote() {

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

    setSubmitting(true)

    setSubmitted(false)

    setErrorMessage('')


    try {

      const payload = new FormData()

      payload.append('type', 'quote')

      payload.append(
        'fullName',
        formData.fullName.trim()
      )

      payload.append(
        'companyName',
        formData.companyName.trim()
      )

      payload.append(
        'phone',
        formData.phone.trim()
      )

      payload.append(
        'email',
        formData.email.trim()
      )

      payload.append(
        'service',
        formData.service
      )

      payload.append(
        'location',
        formData.location.trim()
      )

      payload.append(
        'personnel',
        formData.personnel
      )

      payload.append(
        'shift',
        formData.shift
      )

      payload.append(
        'startDate',
        formData.startDate
      )

      payload.append(
        'requirements',
        formData.requirements.trim()
      )


      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      })


      setSubmitted(true)

      setFormData(initialFormData)

    } catch (error) {

      console.error(
        'Quote form submission error:',
        error
      )

      setErrorMessage(
        'Unable to submit your quote request. Please try again.'
      )

    } finally {

      setSubmitting(false)

    }
  }


  return (

    <main className="quote-page">


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="quote-hero">

        <div className="quote-hero-content">

          <div className="quote-hero-left">

            <div className="quote-hero-label">

              <span></span>

              NO-OBLIGATION ENQUIRY

            </div>


            <h1>
              Request a
              <br />
              Security
              <br />
              Quote
            </h1>

          </div>


          <div className="quote-hero-right">

            <p>
              Tell us what you need protected. We will use
              your requirements to prepare the right security
              solution for your organisation.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE FORM SECTION
          ===================================================== */}

      <section className="quote-section">

        <div className="quote-container">


          {/* =================================================
              LEFT INFORMATION PANEL
              ================================================= */}

          <div className="quote-information">

           


            <div className="quote-info-label">

              <span></span>

              CRESCENDO SECURE SOLUTIONS

            </div>


            <h2>
              Protection begins with
              understanding your site.
            </h2>


            <p className="quote-info-description">
              Share the operating context, the coverage you
              need, and the timing. Our team will review your
              requirements and get back to you with the next
              steps.
            </p>


            <div className="quote-benefits">

              <div className="quote-benefit">
                <span>✓</span>
                <p>People-first planning</p>
              </div>


              <div className="quote-benefit">
                <span>✓</span>
                <p>Clear deployment details</p>
              </div>


              <div className="quote-benefit">
                <span>✓</span>
                <p>Practical next steps</p>
              </div>

            </div>

          </div>


          {/* =================================================
              FORM
              ================================================= */}

          <div className="quote-form-card">

            <div className="quote-form-heading">

              <span>
                REQUEST A QUOTE
              </span>

              <h2>
                Your requirement
              </h2>

              <p>
                Provide a few details and our team will
                contact you to understand your requirement.
              </p>

            </div>


            <form onSubmit={handleSubmit}>


              {/* =============================================
                  ROW 1
                  ============================================= */}

              <div className="quote-form-row">

                <div className="quote-field">

                  <label htmlFor="fullName">
                    Full Name
                    <span>*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="quote-field">

                  <label htmlFor="companyName">
                    Company Name
                    <span>*</span>
                  </label>

                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* =============================================
                  ROW 2
                  ============================================= */}

              <div className="quote-form-row">

                <div className="quote-field">

                  <label htmlFor="phone">
                    Phone
                    <span>*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="quote-field">

                  <label htmlFor="email">
                    Email
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


              {/* =============================================
                  ROW 3
                  ============================================= */}

              <div className="quote-form-row">

                <div className="quote-field">

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
                      Select a service
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


                <div className="quote-field">

                  <label htmlFor="location">
                    Location
                    <span>*</span>
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Enter service location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* =============================================
                  ROW 4
                  ============================================= */}

              <div className="quote-form-row">

                <div className="quote-field">

                  <label htmlFor="personnel">
                    Number of Personnel Required
                    <span>*</span>
                  </label>

                  <select
                    id="personnel"
                    name="personnel"
                    value={formData.personnel}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select number
                    </option>

                    {personnelOptions.map((number) => (
                      <option
                        key={number}
                        value={number}
                      >
                        {number}
                      </option>
                    ))}

                  </select>

                </div>


                <div className="quote-field">

                  <label htmlFor="shift">
                    Required Shift
                    <span>*</span>
                  </label>

                  <select
                    id="shift"
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a shift
                    </option>

                    {shiftOptions.map((shift) => (
                      <option
                        key={shift}
                        value={shift}
                      >
                        {shift}
                      </option>
                    ))}

                  </select>

                </div>

              </div>


              {/* =============================================
                  START DATE
                  ============================================= */}

              <div className="quote-form-row">

                <div className="quote-field">

                  <label htmlFor="startDate">
                    Start Date
                    <span>*</span>
                  </label>

                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="quote-field quote-empty-field">
                </div>

              </div>


              {/* =============================================
                  REQUIREMENTS
                  ============================================= */}

              <div className="quote-field">

                <label htmlFor="requirements">
                  Additional Requirements
                  <span>*</span>
                </label>

                <textarea
                  id="requirements"
                  name="requirements"
                  rows="5"
                  placeholder="Tell us about your security requirements..."
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* =============================================
                  SUCCESS
                  ============================================= */}

              {submitted && (

                <div className="quote-success">

                  <strong>
                    Quote request submitted successfully.
                  </strong>

                  <span>
                    Thank you. Our team will review your
                    requirements and contact you shortly.
                  </span>

                </div>

              )}


              {/* =============================================
                  ERROR
                  ============================================= */}

              {errorMessage && (

                <div className="quote-error">

                  {errorMessage}

                </div>

              )}


              {/* =============================================
                  SUBMIT
                  ============================================= */}

              <button
                type="submit"
                className="quote-submit"
                disabled={submitting}
              >

                {submitting
                  ? 'Submitting Request...'
                  : 'Request a Quote'
                }

                {!submitting && (
                  <span>→</span>
                )}

              </button>

            </form>

          </div>

        </div>

      </section>

    </main>

  )
}