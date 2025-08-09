import React, { useState } from 'react';
import axios from 'axios';
import { 
  faEnvelope,
  faAddressCard,
  faPaperPlane,
  faHandshake,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    type: '',
    show: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: '', show: false });

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      
      if (response.data.success) {
        setStatus({
          message: 'Your message has been sent successfully! I will get back to you soon.',
          type: 'success',
          show: true
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          message: response.data.message || 'There was an error sending your message.',
          type: 'error',
          show: true
        });
      }
    } catch (error) {
      setStatus({
        message: error.response?.data?.message || 'There was an error sending your message. Please try again later.',
        type: 'error',
        show: true
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <>
      <style>{`
        .readme-container1 {
          max-width: 900px;
          margin: 40px auto;
          background: rgba(13, 17, 23, 0.8);
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .readme-header1 {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .readme-title1 {
          font-size: 2em;
          margin: 0;
          color: #00d4ff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .badge {
          display: inline-block;
          padding: 3px 8px;
          font-size: 0.8em;
          font-weight: bold;
          border-radius: 20px;
          margin-left: 10px;
          vertical-align: middle;
        }
        .badge-primary1 {
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          color: white;
        }
        .badge-secondary1 {
          background: rgba(0, 212, 255, 0.2);
          color: #00d4ff;
          border: 1px solid #00d4ff;
        }
        .readme-section1 {
          margin-bottom: 30px;
        }
        .section-title1 {
          font-size: 1.5em;
          margin: 25px 0 15px;
          color: #00d4ff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .feature-list1 {
          list-style-type: none;
          padding-left: 0;
        }
        .feature-item1 {
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }
        .feature-item1::before {
          content: '\\f00c';
          font-family: 'Font Awesome 6 Free';
          font-weight: 900;
          position: absolute;
          left: 0;
          color: #00d4ff;
        }
        .contact-form {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-top: 20px;
        }
        .form-group1 {
          display: flex;
          flex-direction: column;
        }
        .form-group1 label {
          margin-bottom: 8px;
          color: #00d4ff;
          font-weight: bold;
        }
        .form-control1 {
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          color: white;
          font-size: 1em;
          transition: all 0.3s ease;
        }
        .form-control1:focus {
          outline: none;
          border-color: #00d4ff;
          box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
        }
        textarea.form-control1 {
          min-height: 150px;
          resize: vertical;
        }
        .submit-btn1 {
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1em;
          font-weight: bold;
          transition: all 0.3s ease;
          width: fit-content;
        }
        .submit-btn1:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }
        .submit-btn1:active {
          transform: translateY(0);
        }
        .status-message1 {
          padding: 12px 15px;
          border-radius: 5px;
          margin-top: 15px;
          display: none;
        }
        .status-message1.success {
          background: rgba(40, 167, 69, 0.2);
          border: 1px solid rgba(40, 167, 69, 0.5);
          color: #28a745;
          display: block;
        }
        .status-message1.error {
          background: rgba(220, 53, 69, 0.2);
          border: 1px solid rgba(220, 53, 69, 0.5);
          color: #dc3545;
          display: block;
        }
        @media (max-width: 768px) {
          .readme-container1 {
            padding: 15px;
            margin: 20px 10px;
          }
          .readme-title1 {
            font-size: 1.4em;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }
          .badge {
            font-size: 0.7em;
            padding: 2px 6px;
            margin-left: 0;
          }
          .section-title1 {
            font-size: 1.2em;
            flex-direction: row;
            align-items: center;
            gap: 8px;
          }
          .feature-item1 {
            font-size: 0.95em;
          }
          .contact-form {
            gap: 15px;
          }
          .form-control1 {
            padding: 10px 12px;
          }
        }
      `}</style>

      <div className="readme-container1" id="contact">
        <div className="readme-header1">
          <h1 className="readme-title1">
            <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            <span className="badge badge-primary1">Open to Collaborate</span>
            <span className="badge badge-secondary1">MERN Expert</span>
          </h1>
        </div>

        <div className="readme-section1">
          <h2 className="section-title1"><FontAwesomeIcon icon={faAddressCard} /> Contact Information</h2>
          <ul className="feature-list1">
            <li className="feature-item1">
              <strong>Email:</strong> <a href="mailto:rrk.rrk@example.com" style={{ color: '#00d4ff', textDecoration: 'none' }}> rrk.rrk@example.com </a>
            </li>
            <li className="feature-item1">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rrk" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>linkedin.com/in/rrk</a>
            </li>
            <li className="feature-item1">
              <strong>GitHub:</strong> <a href="https://github.com/rrk" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>github.com/rrk</a>
            </li>
            <li className="feature-item1">
              <strong>Portfolio:</strong> <a href="https://rrk.rkc" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>rrk.rkc</a>
            </li>
          </ul>
        </div>

        <div className="readme-section1">
          <h2 className="section-title1"><FontAwesomeIcon icon={faPaperPlane} /> Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group1">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" className="form-control1" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group1">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" className="form-control1" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group1">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" className="form-control1" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group1">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" className="form-control1" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn1" disabled={isSubmitting}>
              {isSubmitting ? (<><FontAwesomeIcon icon={faSpinner} spin /> Sending...</>) : (<><FontAwesomeIcon icon={faPaperPlane} /> Send Message</>)}
            </button>
            {status.show && (
              <div className={`status-message1 ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

        <div className="readme-section1">
          <h2 className="section-title1"><FontAwesomeIcon icon={faHandshake} /> Get in Touch</h2>
          <p>
            I'm always excited to connect with like-minded professionals, discuss potential projects, or explore collaboration opportunities.
          </p>
          <ul className="feature-list1">
            <li className="feature-item1">Available for freelance projects and consulting</li>
            <li className="feature-item1">Open to contributing to open-source initiatives</li>
            <li className="feature-item1">Happy to mentor or discuss DSA and web development</li>
            <li className="feature-item1">Quick response time, typically within 24 hours</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
