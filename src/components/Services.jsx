import { services } from '../data/siteData'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-eyebrow">Our Services</div>
        <h2>Professional protection.<br />Operational confidence.</h2>
        <p className="section-intro">Professional protection solutions designed for different environments and operational requirements.</p>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="learn" href="#contact">LEARN MORE　→</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
