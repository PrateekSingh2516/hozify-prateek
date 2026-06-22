import "./Franchise.css"
import { FaArrowRight,FaEnvelope, FaPhoneAlt } from "react-icons/fa";



function Franchise(){
  return(
    <>
    <section className="franchise-hero">
        <div className="franchise-container">

          {/* Left Content */}
          <div className="franchise-content">

            <span className="franchise-badge">
              Investment Opportunity 2024
            </span>

            <h1>
              Scale with the
              <span> Future of Service</span>
              Operations.
            </h1>

            <p>
              Join Hozify's mission to modernize home and commercial
              service management. Become a franchise partner and
              leverage our proprietary OS to dominate your territory.
            </p>

            <div className="franchise-buttons">

              <button className="primary-btn">
                Request Prospectus
                <FaArrowRight />
              </button>

              <button className="secondary-btn">
                View Market Data
              </button>

            </div>

          </div>

          {/* Right Image */}

          <div className="franchise-image">

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
              alt="Office"
            />

            <div className="growth-card">
              <h3>14.2%</h3>
              <p>Avg. Quarterly Growth</p>
            </div>

          </div>

        </div>
      </section>

      {/* Stats Bar */}

      <section className="franchise-stats">

        <div className="stat-item">
          <h2>24+</h2>
          <p>ACTIVE TERRITORIES</p>
        </div>

        <div className="stat-item">
          <h2>180+</h2>
          <p>CERTIFIED PARTNERS</p>
        </div>

        <div className="stat-item">
          <h2>98+</h2>
          <p>EFFICIENCY %</p>
        </div>

        <div className="stat-item">
          <h2>12+</h2>
          <p>MONTHS ROI (AVG)</p>
        </div>

      </section>


      {/* ==========================
    Hozify Edge Section
========================== */}

<section className="franchise-edge">

  <div className="edge-header">
    <h2>The Hozify Edge</h2>
    <p>
      Superior technology meets local entrepreneurship.
      We provide the infrastructure; you provide the vision.
    </p>
  </div>

  {/* Row 1 */}
  <div className="edge-row">

    <div className="edge-card service-os">
      <div className="edge-iconn">⌘</div>
      <h3>Proprietary Service OS</h3>
      <p>
        Automate scheduling, billing, and workforce management with our
        custom-built SaaS platform. Reduce administrative overhead by
        up to 60% compared to traditional models.
      </p>
    </div>

    <div className="edge-card territory-card">
      <div className="edge-iconn">📊</div>
      <h3>Data-Driven Territory</h3>
      <p>
        We use hyper-local demographic data and service heatmaps to
        assign territories with the highest revenue potential.
      </p>
    </div>

  </div>

  {/* Row 2 */}
  <div className="edge-row">

    <div className="edge-card training-card">
      <div className="edge-iconn">🎓</div>
      <h3>Elite Training</h3>
      <p>
        A 4-week intensive bootcamp covering operations, technology,
        and Hozify's signature customer experience standards.
      </p>
    </div>

    <div className="edge-card marketing-card">

      <div className="marketing-content">
        <h3>Centralized Marketing</h3>

        <p>
          Benefit from national brand campaigns and localized digital
          lead generation handled by our expert marketing team.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
        alt=""
      />

    </div>

  </div>

</section>

        {/* ==================================
    Territory + Investment Section
================================== */}

        <section className="territory-section">
              <div className="territory-container">

                <div className="territory-image">
                  <img src="https://media.istockphoto.com/id/2150963832/vector/singapore-map-created-from-lines-and-bright-points-in-the-form-of-starry-sky-with-polygonal.jpg?s=612x612&w=0&k=20&c=Yk_uDdqBx2DbUXfqskWBSEL1XfLj8jWuAc9tWQOd0FI=" alt="" />
                    <div className="region-badge">
                        ● Region A: Active
                    </div>
                </div>

                <div className="territory-content">
                  <h2>Exclusive Territory Model</h2>

                  <p>
                    Our "Node & Mesh" territory strategy ensures that your
        investment is protected. We grant exclusive rights to
        high-growth zones, preventing internal competition and
        maximizing localized brand dominance.
                  </p>

                  <div className="territory-feature">
                    <div className="feature-icon">✦</div>

                    <div className="feature-text">
                      <h4>Guaranteed Exclusive Zones</h4>
                      <span>
                        Minimum population density of 250,000 per territory.
                      </span>
                    </div>
                  </div>

                  <div className="territory-feature">
                    <div className="feature-icon">↗</div>

                    <div className="feature-text">
                      <h4>Rapid Launch Protocol</h4>
                      <span>
                        Go from agreement to operational in 45 days.
                      </span>
                    </div>
                  </div>

                </div>
              </div>
        </section>


{/* ==================================
        Investment Tiers
================================== */}

      <section className="investment-section">
            <div className="investment-header">
              <h2>Investment Tiers</h2>
              <p>
                Transparent structures designed for every scale of entrepreneurship
              </p>
            </div>

            <div className="pricing-cards">
                <div className="pricing-card">
                  <span className="tier-name">ESSENTIAL</span>
                  <h3>$45k <span>startup</span></h3>
                  <ul>
        <li>✓ Single Territory</li>
        <li>✓ Basic OS Suite</li>
        <li>✓ Remote Training</li>
      </ul>
          <button className="outline-btn">
        Learn More
      </button>
                </div>

                <div className="pricing-card featured">

      <div className="popular-badgee">
        MOST POPULAR
      </div>

      <span className="tier-name blue">
        GROWTH PARTNER
      </span>

      <h3>
        $120k <span>startup</span>
      </h3>

      <ul>
        <li>✓ Triple Territory Bundle</li>
        <li>✓ Premium OS + Analytics</li>
        <li>✓ In-Person Launch Support</li>
        <li>✓ Priority Lead Generation</li>
      </ul>

      <button className="primary-invest-btn">
        Select Growth
      </button>

    </div>
          <div className="pricing-card">

      <span className="tier-name">
        ENTERPRISE
      </span>

      <h3>
        $350k+ <span>startup</span>
      </h3>

      <ul>
        <li>✓ Regional Master License</li>
        <li>✓ Custom White-Label API</li>
        <li>✓ Dedicated Success Manager</li>
      </ul>

      <button className="outline-btn">
        Contact Sales
      </button>

    </div>
            </div>
      </section>




{/* ==========================
    Contact / Application Section
========================== */}
<section className="franchise-section">
      <div className="franchisee-container">
        
        
        <div className="franchise-info">
          <h2>Begin Your Journey</h2>
          <p className="franchise-subtitle">
            Submit your details for a preliminary screening. Our investment
            directors will reach out within 48 business hours to schedule a
            discovery call.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-wrapper">
              
                <span>✉</span> 
              </div>
              <a href="mailto:partners@hozify.com">partners@hozify.com</a>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
            
                <span>📞</span>
              </div>
              <a href="tel:+18004694391">+1 (800) HOZIFY-1</a>
            </div>
          </div>
        </div>

    
        <div className="franchise-form-card">
          <form className="franchise-form">
            
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Investment Liquid Capital</label>
              <select defaultValue="">
                <option value="" disabled hidden>$50k - $100k</option>
                <option value="50-100">$50k - $100k</option>
                <option value="100-250">$100k - $250k</option>
                <option value="250plus">$250k+</option>
              </select>
            </div>

            <div className="form-group">
              <label>Target Territory (State/Province)</label>
              <input type="text" placeholder="e.g. California" required />
            </div>

            <div className="form-group">
              <label>Additional Context</label>
              <textarea placeholder="Tell us about your background..." rows="3"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Application
            </button>

            <p className="form-disclaimer">
              By submitting, you agree to our Investor Privacy Policy and Confidentiality Terms.
            </p>
          </form>
        </div>

      </div>
    </section>

    </>
  );
}
export default Franchise;