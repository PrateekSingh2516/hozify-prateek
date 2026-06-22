
import React from "react";
import "./BookingSuccess.css";import {
  FaCheckCircle,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";
import { Link,useLocation } from 'react-router-dom';


function BookingSuccess(){

  const { state } = useLocation();

const bookingData = state || {
service:"Premium Deep Cleaning",
date:"October 7, 2024",
time:"08:00 AM",
};
    return(
            <div className="laststep-container">
      {/* Success Icon */}
      <div className="success-icon">
        <FaCheckCircle />
      </div>

      {/* Heading */}
      <h1>Request Submitted!</h1>

      <p className="subtitle">
        Your premium service request has been successfully sent to
        our network of vetted engineers. We're on it.
      </p>

      {/* Booking Card */}
      <div className="booking-card">
        <div className="booking-header">
          <div>
            <span className="booking-label">BOOKING ID</span>
            <h2>{`HZ-${Math.floor(Math.random()*9000+1000)}-XQ`}</h2>
          </div>

          <span className="status-badge">Processing</span>
        </div>

        <hr />

        <div className="booking-details">
          <div className="detail-item">
            <FaTools className="detail-icon" />
            <div>
              <small>Service Type</small>
              <h4>{bookingData.service}</h4>
            </div>
          </div>

          <div className="detail-item">
            <FaCalendarAlt className="detail-icon" />
            <div>
              <small>Scheduled For</small>
              <h4>
{bookingData.date} • {bookingData.time}
</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="next-section">
        <h2>What happens next?</h2>

        <div className="steps-grid">
          <div className="step-card">
            <span>01</span>
            <h3>Review</h3>
            <p>
              Our team reviews your specific requirements to
              match you with the best available engineer.
            </p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Confirmation</h3>
            <p>
              You will receive an email and SMS confirmation
              once your engineer is assigned.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Service</h3>
            <p>
              The engineer arrives at the scheduled time.
              Track their progress live via your dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="action-buttons">


        <Link to="/"
        onClick={() => window.scrollTo(0,0)}>
        <button className="dashboard-btn">
          Go to Dashboard
        </button>
        </Link>
      
 <Link to="/moreServ" onClick={() => window.scrollTo(0, 0)}>
        <button className="browse-btn">
          Browse More Services
        </button>
        </Link>
      </div>
    </div>

    );

}

export default BookingSuccess;