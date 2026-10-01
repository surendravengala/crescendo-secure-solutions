import Header from '../components/Header'
import Footer from '../components/Footer'
import { services } from '../data/siteData'
import './Services.css'

import { FaWhatsapp } from 'react-icons/fa'

/*
  Add your service images here.

  Put these files inside:
  public/assets/services/

  Example:
  public/assets/services/armed-security.jpg
*/

const serviceImages = [
  '/assets/services/armed.png',
  '/assets/services/unarmed.png',
  '/assets/services/hospital.png',
  '/assets/services/industry.png',
  '/assets/services/hotel.png',
  '/assets/services/MNC SG.png',
  '/assets/services/college.png',
  '/assets/services/real estate SG.png',
  '/assets/services/Bouncer SG1.png',
  '/assets/services/Escort Security SG1.png',
  '/assets/services/Mall Security SG.png',
  '/assets/services/Event SG.png',
]

export default function Services() {
  return (
    <div className="services-page">

      <Header />

      <main>

        {/* =====================================================
            SERVICES HERO
        ===================================================== */}
        <section className="services-hero">

          <div className="services-hero-inner">

            <div className="services-hero-content">

              <p className="services-kicker">
                CRESCENDO SECURE SOLUTIONS
              </p>

              <h1>
                Security solutions
                <br />
                built around you.
              </h1>

              <p className="services-hero-description">
                Professional security and facility support services
                designed around the people, property, and operations
                we protect.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}
        <section className="services-section">

          <div className="services-container">

            <div className="services-heading">

              <div className="services-heading-left">

                <p className="services-eyebrow">
                  OUR SERVICES
                </p>

                <h2>
                  Security for
                  <br />
                  every environment.
                </h2>

              </div>


              <div className="services-heading-right">

                <p>
                  Our security services are designed to provide
                  dependable protection, professional personnel,
                  and structured operational support across
                  different environments.
                </p>

              </div>

            </div>


            {/* =================================================
                SERVICE CARDS
            ================================================= */}
            <div className="services-grid">

              {services.map((service, index) => (

                <article
                  className="service-card"
                  key={`${service.title}-${index}`}
                >

                  {/* IMAGE */}
                  <div className="service-card-image">

                    <img
                      src={serviceImages[index]}
                      alt={service.title}
                      loading="lazy"
                    />

                    <span className="service-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                  </div>


                  {/* CONTENT */}
                  <div className="service-card-content">

                    <h3>
                      {service.title}
                    </h3>


                    <p className="service-description">
                      {service.description}
                    </p>


                    {/* SERVICE ITEMS */}
                    {service.items && service.items.length > 0 && (

                      <ul className="service-items">

                        {service.items.map((item, itemIndex) => (

                          <li key={`${item}-${itemIndex}`}>

                            <span className="service-check">
                              →
                            </span>

                            <span>
                              {item}
                            </span>

                          </li>

                        ))}

                      </ul>

                    )}


                    {/* CONTACT LINK */}
                    <a
                      href="/request-quote"
                      className="service-contact-link"
                    >

                      <span>
                        Discuss This Service
                      </span>

                      <span className="service-contact-arrow">
                        →
                      </span>

                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT CTA
        ===================================================== */}
        <section
          className="services-contact"
          id="service-contact"
        >

          <div className="services-contact-inner">

            <div className="services-contact-left">

              <p className="services-contact-eyebrow">
                NEED SECURITY SUPPORT?
              </p>

              <h2>
                Let's discuss
                <br />
                your requirements.
              </h2>

            </div>


            <div className="services-contact-right">

              <p>
                Tell us about your property, people, and operational
                requirements. Our team will help you identify a
                suitable security solution.
              </p>

              <a
                href="mailto:info@example.com"
                className="services-contact-button"
              >

                <span>
                  Start a Security Conversation
                </span>

                <span className="services-contact-button-arrow">
                  →
                </span>

              </a>

            </div>

          </div>

        </section>

      </main>


      <Footer />

    



    </div>
  )
}