import { useState } from 'react'
import './Careers.css'

const positions = [
  'Security Guard',
  'Security Supervisor',
  'Bouncer',
  'Facility Executive',
  'Security Officer',
  'Personal Protection Officer',
  'Operations Executive',
]

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwMwcUSoCR6N_s7TxlBv64p5PX3NzlOUwr8FvZEEpFJo1J9hVzU55zNR5iCm3cINWEQ/exec'

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    position: '',
    experience: '',
    message: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    // Remove old messages when user edits the form
    if (submitted) {
      setSubmitted(false)
    }

    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const selectPosition = (position) => {
    setFormData((previous) => ({
      ...previous,
      position,
    }))

    setSubmitted(false)
    setErrorMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSubmitted(false)
    setErrorMessage('')

    if (!GOOGLE_SCRIPT_URL) {
      setErrorMessage('Google Sheets connection is not configured.')
      return
    }

    setSubmitting(true)

    try {
      /*
       * IMPORTANT:
       * Google Apps Script reads values using e.parameter.
       * Therefore we send application/x-www-form-urlencoded
       * instead of JSON.
       */
      const formBody = new URLSearchParams()

      formBody.append('fullName', formData.fullName.trim())
      formBody.append('phone', formData.phone.trim())
      formBody.append('email', formData.email.trim())
      formBody.append('city', formData.city.trim())
      formBody.append('position', formData.position)
      formBody.append('experience', formData.experience.trim())
      formBody.append('message', formData.message.trim())

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBody.toString(),
      })

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status}. Please try again.`
        )
      }

      const result = await response.json()

      console.log('Google Apps Script response:', result)

      if (!result.success) {
        throw new Error(
          result.message || 'Application submission failed.'
        )
      }

      // Success
      setSubmitted(true)

      // Clear form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        position: '',
        experience: '',
        message: '',
      })
    } catch (error) {
      console.error('Application submission failed:', error)

      setErrorMessage(
        error.message ||
          'Unable to submit the application. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="careers-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="careers-hero">
        <div className="careers-hero-container">

          <div className="careers-hero-eyebrow">
            <span></span>
            <span>JOIN THE STANDARD</span>
          </div>

          <div className="careers-hero-grid">

            <div className="careers-hero-title">
              <h1>
                Build Your Career in
                <br />
                Security &amp; Facility
                <br />
                Services
              </h1>
            </div>

            <div className="careers-hero-description">
              <p>
                Bring discipline, responsibility, and a readiness to
                learn to a team building safer environments.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OPPORTUNITIES
      ===================================================== */}

      <section className="careers-opportunities">
        <div className="careers-opportunities-container">

          {/* =================================================
              LEFT — JOB OPPORTUNITIES
          ================================================= */}

          <div className="careers-opportunities-content">

            <div className="careers-section-eyebrow">
              <span></span>
              <span>OPPORTUNITIES</span>
            </div>

            <h2>
              Find your next
              <br />
              responsibility.
            </h2>

            <p className="careers-intro">
              Roles can include security guard, security supervisor,
              bouncer, facility executive, security officer, personal
              protection officer, and operations executive.
            </p>

            <div className="careers-role-grid">

              {positions.map((position) => (
                <button
                  type="button"
                  key={position}
                  className={`careers-role-card ${
                    formData.position === position
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => selectPosition(position)}
                >

                  <span className="careers-role-icon">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3l7 3v5c0 4.5-2.9 8.2-7 10-4.1-1.8-7-5.5-7-10V6l7-3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M9 12l2 2 4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>{position}</span>

                </button>
              ))}

            </div>

          </div>


          {/* =================================================
              RIGHT — APPLICATION FORM
          ================================================= */}

          <div className="careers-form-wrapper">

            <form
              className="careers-form"
              onSubmit={handleSubmit}
            >

              <div className="careers-form-grid">

                {/* FULL NAME */}

                <div className="careers-field">
                  <label htmlFor="career-full-name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    id="career-full-name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                  />
                </div>


                {/* PHONE */}

                <div className="careers-field">
                  <label htmlFor="career-phone">
                    Phone Number <span>*</span>
                  </label>

                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                  />
                </div>


                {/* EMAIL */}

                <div className="careers-field">
                  <label htmlFor="career-email">
                    Email <span>*</span>
                  </label>

                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                  />
                </div>


                {/* CITY */}

                <div className="careers-field">
                  <label htmlFor="career-city">
                    City <span>*</span>
                  </label>

                  <input
                    id="career-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    autoComplete="address-level2"
                    placeholder="Enter your city"
                  />
                </div>


                {/* POSITION */}

                <div className="careers-field">
                  <label htmlFor="career-position">
                    Position <span>*</span>
                  </label>

                  <div className="careers-select-wrapper">

                    <select
                      id="career-position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a position
                      </option>

                      {positions.map((position) => (
                        <option
                          value={position}
                          key={position}
                        >
                          {position}
                        </option>
                      ))}
                    </select>

                  </div>
                </div>


                {/* EXPERIENCE */}

                <div className="careers-field">
                  <label htmlFor="career-experience">
                    Experience <span>*</span>
                  </label>

                  <input
                    id="career-experience"
                    type="text"
                    name="experience"
                    placeholder="e.g. 2 years"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              {/* MESSAGE */}

              <div className="careers-field careers-message-field">

                <label htmlFor="career-message">
                  Message <span>*</span>
                </label>

                <textarea
                  id="career-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us briefly about yourself"
                />

              </div>


              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="careers-success">
                  <span>✓</span>

                  <span>
                    Your application has been submitted successfully.
                  </span>
                </div>
              )}


              {/* ERROR MESSAGE */}

              {errorMessage && (
                <div className="careers-error">
                  <span>!</span>

                  <span>
                    {errorMessage}
                  </span>
                </div>
              )}


              {/* SUBMIT */}

              <button
                type="submit"
                className="careers-submit"
                disabled={submitting}
              >
                <span>
                  {submitting
                    ? 'Submitting...'
                    : 'Submit Application'}
                </span>

                {!submitting && (
                  <span className="careers-submit-arrow">
                    →
                  </span>
                )}
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  )
}