import { stats } from '../data/siteData'

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Company statistics">
      <div className="stats-container">

        {stats.map(([value, label], index) => (
          <div className="stat" key={label}>

            <div className="stat-top">
              <span className="stat-number-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="stat-line"></span>
            </div>

            <div className="stat-value">
              {value}
            </div>

            <div className="stat-bottom">
              <span className="stat-dot"></span>

              <span className="stat-label">
                {label}
              </span>
            </div>

          </div>
        ))}

      </div>

     
    </section>
  )
}