import { industries } from '../data/siteData'

export default function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="industries-container">

        <div className="section-eyebrow">
          Across Environments
        </div>

        <h2>
          Security Solutions Across
          <br />
          Industries
        </h2>

        <p className="section-intro">
          Focused support for the places where people, property, and
          operations meet.
        </p>


        <div className="industries-grid">

          {industries.map((industry, index) => (
            <article
              className="industry-card"
              key={industry.name}
            >

              {/* Number */}

              <div className="industry-number">
                {String(index + 1).padStart(2, '0')}
              </div>


              {/* Content */}

              <div className="industry-content">

                <h3>
                  {industry.name}
                </h3>

                <p>
                  {industry.description}
                </p>

              </div>


              {/* CTA */}

              <a
                href="/contact"
                className="industry-link"
              >
                DISCUSS YOUR SITE

                <span>→</span>
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}