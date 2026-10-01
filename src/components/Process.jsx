import { processSteps } from '../data/siteData'

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-container">

        {/* Section heading */}

        <div className="section-eyebrow process-eyebrow">
          Our Approach
        </div>

        <h2>
          A Structured Approach
          <br />
          to Security
        </h2>

        <p className="process-intro">
          From understanding your requirements to continuous improvement,
          every stage is carefully planned and supervised.
        </p>


        {/* Process Map */}

        <div className="process-map">

          <div className="process-line"></div>

          {processSteps.map((step, index) => (
            <div
              className="process-step"
              key={step.title}
            >

              {/* Number */}

              <div className="process-node">
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>


              {/* Content */}

              <div className="process-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>


              {/* Arrow between steps */}

              {index < processSteps.length - 1 && (
                <div className="process-arrow">
                  →
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}