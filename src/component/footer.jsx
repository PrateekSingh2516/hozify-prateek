import "./footer.css"
import { FaInstagram,FaSquareXTwitter,FaLinkedin } from "react-icons/fa6";


function Footer(){
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
          />
          <button className="subscribe-btn">
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