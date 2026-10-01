import { companyGallery } from '../data/siteData'

export default function TrustSection() {
  return (
    <section className="trust-section" id="gallery">
      <div className="trust-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="trust-header">

          <div className="section-eyebrow trust-eyebrow">
            Built for Trust
          </div>

          <h2>
            Security in Action.
            <br />
            <span>Every Day.</span>
          </h2>

          <p>
            A glimpse into the people, training, operations, and
            security practices that keep our teams ready.
          </p>

        </div>


        {/* =================================================
            IMAGE ADVERTISEMENT / MARQUEE
        ================================================= */}

        <div className="company-gallery">

          <div className="gallery-track">

            {/* First set */}

            {companyGallery.map((item, index) => (
              <article
                className="gallery-card"
                key={`${item.title}-${index}`}
              >

                <div className="gallery-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="gallery-info">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}


            {/* Duplicate set for seamless scrolling */}

            {companyGallery.map((item, index) => (
              <article
                className="gallery-card"
                key={`duplicate-${item.title}-${index}`}
                aria-hidden="true"
              >

                <div className="gallery-image">

                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                </div>

                <div className="gallery-info">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM LABEL
        ================================================= */}

        <div className="gallery-bottom">

          <span className="gallery-bottom-line"></span>

          <span>
            PEOPLE • TRAINING • OPERATIONS • SECURITY
          </span>

          <span className="gallery-bottom-line"></span>

        </div>

      </div>
    </section>
  )
}