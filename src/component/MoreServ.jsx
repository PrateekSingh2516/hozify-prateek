import "./MoreServ.css";
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
import { useState, useEffect } from "react";
import axios from "axios";

// Helper function to calculate distance using the Haversine formula (Earth radius = 6371 km)
const calculateHaversineDistance = (lat1, lon1, lat2, lon2) => {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 6371; 
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c); // returns distance in km
};

function MoreServ() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [locationKeyword, setLocationKeyword] = useState("");

  // Search execution states (triggered when user clicks "Discover")
  const [activeSearch, setActiveSearch] = useState("");
  const [activeLocation, setActiveLocation] = useState("");

  // Live Geolocation state
  const [userCoords, setUserCoords] = useState(null);

  // Ordering states
  const [priceOrder, setPriceOrder] = useState("default");
  const [ratingOrder, setRatingOrder] = useState("default");
  const [distanceOrder, setDistanceOrder] = useState("default");

  // Fetch all available services from backend and ask for browser location permissions
  useEffect(() => {
    fetchServices();
    
    // Request browser geolocation to dynamically compute km distances
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Geolocation permission denied or unavailable:", error.message);
        }
      );
    }
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/services");
      if (res.data && res.data.services) {
        setServices(res.data.services);
      }
    } catch (err) {
      console.error("Backend Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Trigger search filters when hitting 'Discover' or submitting the box
  const handleDiscover = (e) => {
    if (e) e.preventDefault();
    setActiveSearch(searchKeyword);
    setActiveLocation(locationKeyword);
  };

  // Helper function to set trending tags instantly
  const handleTrendingClick = (keyword) => {
    setSearchKeyword(keyword);
    setActiveSearch(keyword);
  };

  // Reset function to clear inputs and orders
  const handleResetFilters = () => {
    setSearchKeyword("");
    setLocationKeyword("");
    setActiveSearch("");
    setActiveLocation("");
    setSelectedCategory("All");
    setPriceOrder("default");
    setRatingOrder("default");
    setDistanceOrder("default");
  };

  if (loading) {
    return (
      <div className="page-loader">
        <div className="loader-spinner"></div>
        <h2>Loading Services...</h2>
      </div>
    );
  }

  // ======================================
  // DYNAMIC COMPUTE FILTERS & SORTS
  // ======================================
  
  // First, map over services to inject the real-time distance using schema coordinates
  let filteredServices = services.map((service) => {
    let computedDistance = service.distance || 0; // fallback if already calculated
    
    if (userCoords && service.coordinates) {
      const dist = calculateHaversineDistance(
        userCoords.latitude,
        userCoords.longitude,
        service.coordinates.latitude,
        service.coordinates.longitude
      );
      if (dist !== null) computedDistance = dist;
    }
    
    return { ...service, computedDistance };
  });

  // 1. Search Query Filter
  if (activeSearch !== "") {
    filteredServices = filteredServices.filter((service) =>
      service.title.toLowerCase().includes(activeSearch.toLowerCase())
    );
  }

  // 2. Location String Filter (Matches text like "Indore")
  if (activeLocation !== "") {
    filteredServices = filteredServices.filter((service) =>
      (service.location || "")
        .toLowerCase()
        .includes(activeLocation.toLowerCase())
    );
  }

  // 3. Category Bar Filter
  if (selectedCategory !== "All") {
    filteredServices = filteredServices.filter(
      (service) => service.category === selectedCategory
    );
  }

  // 4. Price Sorting
  if (priceOrder === "low") {
    filteredServices.sort((a, b) => a.price - b.price);
  } else if (priceOrder === "high") {
    filteredServices.sort((a, b) => b.price - a.price);
  }

  // 5. Rating Sorting
  if (ratingOrder === "high") {
    filteredServices.sort((a, b) => b.rating - a.rating);
  }

  // 6. Distance Sorting
  if (distanceOrder === "near") {
    filteredServices.sort((a, b) => a.computedDistance - b.computedDistance);
  } else if (distanceOrder === "far") {
    filteredServices.sort((a, b) => b.computedDistance - a.computedDistance);
  }

  return (
    <>
      <section className="more-services">
        {/* Hero */}
        <div className="more-hero">
          <p className="hero-subtitle">OPTIMISTIC ENGINEERING</p>

          <h1>
            Find The Expert Care
            <br />
            <span>Your Home Deserves.</span>
          </h1>

          {/* Search Box Form */}
          <form className="search-boxx" onSubmit={handleDiscover}>
            <div className="search-item">
              <FaSearch />
              <input
                type="text"
                className="fjbvfjvfn"
                placeholder="What service do you need today?"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <FaMapMarkerAlt />
              <input
                type="text"
                className="nvjfbvjvndsjvd"
                placeholder="Your Location (e.g. Indore)"
                value={locationKeyword}
                onChange={(e) => setLocationKeyword(e.target.value)}
              />
            </div>

            <button type="submit" className="cfcjhg">
              Discover
              <FaArrowRight />
            </button>
          </form>

          {/* Trending */}
          <div className="trending">
            <span>TRENDING</span>
            <p onClick={() => handleTrendingClick("AC")}>AC Repair</p>
            <p onClick={() => handleTrendingClick("Painting")}>House Painting</p>
            <p onClick={() => handleTrendingClick("Cleaning")}>Full Cleaning</p>
          </div>
        </div>

        {/* Category Bar */}
        <div className="category-bar">
          <div className="categories">
            {["All", "Cleaning", "Electrical", "Plumbing", "Appliances"].map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "activee" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "All" ? "All Services" : cat}
              </button>
            ))}
          </div>

          <div className="filters">
            <button
              onClick={() => {
                setRatingOrder("default");
                setDistanceOrder("default");
                setPriceOrder(priceOrder === "default" ? "low" : priceOrder === "low" ? "high" : "default");
              }}
            >
              Price <FaChevronDown />
            </button>

            <button
              onClick={() => {
                setPriceOrder("default");
                setDistanceOrder("default");
                setRatingOrder(ratingOrder === "default" ? "high" : "default");
              }}
            >
              Rating <FaChevronDown />
            </button>

            <button
              onClick={() => {
                setPriceOrder("default");
                setRatingOrder("default");
                setDistanceOrder(distanceOrder === "default" ? "near" : distanceOrder === "near" ? "far" : "default");
              }}
            >
              Distance <FaChevronDown />
            </button>
          </div>
        </div>
      </section>

      {/* Recommended Services */}
      <section className="zenith-section">
        <div className="zenith-header">
          <h2>
            Recommended <span>Services</span>
          </h2>
          <p>Showing {filteredServices.length} Services</p>
        </div>

        <div className="nova-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div className="orbit-card" key={service._id}>
                {/* Image */}
                <div className="stellar-image">
                  <img src={service.image} alt={service.title} />
                  {service.badge && <span className="galaxy-tag">{service.badge}</span>}
                  <button className="planet-heart">
                    <FaHeart />
                  </button>
                </div>

                {/* Body */}
                <div className="cosmos-body">
                  <div className="meteor-head">
                    <h3>{service.title}</h3>
                    <span className="spark-rate">
                      <FaStar />
                      {service.rating}
                    </span>
                  </div>
                  <p>{service.description}</p>

                  {/* Extra Info */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    <span>📍 {service.location}</span>
                    <span>🚗 {service.computedDistance} km</span>
                  </div>

                  {/* Footer */}
                  <div className="rocket-footer">
                    <div>
                      <small>Starting from</small>
                      <h4>${service.price}</h4>
                    </div>

                    <Link
                      to="/BookingStep1"
                      state={{
                        service: service.title,
                        category: service.category,
                        price: service.price,
                        duration: service.duration,
                        image: service.image,
                        rating: service.rating,
                        location: service.location,
                        distance: service.computedDistance,
                      }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <button className="launch-btn">Book Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ width: "100%", textAlign: "center", padding: "80px 0" }}>
              <h2>No Services Found</h2>
              <p>Try another search or location.</p>
            </div>
          )}
        </div>

        <button className="view-service-btn" onClick={handleResetFilters}>
          View All Services
          <FaRedo />
        </button>
      </section>

      {/* Trust Badges */}
      <section className="prime-section">
        <div className="prime-heading">
          <h2>
            Service Excellence
            <br />
            <span>Engineered for You.</span>
          </h2>
        </div>

        <div className="prime-card-row">
          <div className="prime-card">
            <div className="prime-icon-box">
              <FaShieldAlt />
            </div>
            <h3>Verified Professionals</h3>
            <p>Every technician undergoes a rigorous 5-step background and skill verification process.</p>
          </div>

          <div className="prime-card">
            <div className="prime-icon-box">
              <FaHistory />
            </div>
            <h3>On-Time Guarantee</h3>
            <p>We value your time. If we're late, you automatically receive service credits for your next booking.</p>
          </div>

          <div className="prime-card">
            <div className="prime-icon-box">
              <FaMoneyCheckAlt />
            </div>
            <h3>Transparent Pricing</h3>
            <p>No hidden charges. Every quote is visible before booking your service.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MoreServ;