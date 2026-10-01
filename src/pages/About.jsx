import Header from '../components/Header'
import Footer from '../components/Footer'
import './About.css'
import { FaWhatsapp } from 'react-icons/fa'
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const team = [
  {
    number: '01',
    name: 'Founder Name',
    designation: 'Founder',
    image: asset('assets/team/f.png'),
    message:
      'Our goal is to build a security organization that clients can trust. Strong security begins with strong operations, disciplined execution, trained personnel, and consistent service delivery.',
  },

  {
    number: '02',
    name: 'General Manager Name',
    designation: 'General Manager',
    image: asset('assets/team/gm.PNG'),
    message:
      'Reliable security comes from people, processes, and continuous supervision. We focus on maintaining clear procedures and dependable service across every operation.',
  },

  {
    number: '03',
    name: 'HR / Accounts Manager Name',
    designation: 'HR & Accounts Manager',
    image: asset('assets/team/hr.PNG'),
    message:
      'Our people are at the heart of our organization. We believe in supporting our team, maintaining professional standards, and building a culture of accountability and respect.',
  },

  {
    number: '04',
    name: 'Manager Name',
    designation: 'Manager — Administration',
    image: asset('assets/team/m.jpeg'),
    message:
      'Effective administration keeps operations moving smoothly. Our focus is coordination, responsiveness, and ensuring that every team has the support required to deliver reliable service.',
  },
]

export { team }
const values = [
  {
    number: '01',
    title: 'Integrity',
    text: 'We operate with honesty, transparency, and accountability.',
  },
  {
    number: '02',
    title: 'Discipline',
    text: 'Consistent procedures and professional conduct guide our work.',
  },
  {
    number: '03',
    title: 'Responsibility',
    text: 'We take ownership of the environments entrusted to us.',
  },
  {
    number: '04',
    title: 'Professionalism',
    text: 'We maintain high standards in appearance, conduct, and service.',
  },
  {
    number: '05',
    title: 'People First',
    text: 'We value our people and the relationships we build with clients.',
  },
  {
    number: '06',
    title: 'Continuous Improvement',
    text: 'We learn from experience and continually improve our operations.',
  },
]

export default function About() {
  return (
    <div className="about-page">
      <Header />

      <main>

        {/* =====================================================
            01 — ABOUT CRESCENDO
        ===================================================== */}
        <section className="about-hero">
          <div className="about-hero-inner">

            <div className="about-label">
            </div>

            <div className="about-hero-content">
              <div>
                <p className="about-kicker">CRESCENDO SECURE SOLUTIONS</p>

                <h1>
                  Security built
                  <br />
                  around people.
                </h1>
              </div>

              <p className="about-hero-description">
                Professional security and facility support solutions
                designed around the people, property, and operations
                we protect.
              </p>
            </div>

          </div>
        </section>


        {/* =====================================================
            02 — WHO WE ARE
        ===================================================== */}
        <section className="about-section about-who">
          <div className="about-section-inner">


            <div className="about-who-grid">

              <div className="about-section-heading">
                <h2>
                  Security
                  <br />
                  with purpose.
                </h2>
              </div>

              <div className="about-copy">
                <p>
                  Crescendo Secure Solutions provides professionally
                  managed security and facility support services
                  designed around the unique requirements of every
                  client.
                </p>

                <p>
                  Our approach combines trained manpower, disciplined
                  supervision, operational processes, and modern
                  security practices to create safer environments for
                  businesses, communities, institutions, and
                  industrial facilities.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 — OUR TEAM
        ===================================================== */}
        <section className="about-section about-team">
          <div className="about-section-inner">


            <div className="team-intro">
              <h2>
                People behind
                <br />
                the service.
              </h2>

              <p>
                Our leadership team brings together experience,
                responsibility, and a shared commitment to dependable
                security operations.
              </p>
            </div>


            <div className="team-list">

              {team.map((person, index) => (
                <article
                  className={`team-member ${
                    index % 2 === 1 ? 'team-member-reverse' : ''
                  }`}
                  key={person.number}
                >

                  <div className="team-photo-wrap">


                    <img
                      src={person.image}
                      alt={person.name}
                      className="team-photo"
                    />

                  </div>


                  <div className="team-info">

                    <p className="team-designation">
                      {person.designation}
                    </p>

                    <h3>{person.name}</h3>

                    <div className="team-line"></div>

                    <p className="team-message">
                      “{person.message}”
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            04 — VISION & MISSION
        ===================================================== */}
        <section className="about-section direction-section">
          <div className="about-section-inner">


            <div className="direction-header">
              <h2>
                Where we are
                <br />
                headed.
              </h2>

              <p>
                The direction that shapes how we grow and how we
                serve our clients.
              </p>
            </div>


            <div className="direction-grid">

              <article className="direction-card vision-card">

                <p className="direction-label">
                  OUR VISION
                </p>

                <h3>
                  A safer future,
                  <br />
                  built on trust.
                </h3>

                <p>
                  To become a trusted security partner known for
                  dependable people, disciplined operations, and
                  professional service.
                </p>
              </article>


              <article className="direction-card mission-card">

                <p className="direction-label">
                  OUR MISSION
                </p>

                <h3>
                  Security that
                  <br />
                  works for you.
                </h3>

                <p>
                  To provide customized security solutions through
                  trained personnel, strong supervision, clear
                  processes, and responsive client support.
                </p>
              </article>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 — WHAT GUIDES US
        ===================================================== */}
        <section className="about-section values-section">
          <div className="about-section-inner">

            <div className="values-header">
              <h2>
                Values that show up
                <br />
                in the <span>work.</span>
              </h2>

              <p>
                Our values influence how we work, how we treat people,
                and how we deliver our responsibilities.
              </p>
            </div>


            <div className="values-grid">

              {values.map((value) => (
                <article className="value-card" key={value.number}>

                  

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            06 — A SAFER NEXT STEP
        ===================================================== */}
        <section className="safer-section">
          <div className="safer-inner">

            <div className="safer-label">
            </div>

            <div className="safer-content">

              <h2>
                Let's build a
                <br />
                <span>safer environment</span>
                <br />
                together.
              </h2>

              <div className="safer-right">

                <p>
                  Tell us about your security requirements and our team
                  will help you identify a suitable security solution.
                </p>

                <a
                  href="/contact"
                  className="safer-button"
                >
                  <span>Start a Security Conversation</span>
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />

      <a
        className="about-whatsapp-btn"
        href="https://wa.me/7675904237"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}


/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ number, title }) {
  return (
    <div className="about-section-label">

      <span className="about-section-number">
        {number}
      </span>

      <span className="about-section-label-text">
        {title}
      </span>

      <span className="about-section-label-line"></span>

    </div>
  )
}