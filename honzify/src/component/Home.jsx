import "./Home.css"

//hero
import {
  FaUser,
  FaStore,
  FaBriefcase,
  FaSuitcase,
} from "react-icons/fa";

//services
import {
  FaBroom,
  FaBolt,
  FaWrench,
  FaPaintRoller,
  FaSnowflake,
  FaTv,
  FaHammer,
  FaBug,
  FaCut,
  FaArrowRight,
  FaSpa,
  FaTools,
} from "react-icons/fa";
import { MdContentCut } from "react-icons/md";

import { useEffect, useState } from "react";
import axios from "axios";


import { Link } from "react-router-dom";
//economy
import {
  FaUsers,
  FaBuilding,
  FaBoxOpen,
} from "react-icons/fa";

const cards = [
    {
      icon: <FaUsers />,
      title: "Independent Providers",
      text: "Empowering individual skill with platform tools.",
    },
    {
      icon: <FaBuilding />,
      title: "Business Partners",
      text: "Scalable solutions for enterprise facility management.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Equipment Sellers",
      text: "Verified supply chain for quality consumables.",
    },
    {
      icon: <FaStore />,
      title: "Franchisees",
      text: "Local ownership backed by global technology.",
    },
  ];

//works
import{
    FaSearch,
    FaCalendarCheck,
    FaUserCheck,
    FaCheck,
}from "react-icons/fa";

//appdownload
import { FaApple, 
        FaGooglePlay } from "react-icons/fa";




function Home(){

  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);
const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "https://hozify-backend.onrender.com/api/home-services"
      );

      setServices(res.data.services);
      setFilteredServices(res.data.services);
    } catch (err) {
      console.log(err);
    }
  };

  fetchServices();
  setTimeout(() => {
  setShowIntro(false);
}, 2000);
}, []);

const iconMap = {
  FaBroom: <FaBroom />,
  FaBolt: <FaBolt />,
  FaWrench: <FaWrench />,
  FaPaintRoller: <FaPaintRoller />,
  FaSnowflake: <FaSnowflake />,
  FaTv: <FaTv />,
  FaHammer: <FaHammer />,
  FaBug: <FaBug />,
  FaCut: <FaCut />,
  MdContentCut: <MdContentCut />,
  FaBriefcase: <FaBriefcase />,
  FaSpa: <FaSpa />,
  FaTools: <FaTools />,
};

