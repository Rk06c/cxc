import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
   const services = [
    {
      id: "web-development",
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Custom, responsive websites built with modern frameworks and optimized for performance and SEO.",
      features: [
        "React/Next.js Development",
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices",
      ],
    },
    {
      id: "mobile-development",
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications that deliver native-like performance and smooth UX.",
      features: [
        "React Native Apps",
        "iOS & Android",
        "API Integration",
        "App Store Deployment",
      ],
    },
    {
      id: "ai-solutions",
      icon: "fas fa-robot",
      title: "AI Solutions",
      description:
        "Intelligent systems leveraging machine learning to automate processes and extract insights.",
      features: [
        "Custom AI Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      id: "backend-development",
      icon: "fas fa-server",
      title: "Backend Development",
      description:
        "Scalable backend systems with robust APIs, databases, and cloud infrastructure.",
      features: [
        "Node.js/Express",
        "REST & GraphQL APIs",
        "Database Design",
        "Cloud Deployment",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .services-section {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr;
          padding: 40px 5%;
          max-width: 1600px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 20px;
        }
        .section-header h2 {
          font-size: 2.8rem;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-header p {
          color: #ccc;
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          align-content: center;
        }
        .service-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(0, 212, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 212, 255, 0.15);
          border-color: rgba(0, 212, 255, 0.3);
        }
        .service-icon {
          font-size: 3.5rem;
          margin-bottom: 25px;
          background: linear-gradient(135deg, #00d4ff, #0066ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }
        .service-title {
          font-size: 1.5em;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }
        .service-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          transition: width 0.3s ease;
        }
        .service-card:hover .service-title::after {
          width: 80px;
        }
        .service-description {
          color: #ccc;
          line-height: 1.7;
          margin-bottom: 25px;
          font-size: 0.95em;
        }
        .service-features {
          text-align: left;
          margin-bottom: 25px;
        }
        .service-features li {
          margin-bottom: 10px;
          position: relative;
          padding-left: 25px;
          color: #a0a0ff;
        }
        .service-features li::before {
          content: '\\f00c';
          font-family: 'Font Awesome 6 Free';
          font-weight: 900;
          position: absolute;
          left: 0;
          color: #00d4ff;
        }
        .service-btn {
          display: inline-block;
          padding: 10px 25px;
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          color: white;
          border-radius: 30px;
          text-decoration: none;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .service-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4);
        }
        @media (max-width: 768px) {
          .services-section {
            min-height: auto;
            padding: 60px 5%;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* Keep your styles here (unchanged) */}

      <section className="services-section" id="service">
        <div className="section-header">
          <h2>
            <i className="fas fa-cogs"></i> My Services
          </h2>
          <p>
            Professional solutions tailored to your needs, combining cutting-edge technology with exceptional user experiences
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to={`/service-details/${service.id}`} className="service-btn">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
    