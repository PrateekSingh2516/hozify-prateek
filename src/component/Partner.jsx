import "./Partner.css"
import { FaArrowRight } from "react-icons/fa";


function Partner(){
  return(
      <>
        <section className="partner-section">
          <div className="first-section">

            <div className="first-left">
              <span className="partner-badge">
            <span className="green-dot"></span>
            ECOSYSTEM GROWTH
          </span>

           <h1>
            Scale Your Impact <br />
            with Optimistic <br />
            Engineering.
          </h1>

          <p>
            Join the Hozify partner network. Whether you're an individual
            pro, a service agency, or a vendor, our infrastructure is built
            to amplify your professional growth.
          </p>

          <div className="first-left-buttons">
            <button className="apply-btn">
              Apply Now <FaArrowRight />
            </button>

            <button className="perks-btn">
              View Pro Perks
            </button> 
          </div>
       </div>

       <div className="first-left-image">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900"
            alt="Partner"
          />

          <div className="stats-card">
            <h2>1.2M+</h2>
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
                      <div className="partner-card">
                        <div className="card-icon">👨‍🔧</div>

                        <h3>
                            Independent Provider <br />
                            (ISP)
                        </h3>

                        <p>
        For individual technicians and specialized experts looking for
        steady high-intent leads.
                    </p>

                    <ul>
        <li>✓ Instant Booking System</li>
        <li>✓ Direct Payouts</li>
      </ul>
             <a href="/">Explore ISP →</a>

                      </div>

              <div className="partner-card featured-card">
      <div className="card-icon">🏢</div>

      <h3>Business Provider (BSP)</h3>

      <p>
        Scale your existing agency or business using our enterprise-grade
        management tools.
      </p>

      <ul>
        <li>✓ Multi-Technician Dashboard</li>
        <li>✓ Fleet Tracking APIs</li>
      </ul>

      <a href="/">Expand Business →</a>
    </div>


              <div className="partner-card">
      <div className="card-icon">🛒</div>

      <h3>Product Sellers</h3>

      <p>
        Market your service-related products directly to our ecosystem's
        service providers.
      </p>

      <ul>
        <li>✓ Marketplace Integration</li>
        <li>✓ Bulk Order Logistics</li>
      </ul>

      <a href="/">List Products →</a>
    </div>

              
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
      <span className="hours-value">25 hrs</span>
    </div>

      <input
      type="range"
      min="0"
      max="50"
      defaultValue="25"
      className="hours-slider"
    />

          <div className="experience">
            <h4>Experience Level</h4>
            <div className="experience-buttons">
              <button>Pro</button>
              <button>Expert</button>
              <button>Master</button>
            </div>
          </div>
        </div>


      <div className="earnings-card">
    <p className="earning-title">
      ESTIMATED MONTHLY PAYOUT
    </p>

    <h1>$3,225.00</h1>

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

    <div className="edge-card">
      <div className="edge-icon">🕒</div>
      <h3>Zero Downtime</h3>
      <p>
        Our algorithm ensures your calendar is always packed with
        high-value jobs nearby.
      </p>
    </div>

    <div className="edge-card">
      <div className="edge-icon">💳</div>
      <h3>Weekly Payouts</h3>
      <p>
        No more waiting for monthly cycles. Get your earnings deposited
        every Tuesday.
      </p>
    </div>

    <div className="edge-card">
      <div className="edge-icon">🛡️</div>
      <h3>Partner Protection</h3>
      <p>
        Comprehensive insurance coverage for all Hozify-booked jobs for
        total peace of mind.
      </p>
    </div>

    <div className="edge-card">
      <div className="edge-icon">🚀</div>
      <h3>Career Pathway</h3>
      <p>
        Go from an ISP to a Franchise owner with our internal promotion
        and credit program.
      </p>
    </div>

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
        <input type="text" placeholder="Alex Rivera" />
      </div>

      <div className="input-group">
        <label>Contact Email</label>
        <input type="email" placeholder="alex@servicepro.com" />
      </div>
    </div>

    <div className="input-group">
      <label>Primary Service Domain</label>

      <select>
        <option>Technical Maintenance</option>
        <option>Cleaning Services</option>
        <option>Electrical Services</option>
        <option>Plumbing</option>
      </select>
    </div>

    <button className="continue-btn">
      Continue →
    </button>

  </div>
</section>

{/* =========================
    Success Stories
========================= */}

<section className="stories-section">

  <h2>Partner Success Stories</h2>

  <div className="stories-grid">

    <div className="story-card">
      <div className="stars">★★★★★</div>

      <p>
        "Hozify didn't just give me jobs; they gave me a career
        infrastructure. In 6 months, I went from a solo handyman
        to managing a team of four."
      </p>

      <div className="story-user">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt=""
        />

        <div>
          <h4>Marcus Thorne</h4>
          <span>BSP Partner, Thorne & Co.</span>
        </div>
      </div>
    </div>

    <div className="story-card">
      <div className="stars">★★★★★</div>

      <p>
        "As a seller, the logistics overhead used to kill my
        margins. Hozify's internal supply chain network turned
        that around instantly."
      </p>

      <div className="story-user">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt=""
        />

        <div>
          <h4>Elena Chen</h4>
          <span>Logistics Vendor Partner</span>
        </div>
      </div>
    </div>

    <div className="story-card">
      <div className="stars">★★★★★</div>

      <p>
        "The tech stack provided is better than most enterprise
        tools I've paid for in the past. It's a game changer."
      </p>

      <div className="story-user">
        <img
          src="https://randomuser.me/api/portraits/men/65.jpg"
          alt=""
        />

        <div>
          <h4>David Okafor</h4>
          <span>Independent Pro Partner</span>
        </div>
      </div>
    </div>

  </div>
</section>

        
      </>
  );
}

export default Partner;