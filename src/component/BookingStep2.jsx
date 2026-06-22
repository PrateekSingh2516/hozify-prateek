import "./BookingStep2.css";
import { Link,useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FiCheck,
  FiShield,
  FiArrowLeft,
} from "react-icons/fi";

function BookingStep2(){

const { state } = useLocation();

const bookingData = state || {
  service: "Premium Deep Cleaning",
  category: "PREMIUM CLEANING",
  price: 129,
  duration: "Est. 4 hours",
  image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900",
  date: "October 7, 2024",
  time: "08:00 AM",
  total: 141.5,
};

const equipment = 25;
const tax = +(bookingData.price * 0.05).toFixed(2);
const finalTotal = (
  bookingData.price +
  equipment +
  tax
).toFixed(2);  

  const [otpOne, setOtpOne] = useState("");
  const [otpTwo, setOtpTwo] = useState("");
  const [otpThree, setOtpThree] = useState("");
  const [otpFour, setOtpFour] = useState("");

    return(
            <>
            <div className="qvxmra81">

        {/* ================= STEPPER ================= */}

        <div className="ptxklo55">

          <div className="rmawqe11">

            <div className="bvnklt32">
              <FiCheck />
            </div>

            <span>Service</span>

          </div>

          <div className="nqzrpt48"></div>

          <div className="rmawqe11">

            <div className="bvnklt32">
              <FiCheck />
            </div>

            <span>Details</span>

          </div>

          <div className="nqzrpt48"></div>

          <div className="rmawqe11">

            <div className="cypqtw92">
              3
            </div>

            <span className="activeStepTxt">
              Verification
            </span>

          </div>

          <div className="nqzrpt48"></div>

          <div className="rmawqe11">

            <div className="inactiveCircle">
              4
            </div>

            <span>
              Confirm
            </span>

          </div>

        </div>

        {/* ================= MAIN LAYOUT ================= */}

        <div className="gkmvte25">

          {/* LEFT CARD */}

          <div className="ytrqpa61">

            <h1>Contact Details</h1>

            <p className="contactPara">
              Please provide your details so our professional partner can coordinate the service.
            </p>

            {/* FORM */}

            <div className="nqopaz81">

              <div className="singleField">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                />

              </div>

              <div className="singleField">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                />

              </div>

            </div>

            {/* PHONE */}

            <div className="phoneSection">

              <label>
                Phone Number
              </label>

              <div className="phoneWrapper">

                <div className="countryCode">
                  +1
                </div>

                <input
                  type="text"
                  placeholder="(555) 000-0000"
                />

              </div>

            </div>

            <div className="lineDivider"></div>

            {/* OTP */}

            <div className="otpHeading">

              <div className="shieldBox">

                <FiShield />

              </div>

              <div>

                <h2>
                  Secure Verification
                </h2>

                <p>
                  We've sent a 4-digit code to your phone.
                  Enter it below to verify your request.
                </p>

              </div>

            </div>

            <div className="otpContainer">

              <input
                maxLength="1"
                value={otpOne}
                onChange={(e)=>setOtpOne(e.target.value)}
              />

              <input
                maxLength="1"
                value={otpTwo}
                onChange={(e)=>setOtpTwo(e.target.value)}
              />

              <input
                maxLength="1"
                value={otpThree}
                onChange={(e)=>setOtpThree(e.target.value)}
              />

              <input
                maxLength="1"
                value={otpFour}
                onChange={(e)=>setOtpFour(e.target.value)}
              />

              <button className="resendOtpBtn">
                Resend Code
              </button>

            </div>
              {/* ================= BOTTOM BUTTONS ================= */}

            <div className="actionRow">

              <Link
                to="/BookingStep1"
                style={{ textDecoration: "none" }}
               onClick={() => window.scrollTo(0, 0)}
              >
                <button className="backBtnStep2">
                  <FiArrowLeft />
                  Back to Details
                </button>
              </Link>

              <Link to="/BookingSuccess"
              state={{
...bookingData,
equipment,
tax,
total: finalTotal
}}
              onClick={() => window.scrollTo(0,0)}>
              <button className="completeBtnStep2">
                Complete Booking
              </button>
              </Link>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="bookingCardStep2">

            <div className="bookingImageWrap">

              <img
src={bookingData.image}
alt={bookingData.service}
/>

              <span className="premiumBadge">
                Premium Service
              </span>

            </div>

            <div className="bookingBody">

              <h2>
                Booking Summary
              </h2>

              {/* SERVICE */}

              <div className="summaryRow">

                <div className="summaryIcon">
                  🧹
                </div>

                <div>

                  <h4>{bookingData.service}</h4>

                  <p>{bookingData.category}</p>
                </div>

              </div>

              {/* LOCATION */}

              <div className="summaryRow">

                <div className="summaryIcon">
                  📍
                </div>

                <div>

                  <h4>
                    123 Emerald Terrace
                  </h4>

                  <p>
                    San Francisco, CA 94105
                  </p>

                </div>

              </div>

              {/* DATE */}

              <div className="summaryRow">

                <div className="summaryIcon">
                  📅
                </div>

                <div>

                  <h4>{bookingData.date}</h4>

<p>{bookingData.time}</p>

                </div>

              </div>

              <div className="summaryDivider"></div>

              {/* PRICE */}

              <div className="priceLine">

                <span>
                  Base Service Fee
                </span>

               <strong>${bookingData.price.toFixed(2)}</strong>

              </div>

              <div className="priceLine">

                <span>
                  Equipment & Supplies
                </span>

                <strong>${equipment.toFixed(2)}</strong>

              </div>

              <div className="priceLine">

                <span>
                  Service Tax (5%)
                </span>

                <strong>${tax.toFixed(2)}</strong>

              </div>

              <div className="totalLineStep2">

                <span>
                  Total
                </span>

               <h1>${finalTotal}</h1>

              </div>

              {/* SECURITY */}

              <div className="secureBox">

                <div className="secureIcon">
                  🛡️
                </div>

                <p>
                  Secure transaction encrypted by Honzify
                  Engineering Protocol.
                </p>

              </div>

            </div>

          </div>
          </div>
          </div>
            </>
    );

}

export default BookingStep2;