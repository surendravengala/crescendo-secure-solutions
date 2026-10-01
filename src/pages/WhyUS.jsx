import Footer from '../components/Footer'
import './Whyus.css'


export default function WhyUs() {
  const standards = [
    {
      number: '01',
      title: 'Recruitment standards',
      description:
        'We look for discipline, responsibility, communication, and readiness for the environment a role serves.',
    },
    {
      number: '02',
      title: 'Personnel verification',
      description:
        'Screening and verification processes are designed around client safety requirements.',
    },
    {
      number: '03',
      title: 'Training',
      description:
        'Teams are briefed for the site, the post, the people, and the moments that need calm response.',
    },
    {
      number: '04',
      title: 'Uniform & presentation',
      description:
        'Professional presentation supports visibility, trust, and a consistent experience at your site.',
    },
    {
      number: '05',
      title: 'Supervision',
      description:
        'Structured supervision keeps expectations active beyond the first day of deployment.',
    },
    {
      number: '06',
      title: 'Reporting',
      description:
        'Clear reports help the right people understand what happened and what needs attention.',
    },
  ]

  return (
    <>
      <main className="why-page">

        {/* =====================================================
            SECTION 01 — WHY CRESCENDO
        ===================================================== */}

        <section className="why-hero">
          <div className="why-hero-container">

            <div className="why-hero-eyebrow">
              <span></span>
              <span>WHY CRESCENDO</span>
            </div>

            <div className="why-hero-grid">

              <div className="why-hero-title">
                <h1>
                  Readiness is a
                  <br />
                  system, not a
                  <br />
                  slogan.
                </h1>
              </div>

              <div className="why-hero-description">
                <p>
                  Our standards are designed to make professional
                  protection visible in the details.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SECTION 02 — OUR STANDARDS
        ===================================================== */}

        <section className="why-standards">

          <div className="why-standards-container">

            <div className="standards-grid">

              {standards.map((standard) => (
                <article
                  className="standard-item"
                  key={standard.number}
                >

                  <span className="standard-number">
                    {standard.number}
                  </span>

                  <div className="standard-content">

                    <h2>
                      {standard.title}
                    </h2>

                    <p>
                      {standard.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            SECTION 03 — CTA
        ===================================================== */}

        <section className="why-cta">

          <div className="why-cta-container">

            <div className="why-cta-content">

              <div className="why-cta-eyebrow">
                <span></span>
                <span>A SAFER NEXT STEP</span>
              </div>

              <h2>
                Let's build a safer
                <br />
                environment
                <br />
                together.
              </h2>

              <p>
                Tell us about your security requirements and our team
                will help you identify a suitable security solution.
              </p>

            </div>


            <div className="why-cta-actions">

              <a
                href="#contact"
                className="why-cta-primary"
              >
                <span>Request a Quote</span>
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="why-cta-secondary"
              >
                Contact Us
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}