export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================================
            IMAGE
        ========================================= */}

        <div className="about-image-wrap">
          <div className="about-image-accent"></div>

          <div className="about-image">
            <img
              src={`${import.meta.env.BASE_URL}assets/images.jpg`}

              alt="Modern security technology"
            />
          </div>
        </div>


        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="about-content">

          <div className="section-eyebrow about-eyebrow">
            <span></span>
            WHO WE ARE
          </div>


          <h2>
            Security Built
            <br />
            Around Your Needs
          </h2>


          <div className="about-text">

            <p>
              Crescendo Secure Solutions provides professionally managed
              security and facility support services designed around the
              unique requirements of every client.
            </p>

            <p>
              Our approach combines trained manpower, disciplined
              supervision, operational processes, and modern security
              practices to create safer environments for businesses,
              communities, institutions, and industrial facilities.
            </p>

          </div>


          <a
            href="/about"
            className="about-button"
          >
            <span>Learn More About Us</span>
            <span className="about-button-arrow">→</span>
          </a>

        </div>

      </div>
    </section>
  )
}