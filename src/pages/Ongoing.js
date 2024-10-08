import React, { useState } from 'react';
import './ongoing.css';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';
import Tab from '../components/Tab'

export default function Ongoing() {
    const [currentStep, setCurrentStep] = useState(2);  

    const steps = ["Basket", "Delivery", "Confirm", "Done!"];
  
    const handleNext = () => {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
    };
  
    const handlePrev = () => {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

  
    return (
      <div>
          <Navi/>
          <Sidebar/>
          <Tab/>
          <div className="ongoing-request-card">
          <h3>Request 01</h3>
          <p className="ongoing-description">Description...........................................................................</p>
          <div className="ongoing-request-body">
            <div className="ongoing-progress-container">
              <div className="ongoing-progress">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`ongoing-step ${index + 1 <= currentStep ? 'active' : ''}`}
                  >
                    {index + 1 === currentStep && (
                      <div className="tooltip">
                        <span>{step}</span>
                      </div>
                    )}
                    <div className="step-number">{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ongoing-contact-section">
              <div className="ongoing-contact ongoing-supervisor">
                <span>👤 Supervisor</span>
                <button className="ongoing-contact-button">📞 Contact</button>
              </div>
              <div className="ongoing-contact ongoing-customer">
                <span>👤 Customer</span>
                <button className="ongoing-contact-button">📞 Contact</button>
              </div>
            </div>
          </div>
          <div className="ongoing-actions">
            <button className="ongoing-prev-button" onClick={handlePrev}>
              Previous
            </button>
            <button className="ongoing-next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
}
