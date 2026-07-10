import "./Partner.css"
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function Partner(){
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hours, setHours] = useState(25);
const [level, setLevel] = useState("Pro");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  domain: "Technical Maintenance",
});

const [message, setMessage] = useState("");
let multiplier = 1;

if (level === "Expert") {
  multiplier = 1.25;
} else if (level === "Master") {
  multiplier = 1.5;
}



useEffect(() => {
  const fetchPartner = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/partner");
      setPartner(res.data.partner);
    } catch (err) {
      console.log(err);
    }finally {
    setLoading(false);
  }
  };

  fetchPartner();
}, []);

if (loading) {
  return (
    <div className="page-loader">
      <div className="loader-spinner"></div>
      <h2>Loading Partner...</h2>
    </div>
  );
}

const payout = Math.round(
  partner.calculator.baseIncome *
  (hours / partner.calculator.defaultHours) *
  multiplier
);
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async () => {

  if (
    !formData.name ||
    !formData.email ||
    !formData.domain
  ) {
    setMessage("Please fill all fields.");
    return;
  }

  try {

    await axios.post(
      "http://localhost:8000/api/partner/register",
      formData
    );

    setMessage("Registration submitted successfully!");

    setFormData({
      name: "",
      email: "",
      domain: "Technical Maintenance",
    });

  } catch (err) {

    setMessage("Something went wrong.");

    console.log(err);

  }
};
  return(
      <>
        <section className="partner-section">
          <div className="first-section">

            <div className="first-left">
              <span className="partner-badge">
            <span className="green-dot"></span>
            {partner.hero.badge}
          </span>

          <h1>{partner.hero.title}</h1>

          <p>{partner.hero.subtitle}</p>

          <div className="first-left-buttons">
           <button
  className="apply-btn"
  onClick={() => {
    document
      .querySelector(".registration-section")
      .scrollIntoView({
        behavior: "smooth",
      });
  }}
>
              Apply Now <FaArrowRight />
            </button>

            <button
  className="perks-btn"
  onClick={() => {
    document
      .querySelector(".edge-section")
      .scrollIntoView({
        behavior: "smooth",
      });
  }}
>
              View Pro Perks
            </button> 
          </div>
       </div>

       <div className="first-left-image">
          <img
  src={partner.hero.image}
  alt="Partner"
/>

          <div className="stats-card">
            <h2>{partner.hero.activeRequests}</h2>
            <p>Active Service Requests</p>
          </div>
        </div>
</div>
        </section>


        {/* second part of page */}

        <section className="partner-types">
              <div className="section-heading">
                    <h2>Tailored Solutions for Every Partner</h2>
                    <p>
                      Select the role that best fits your business model and discover
      how our platform powers your specific needs.
                    </p>
              </div>

              <div className="partner-cards">

  {partner.roles.map((role, index) => (

    <div
      key={index}
      className={`partner-card ${
        role.featured ? "featured-card" : ""
      }`}
    >

      <div className="card-icon">
        {role.icon}
      </div>

      <h3>{role.title}</h3>

      <p>{role.description}</p>

      <ul>

        {role.features.map((feature, i) => (

          <li key={i}>
            ✓ {feature}
          </li>

        ))}

      </ul>

      <a href="/">
        {role.button} →
      </a>

    </div>

  ))}

</div>
        </section>


      {/* earnings calculator section  */}
      <section className="earnings-section">
              <div className="earnings-left">
                <h2>
                  Potential Earnings <br />
      Calculator
                </h2>

                <p>
      Hozify partners earn up to 40% more than industry averages by
      leveraging our smart routing and optimized scheduling algorithms.
    </p>

            <div className="hours-row">
      <span>Weekly Service Hours</span>
      <span className="hours-value">
  {hours} hrs
</span>
    </div>

      <input
  type="range"
  min="0"
  max="50"
  value={hours}
  onChange={(e) => setHours(Number(e.target.value))}
  className="hours-slider"
/>

          <div className="experience">
            <h4>Experience Level</h4>
            <div className="experience-buttons">
              <button
  className={level === "Pro" ? "active-level" : ""}
  onClick={() => setLevel("Pro")}
>
  Pro
</button>

<button
  className={level === "Expert" ? "active-level" : ""}
  onClick={() => setLevel("Expert")}
>
  Expert
</button>

<button
  className={level === "Master" ? "active-level" : ""}
  onClick={() => setLevel("Master")}
>
  Master
</button>
            </div>
          </div>
        </div>


      <div className="earnings-card">
    <p className="earning-title">
      ESTIMATED MONTHLY PAYOUT
    </p>

<h1>
${payout.toLocaleString()}
</h1>

    <span className="earning-subtitle">
      Based on average partner data in Tier-1 cities.
    </span>

    <hr />

    <div className="earning-features">
      <div>
        <p>Efficiency Bonus</p>
        <h4>+12%</h4>
      </div>

      <div>
        <p>Tech Support</p>
        <h4>Included</h4>
      </div>
    </div>
  </div>

</section>

{/* Hozify Edge */}

<section className="edge-section">

  <h2>The Hozify Edge</h2>

  <div className="edge-grid">

    {partner.benefits.map((item, index) => (

      <div className="edge-card" key={index}>

        <div className="edge-icon">
          {item.icon}
        </div>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

      </div>

    ))}

  </div>

</section>

{/* =========================
    Registration Section
========================= */}

<section className="registration-section">
  <div className="registration-card">

    <div className="registration-top">
      <span>Join the Network</span>
      <span>Step 1 of 3</span>
    </div>

    <div className="progress-bar">
      <div className="progress-fill"></div>
    </div>

    <div className="form-row">
      <div className="input-group">
        <label>Full Name</label>
        <input
  type="text"
  name="name"
  placeholder="Alex Rivera"
  value={formData.name}
  onChange={handleChange}
/>
      </div>

      <div className="input-group">
        <label>Contact Email</label>
        <input
  type="email"
  name="email"
  placeholder="alex@servicepro.com"
  value={formData.email}
  onChange={handleChange}
/>
      </div>
    </div>

    <div className="input-group">
      <label>Primary Service Domain</label>

      <select
  name="domain"
  value={formData.domain}
  onChange={handleChange}
>
        <option>Technical Maintenance</option>
        <option>Cleaning Services</option>
        <option>Electrical Services</option>
        <option>Plumbing</option>
      </select>
    </div>

   <button
  className="continue-btn"
  onClick={handleSubmit}
>
  Continue →
</button>
{message && (
  <p
    style={{
      color: "#4ade80",
      marginTop: "20px",
      textAlign: "center",
      fontWeight: "600",
    }}
  >
    {message}
  </p>
)}

  </div>
</section>

{/* =========================
    Success Stories
========================= */}

<section className="stories-section">

  <h2>Partner Success Stories</h2>

  <div className="stories-grid">

    {partner.testimonials.map((story, index) => (

      <div className="story-card" key={index}>

        <div className="stars">
          {"★".repeat(story.rating)}
        </div>

        <p>"{story.review}"</p>

        <div className="story-user">

          <img
            src={story.image}
            alt={story.name}
          />

          <div>
            <h4>{story.name}</h4>
            <span>{story.role}</span>
          </div>

        </div>

      </div>

    ))}

  </div>

</section>

        
      </>
  );
}

export default Partner;