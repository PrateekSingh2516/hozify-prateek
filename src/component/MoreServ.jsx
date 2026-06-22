import "./MoreServ.css"
import {
  FaSearch,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronDown,
  FaHeart,
  FaStar,
  FaRedo,
  FaShieldAlt,
  FaHistory,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";


function MoreServ(){
    return(
        <>
        <section className="more-services">
            {/* Hero Section */}
            <div className="more-hero">
                <p className="hero-subtitle">
                    OPTIMISTIC ENGINEERING
                </p>

                <h1>
                     Find The Expert Care
                     <br />
                     <span>Your Home Deserves.</span>
                </h1>

                {/* Search Bar */}
                <div className="search-boxx">
                    <div className="search-item">
                        <FaSearch/>
                        <input
              type="text"
              placeholder="What service do you need today?"
            />
                    </div>

                    <div className="divider"></div>
                    <div className="search-item">
            <FaMapMarkerAlt />
            <input
              type="text"
              placeholder="Your Location"
            />
          </div>
                <button className="cfcjhg">
            Discover
            <FaArrowRight />
          </button>

                </div>

                {/* Trending */}
                <div className="trending">
                    <span>TRENDING</span>
                    <p>AC Repair</p>

          <p>House Painting</p>

          <p>Full Cleaning</p>


                </div>

            </div>

                  {/* Category Filter */}

                  <div className="category-bar">

        <div className="categories">

          <button className="activee">
            All Services
          </button>

          <button>Cleaning</button>

          <button>Electrical</button>

          <button>Plumbing</button>

          <button>Appliances</button>

        </div>

        <div className="filters">

          <button>
            Price <FaChevronDown />
          </button>

          <button>
            Rating <FaChevronDown />
          </button>

          <button>
            Distance <FaChevronDown />
          </button>

        </div>

      </div>
        </section>

            {/* ================= Recommended Services ================= */}

<section className="zenith-section">

  <div className="zenith-header">

    <h2>
      Recommended <span>Services</span>
    </h2>

    <p>Showing 12 of 84 results</p>

  </div>

  <div className="nova-grid">

    {/* Card 1 */}

    <div className="orbit-card">

      <div className="stellar-image">

        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900"
          alt="Cleaning"
        />

        <span className="galaxy-tag">Top Rated</span>

        <button className="planet-heart">
          <FaHeart />
        </button>

      </div>

      <div className="cosmos-body">

        <div className="meteor-head">

          <h3>Premium Deep Cleaning</h3>

          <span className="spark-rate">
            <FaStar /> 4.9
          </span>

        </div>

        <p>
          Hospital-grade disinfection and thorough cleaning
          for your entire living space.
        </p>

        <div className="rocket-footer">

          <div>

            <small>Starting from</small>

            <h4>$129</h4>

          </div>

          <Link to="/BookingStep1"
          state={{
    service: "Premium Deep Cleaning",
    category: "PREMIUM CLEANING",
    price: 129,
    duration: "Est. 4 hours",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900"
  }}
          onClick={() => window.scrollTo(0, 0)}>
          <button className="launch-btn">
            Book Now
          </button>
          </Link>

        </div>

      </div>

    </div>

    {/* Card 2 */}

    <div className="orbit-card">

      <div className="stellar-image">

        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&auto=format&fit=crop&q=80"
          alt="AC Service"
        />

        <span className="galaxy-tag">Quick Fix</span>

        <button className="planet-heart">
          <FaHeart />
        </button>

      </div>

      <div className="cosmos-body">

        <div className="meteor-head">

          <h3>AC Smart Servicing</h3>

          <span className="spark-rate">
            <FaStar /> 4.8
          </span>

        </div>

        <p>
          Complete multi-point diagnostic and jet cleaning
          for optimal cooling performance.
        </p>

        <div className="rocket-footer">

          <div>

            <small>Starting from</small>

            <h4>$89</h4>

          </div>

          <Link
  to="/BookingStep1"
  state={{
    service: "AC Smart Servicing",
    category: "QUICK FIX",
    price: 89,
    duration: "Est. 3 hours",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&auto=format&fit=crop&q=80"
  }}
  onClick={() => window.scrollTo(0, 0)}
>
  <button className="launch-btn">Book Now</button>
</Link>

        </div>

      </div>

    </div>

    {/* Card 3 */}

    <div className="orbit-card">

      <div className="stellar-image">

        <img
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900"
          alt="Painting"
        />

        <span className="galaxy-tag">Artistic</span>

        <button className="planet-heart">
          <FaHeart />
        </button>

      </div>

      <div className="cosmos-body">

        <div className="meteor-head">

          <h3>Interior Redesign</h3>

          <span className="spark-rate">
            <FaStar /> 5.0
          </span>

        </div>

        <p>
          Premium wall textures and color consultations
          from certified professionals.
        </p>

        <div className="rocket-footer">

          <div>

            <small>Starting from</small>

            <h4>$249</h4>

          </div>

          <Link
  to="/BookingStep1"
  state={{
    service: "Interior Redesign",
    category: "ARTISTIC",
    price: 249,
    duration: "Est. 6 hours",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900"
  }}
  onClick={() => window.scrollTo(0, 0)}
>
  <button className="launch-btn">Book Now</button>
</Link>

        </div>

      </div>

    </div>

    {/* Card 4 */}

    <div className="orbit-card">

      <div className="stellar-image">

        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
          alt="Smart Home"
        />

        <button className="planet-heart">
          <FaHeart />
        </button>

      </div>

      <div className="cosmos-body">

        <div className="meteor-head">

          <h3>Smart Home Install</h3>

          <span className="spark-rate">
            <FaStar /> 4.7
          </span>

        </div>

        <p>
          Professional installation of smart lighting,
          security cameras and automation.
        </p>

        <div className="rocket-footer">

          <div>

            <small>Starting from</small>

            <h4>$179</h4>

          </div>

          <Link
  to="/BookingStep1"
  state={{
    service: "Smart Home Install",
    category: "SMART HOME",
    price: 179,
    duration: "Est. 5 hours",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
  }}
  onClick={() => window.scrollTo(0, 0)}
>
  <button className="launch-btn">Book Now</button>
</Link>

        </div>

      </div>

    </div>

    {/* Card 5 */}

    <div className="orbit-card">

      <div className="stellar-image">

        <img
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=900"
          alt="Plumbing"
        />

        <button className="planet-heart">
          <FaHeart />
        </button>

      </div>

      <div className="cosmos-body">

        <div className="meteor-head">

          <h3>Luxury Plumbing</h3>

          <span className="spark-rate">
            <FaStar /> 4.9
          </span>

        </div>

        <p>
          Correction of complex leaks, fixture upgrades
          and complete maintenance.
        </p>

        <div className="rocket-footer">

          <div>

            <small>Starting from</small>

            <h4>$110</h4>

          </div>

          <Link
  to="/BookingStep1"
  state={{
    service: "Luxury Plumbing",
    category: "PLUMBING",
    price: 110,
    duration: "Est. 2 hours",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=900"
  }}
  onClick={() => window.scrollTo(0, 0)}
>
  <button className="launch-btn">Book Now</button>
</Link>

        </div>

      </div>

    </div>

    {/* Card 6 */}

    <div className="orbit-card">

      <div className="stellar-image">

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
          alt="Wood Work"
        />

        <button className="planet-heart">
          <FaHeart />
        </button>

      </div>

      <div className="cosmos-body">

        <div className="meteor-head">

          <h3>Custom Woodwork</h3>

          <span className="spark-rate">
            <FaStar /> 4.9
          </span>

        </div>

        <p>
          Bespoke furniture repair and custom cabinetry
          designed for modern homes.
        </p>

        <div className="rocket-footer">

          <div>

            <small>Starting from</small>

            <h4>$199</h4>

          </div>

          <Link
  to="/BookingStep1"
  state={{
    service: "Custom Woodwork",
    category: "WOODWORK",
    price: 199,
    duration: "Est. 7 hours",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
  }}
  onClick={() => window.scrollTo(0, 0)}
>
  <button className="launch-btn">Book Now</button>
</Link>

        </div>

      </div>

    </div>

  </div>

  <button className="view-service-btn">
    View All Services <FaRedo />
  </button>

</section>

        {/* ================= Service Excellence ================= */}

<section className="prime-section">

    <div className="prime-heading">

        <h2>
            Service Excellence
            <br />
            <span>Engineered for You.</span>
        </h2>

    </div>

    <div className="prime-card-row">

        {/* Card 1 */}

        <div className="prime-card">

            <div className="prime-icon-box">
                <FaShieldAlt />
            </div>

            <h3>Verified Professionals</h3>

            <p>
                Every technician undergoes a rigorous
                5-step background and skill
                verification process.
            </p>

        </div>

        {/* Card 2 */}

        <div className="prime-card">

            <div className="prime-icon-box">
                <FaHistory />
            </div>

            <h3>On-Time Guarantee</h3>

            <p>
                We value your time. If we're late,
                you get a 20% discount on your next
                service automatically.
            </p>

        </div>

        {/* Card 3 */}

        <div className="prime-card">

            <div className="prime-icon-box">
                <FaMoneyCheckAlt />
            </div>

            <h3>Transparent Pricing</h3>

            <p>
                No hidden fees. You get the exact
                quote upfront before the work
                even begins.
            </p>

        </div>

    </div>

</section>


        
        </>
    );

}

export default MoreServ;