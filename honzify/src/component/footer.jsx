import "./footer.css"
import { FaInstagram,FaSquareXTwitter,FaLinkedin } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";

function Footer(){
    const [footerEmail, setFooterEmail] = useState("");

    const subscribeFooter = async () => {
  if (!footerEmail.trim()) {
    alert("Please enter your email.");
    return;
  }

  try {
    const res = await axios.post(
      "https://hozify-backend.onrender.com/api/blog/subscribe",
      {
        email: footerEmail,
      }
    );

    alert(res.data.message);

    setFooterEmail("");

  } catch (err) {
    alert(
      err.response?.data?.message ||
      "Subscription Failed"
    );
  }
};
    return(
        <footer className="footer">

        <div className="footer-container">

        <div className="footer-about">
            <p>Optimistic Engineering for Modern <br />
            Services. Connecting the dots between <br />
            quality and convenience.</p> 

            <div className="icons-fott">
                <FaInstagram/>
                <FaSquareXTwitter/>
                <FaLinkedin/>
            </div>
        </div>

        <div className="footer-linksss">
       

        <div className="foot1">
            <h4>SERVICE CATEGOIES</h4>

            <ul>
                <li>Home Cleaning</li>
                <li>Electrical</li>
                <li>Beauty & Salon</li>
                <li>Buisness Solutions</li>
            </ul>
        </div>

        <div className="foot1">
            <h4>COMPANY</h4>

            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="foot1">

        <h4>RESOURCES</h4>
        <ul>
            <li>Partner Hub</li>
              <li>Franchise</li>
            <li>Community</li>
            <li>Blog</li>
        </ul>
        </div>
             
        </div>

        <div className="foot2">
            
              <h4>NEWSLETTER</h4>
              <p>
            Get the latest updates on new services.
          </p>


          <div className="input-foot">
         <input
type="email"
placeholder="your email"
value={footerEmail}
onChange={(e) => setFooterEmail(e.target.value)}
/>
          <button className="subscribe-btn" onClick={subscribeFooter}>
            Subscribe
          </button>
          </div>

          
        </div>


     </div>
        
        <hr />

        <div className="foot-bottom">
            © 2024 Hozify. Optimistic Engineering for Modern Services.
        </div>


    </footer>

    );
}

export default Footer;