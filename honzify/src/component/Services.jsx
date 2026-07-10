import "./Services.css"
import { TiTickOutline } from "react-icons/ti";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Service(){

const [plans, setPlans] = useState([]);
useEffect(() => {

    const fetchPlans = async () => {

        try{

            const res = await axios.get(
                "https://hozify-backend.onrender.com/api/service-plans"
            );

            setPlans(res.data.plans);

        }catch(error){

            console.log(error);

        }

    };

    fetchPlans();

},[]);


    return(
        <>

        {/* Green line ke upar wala part */}
        <div className="service">
         
        <div className="trs">
            <TiTickOutline />
            <h3>TOP RATED SERVICE</h3>
        </div>

        <div className="pdc">
            <h1>Professional Home <span>Deep <br />
                Cleaning</span></h1>
            
            <p>
                Experience a transitive clean that reaches every corner. Our expert team 
                uses hospital-grade equipment and eco-friendly solutions to sanitize and
                revalitize your enitire living space 
            </p>
            <div className="ratings">
                <div className="rating-box">
        <h3>4.9/5</h3>
        <p>2,400+ Reviews</p>
    </div>

    <div className="divider"></div>

    <div className="rating-box">
        <h3>10K+</h3>
        <p>Homes Serviced</p>
    </div>
            </div>

            <img src="https://media.istockphoto.com/id/2172691408/photo/professional-cleaner-cleaning-windows-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=P7FQUtlT-KE7lgmWDKb2Tvqnu-sgJzKkrkzevETHkLI=" alt="House Cleaner😂" />

        </div>
        
        
{/* Scope Of Service */}

<section className="scope-section">

  <h2>Scope of Service</h2>

  <p className="scope-subtitle">
    Comprehensive cleaning solutions tailored to every room in your home,
    ensuring total hygiene and aesthetic perfection.
  </p>

  <div className="scope-cards">

    <div className="scope-card">
      <div className="scope-icon">⌂</div>

      <h3>Kitchen & Dining</h3>

      <p>
        Deep degreasing of chimney, stovetops, cabinets (inside-out),
        and appliance exteriors.
      </p>

      <ul>
        <li>✓ Chimney Degreasing</li>
        <li>✓ Cabinet Sanitization</li>
        <li>✓ Grout Whitening</li>
      </ul>
    </div>

    <div className="scope-card active">
      <div className="scope-icon">🛁</div>

      <h3>Bathrooms</h3>

      <p>
        Total descaling of taps, showerheads, and tiles.
        Hospital-grade disinfection of all touchpoints.
      </p>

      <ul>
        <li>✓ Full Disinfection</li>
      </ul>
    </div>

    <div className="scope-card">
      <div className="scope-icon">🛋</div>

      <h3>Living Areas</h3>

      <p>
        Dusting of all electronics, upholstery vacuuming,
        and balcony pressure washing.
      </p>

      <ul>
        <li>✓ Electronics Cleaning</li>
        <li>✓ Upholstery Vacuuming</li>
      </ul>
    </div>

  </div>

  <div className="hepa-section">

    <img
      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
      alt="HEPA Vacuum"
    />

    <div className="hepa-content">
      <h3>Industrial HEPA Filtration</h3>

      <p>
        We use industrial-grade HEPA vacuums that capture 99.9% of
        allergens and micro-dust, improving your home's air quality
        significantly. This is essential for homes with children,
        pets, or allergy sufferers.
      </p>
    </div>

  </div>

</section>

{/* Pricing Section */}

<section className="pricing-section">

  <h2 className="cyp">Choose Your Plan</h2>

  <p className="pricing-subtitle">
    Transparent pricing with no hidden costs. Select the package that fits your home's needs.
  </p>

  <div className="pricing-cards">

    {plans.map((plan) => (

        <div
            key={plan._id}
            className={`plan-card ${
                plan.theme === "dark"
                    ? "elite-card"
                    : plan.popular
                    ? "featured-card"
                    : ""
            }`}
        >

            {plan.popular && (
                <div className="popular-badge">
                    MOST POPULAR
                </div>
            )}

            <p className="plan-name">
                {plan.planName}
            </p>

            <div className="price">
                ${plan.price}
                <span>{plan.duration}</span>
            </div>

            <ul>

                {plan.features.map((feature, index) => (

                    <li key={index}>
                        ✓ {feature}
                    </li>

                ))}

            </ul>

            <Link
  to="/BookingStep1"
  onClick={()=> window.scrollTo(0, 0)}
  state={{
    service: plan.planName,
    price: plan.price,
    duration: plan.duration,
  }}
>
  <button
    className={
      plan.theme === "dark"
        ? "elite-btn"
        : plan.popular
        ? "pro-btn"
        : "basic-btn"
    }
  >
    {plan.buttonText}
  </button>
</Link>

        </div>

    ))}

</div>

</section>

{/* Customer Stories */}

<section className="testimonial-section">

  <div className="testimonial-top">

    <div>
      <h2>Customer Stories</h2>
      <p>Verified feedback from real Hozify users.</p>
    </div>

    <a href="/">View All 2k+ Reviews →</a>

  </div>

  <div className="testimonial-card">

    <div className="customer-avatar">
      SC
    </div>

    <div className="customer-content">

      <div className="customer-header">
        <div>
          <h4>Sarah Chen</h4>
          <span>Verified Customer</span>
        </div>

        <div className="stars">
          ★★★★★
        </div>
      </div>

      <p className="review-text">
        "The deep cleaning was incredible. They spent 6 hours at my place and didn't miss a single corner.
        The kitchen looks brand new, and the grout in the bathroom is actually white again.
        Totally worth the investment."
      </p>

    </div>

  </div>

</section>

{/* FAQ SECTION */}

<section className="faq-section">

  <h2>Common Questions</h2>

  <p className="faq-subtitle">
    Everything you need to know about our deep cleaning process.
  </p>

  <div className="faq-container">

    <details className="faq-item">
      <summary>Do I need to be home?</summary>
      <p>
        No. You can provide access instructions and our verified team
        will handle the cleaning professionally.
      </p>
    </details>

    <details className="faq-item">
      <summary>What cleaning agents do you use?</summary>
      <p>
        We use eco-friendly, child-safe and hospital-grade cleaning
        products for maximum hygiene and safety.
      </p>
    </details>

  </div>

</section>


        
        </div>
        </>
        
       
    );
}
export default Service









