import { navItems, services } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer" id="careers">

      <div className="footer-container">

        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="footer-grid">

          {/* BRAND */}

          <div className="footer-brand">

            <a
              href="/home"
              className="footer-logo-link"
              aria-label="Crescendo Secure Solutions home"
            >
              <img
                className="footer-logo"
                src="/assets/logo.png"
                alt="Crescendo Secure Solutions"
              />
            </a>

            <p>
              Professional security personnel, facility management,
              and customized protection solutions for people, property,
              and operations.
            </p>

            <a
              className="footer-conversation"
              href="/contact"
            >
              <span>
                Start a security conversation
              </span>

              <span className="footer-arrow">
                →
              </span>
            </a>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-column">

            <h4>
              QUICK LINKS
            </h4>

            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <a href="/request-quote">
                  Request a Quote
                </a>
              </li>
            </ul>

          </div>


          {/* SERVICES */}

          <div className="footer-column">

            <h4>
              SERVICES
            </h4>

            <ul>
              {services.map((service) => (
                <li key={service.title}>
                  <a href="/services">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h4>
              CONTACT
            </h4>

            <ul>

              <li>
                <span className="contact-label">
                  PHONE
                </span>

                <a href="tel:+917675904237">
                  7675904237
                </a>
              </li>

              <li>
                <span className="contact-label">
                  EMAIL
                </span>

                <a href="mailto:crescendoss26@gmail.com">
                  crescendoss26@gmail.com
                </a>
              </li>

              <li>
                <span className="contact-label">
                  OFFICE
                </span>

                <span>
                  Plot No: 4-79/5, Flat No: 101, 1st Floor Omkar Kirana Shop Street Mettkaniguda, Besides, Gajularamaram, Hyderabad, Telangana 500055
                </span>
              </li>

            </ul>


            {/* SOCIAL */}

            <div className="social">

              <a
                href="#"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                YT
              </a>

            </div>

          </div>

        </div>


        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="copyright">

          <span>
            © 2026 CRESCENDO SECURE SOLUTIONS.
            All Rights Reserved.
          </span>

          <div className="footer-legal">

            <a href="#privacy">
              Privacy Policy
            </a>

            <span>·</span>

            <a href="#terms">
              Terms &amp; Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}