const handleSearch = () => {
    const result = services.filter((service) =>
        service.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredServices(result);
};

if (showIntro) {

  return (

    <div className="home-intro-loader">

      <div className="loader-content">

        <div className="loader-logo">
          H
        </div>

        <h1>HOZIFY</h1>

        <div className="loader-line">

          <div className="loader-progress"></div>

        </div>

        <p>
          Optimistic Engineering for Modern Services
        </p>

      </div>

    </div>

  );

}
    return(

       <div className="home-page-fade">

        
    {/* Hero */}
        
        <section className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <div className="badge">
            Trusted by 1M+ Households
          </div>

          <h1>
            Book Trusted
             <br />
            Home & <span>Business</span> 
            <br />
            <span>Services</span> Near You
          </h1>

          <p>
            From cleaning and repairs to complex business solutions,
            Hozify connects you with verified professionals in minutes.
            Experience the future of service delivery.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="What service do you need?"
               value={search}
    onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>
    Search
</button>
          </div>
        </div>

        <div className="hero-right">

          <div className="center-circle">
            <div className="inner-circle">H</div>
          </div>

          <div className="floating-card customer">
            <FaUser />
            <div>
              <h4>Customer</h4>
              <span>Booking Ease</span>
            </div>
          </div>

          <div className="floating-card partner">
            <FaBriefcase />
            <div>
              <h4>Partner</h4>
              <span>Enterprise</span>
            </div>
          </div>

          <div className="floating-card seller">
            <FaStore />
            <div>
              <h4>Seller</h4>
              <span>Equipment</span>
            </div>
          </div>

          <div className="floating-card provider">
            <FaSuitcase />
            <div>
              <h4>Provider</h4>
              <span>Verified Pros</span>
            </div>
          </div>

        </div>

      </div>
    </section>
        

        {/* servicves */}
         <section className="services">
      <div className="services-container">
        <h2>Explore Our Services</h2>
        <p>
          Quality services for every need, delivered by vetted experts.
        </p>

        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div className="service-card" key={index}> 
              <div className="service-icon">
  {iconMap[service.icon]}
</div>

<h3>{service.name}</h3>

<span>
  {service.rating} ★ ({service.reviews})
</span>
            </div>
          ))}
        </div>
      </div>

      <Link to="/MoreServ"
      onClick={() => window.scrollTo(0, 0)}>
      <div className="exp-more">
              <button>
                More Services
                <FaArrowRight/>
              </button>
            </div>
            </Link>

    </section>

            


    {/* advantages */}
    <section className="advantages-section">
      <div className="advantages-container">
        
       
        <h2 className="advantages-title">The Hozify Advantage</h2>

        <div className="advantages-grid">
          
          
          <div className="advantage-card card-featured">
            <div className="card-text-content">
              <div className="icon-wrapper badge-blue">
                <FaBriefcase/>
              </div>
              <h3 className="card-heading">100% Verified Professionals</h3>
              <p className="card-description">
                Every partner undergoes a rigorous 5-step <br/>verification process including background checks,<br /> skill assessments, and quality training to ensure your <br />safety and satisfaction.
              </p>
            </div>
            <div className="card-image-wrapper">
             
              <img 
                src="https://plus.unsplash.com/premium_photo-1661477628107-2d32f30d13c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Verified Professional" 
                className="card-img"
              />
            </div>
          </div>

       
          <div className="advantage-card card-dark">
            <div className="icon-wrapper no-background text-light">
              <FaBriefcase className="icon-large"/>
            </div>
            <h3 className="card-heading">Transparent Pricing</h3>
            <p className="card-description">
              No hidden costs. See fixed upfront prices for every service before you book.
            </p>
          </div>

       
          <div className="advantage-card card-blue">
            <div className="icon-wrapper no-background text-light">
              <FaBriefcase className="icon-large"/>
            </div>
            <h3 className="card-heading">Fast Booking</h3>
            <p className="card-description">
              Confirm your service in less than 60 seconds with our streamlined app experience.
            </p>
          </div>

          <div className="advantage-card card-light">
            <div className="icon-wrapper no-background text-blue">
              <FaBriefcase className="icon-large"/>
            </div>
            <h3 className="card-heading">Secure Experience</h3>
            <p className="card-description">
              End-to-end encryption for payments and 24/7 emergency support during service visits.
            </p>
          </div>

          <div className="advantage-card card-light">
            <div className="icon-wrapper no-background text-blue">
              <FaBriefcase className="icon-large"/>
            </div>
            <h3 className="card-heading">Multi-City Coverage</h3>
            <p className="card-description">
              Operating across 50+ major cities with a growing network of local hubs.
            </p>
          </div>

        </div>
      </div>
    </section>

     {/* economy */}
     <section className="economy">
      <div className="economy-container">
        <h2>Empowering the Service Economy</h2>

        <p className="economy-subtitle">
          We don't just provide services; we build ecosystems.
          Hozify connects providers, businesses, and franchisees
          into a single, high-performance network.
        </p>

        <div className="economy-grid">
          {cards.map((card, index) => (
            <div className="economy-card" key={index}>
              <div className="economy-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* works */}
    <section className="works">
            <div className="works-container">
                    <h2>
                        How Hozify Works
                    </h2>

                <div className="timeline">
                    <div className="timeline-line"></div>

                <div className="step ">
                    <div className="step-icon">
                        <FaSearch/>
                    </div>
                    <h4>Select Service</h4>

                     <p>
              Choose from 100+ categories
              based on your needs.
            </p>
                </div>
                          <div className="step ">
            <div className="step-icon">
              <FaCalendarCheck />
            </div>

            <h4>Pick Time</h4>

            <p>
              Choose a slot that fits your busy
              schedule.
            </p>
          </div>

          <div className="step ">
            <div className="step-icon">
              <FaUserCheck />
            </div>

            <h4>Pro Assigned</h4>

            <p>
              A verified professional is
              dispatched to your door.
            </p>
          </div>
                <div className="step">
            <div className="step-icon inactive">
              <FaCheck />
            </div>

            <h4>Sit Back & Relax</h4>

            <p>
              Get high-quality results with full
              service warranty.
            </p>
          </div>
                
                </div>

            </div>


        {/*INDIA SECTION */}
        
        <div className="india-section">
            <div className="india-left">
                <h2>Serviceable Across India</h2>


        <p>
            We are rapidly expanding our footprint.
            From metropolitan hubs to emerging smart
            cities, Hozify is bringing quality services
            to every doorstep.
                </p>
            
            <div className="city-info">
                <span className="tier1">
                    ● Tier 1 Cities (Live)
                </span>

                <span className="tier2">
                    ● Tier 2 Cities (Growing)
                </span>
            </div>
            </div>

            <div className="india-right">
                <div className="map-card">
                    <img
              src="https://i.pinimg.com/736x/6c/07/13/6c07135a2057934ba405405182362442.jpg"
              alt="India Map"
            />

                 <div className="map-badge">
              50+ Cities & Counting
            </div>
                </div>
            </div>

            
        </div>



        </section>


        {/* appdwnld */}
         <section className="app-download">
            <div className="download-container">

                <div className="download-content">
                    <h2>
                         Services at your
                         <br />
                         Fingertips
                    </h2>

                    <p>
                         Download the Hozify app for exclusive discounts,
                        real-time pro tracking, and 24/7 priority support.
                    </p>

                    <div className="store-buttons">
                        <button className="store-btn">
                                <FaApple/>
                                App Store
                        </button>

                        <button className="store-btn">
                            <FaGooglePlay/>
                            Google Play
                        </button>
                    </div>
                </div>
                <div className="download-image">
                    <img src="https://frejaeid.com/wp-content/uploads/2023/05/QuickLogin.jpg" alt="Mobile App" />
                </div>
            </div>
            
        </section>

    </div>

    );
}

export default Home;