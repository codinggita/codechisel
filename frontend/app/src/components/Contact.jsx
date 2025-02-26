import React, { useState } from 'react';
import './Contact.css';
import GetToKnowYouForm from './Contact2';

const ContactPage = () => {
  const [showGetToKnowYouForm, setShowGetToKnowYouForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!name.trim() || !email.trim()) {
      setError('All fields are required');
      return;
    }
    setShowGetToKnowYouForm(true);
  };

  return (
    <div className="wrapper">
      <main className="main-content">
        <section className="contact-section">
          <h1>Let's get in touch</h1>
          <p className="subtitle">We are here for you! How can we help?</p>

          {!showGetToKnowYouForm ? (
            <div className="contact-form-container">
              <h2 className="ready">If you're ready to start, get in touch with us! 👇</h2>

              <form className="contact-form">
                <div className="form-group">
                  <label>Hi!! 👋 What's your name?</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="form-input" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>What's your E-mail?</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="button" className="next-button" onClick={handleNext}>
                  Next
                </button>
              </form>
            </div>
          ) : (
            <GetToKnowYouForm 
              onPrevious={() => setShowGetToKnowYouForm(false)}
              userName={name} // Pass name to Contact2.jsx
              userEmail={email} // Pass email to Contact2.jsx
            />
          )}
        </section>
      </main>

      <footer>
          <div className="footer-section">
            <h4>Learning Paths</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">React</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>support@example.com</p>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default ContactPage;
