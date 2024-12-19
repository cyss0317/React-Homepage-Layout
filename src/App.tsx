
import "./App.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-1">
          <nav>
            <ul>
              <li>
                <a href="Facebook"><FaFacebook /></a>
              </li>
              <li>
                <a href="Instagram"><FaInstagram /></a>
              </li>
              <li>
                <a href="Twitter"><FaTwitter /></a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container-2">
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="container">
          <h2>Your Path to Financial Freedom Starts Here</h2>
          <p>
            Comprehensive financial planning and investment advice tailored to
            your unique goals.
          </p>
          <a href="#services" className="btn">
            Explore Our Services
          </a>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            At Professional Financial Planner, we are committed to helping
            individuals and businesses achieve financial stability and growth.
            Our team of experienced advisors works with you to create a plan
            that aligns with your specific goals and dreams.
          </p>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2>Our Services</h2>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <h2>Meet Our Team</h2>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            &copy; 2024 Professional Financial Planner. All rights reserved.
          </p>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
