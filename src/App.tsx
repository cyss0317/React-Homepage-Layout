import "./App.css";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

function App() {
  return (
    <div className="roboto-regular">
      <header className="App-header relative slide-in-from-left text-zinc-50 flex justify-between flex-col align">
        <div className="ssn-contacts text-xl bg-emerald-950 grid grid-cols-4 auto-cols-max">
          <div className="header-title m-4 grid col-start-1 col-span-3 pop-from-bottom-delay">
            HEADER TITLE
          </div>
          <div className="col-start-5 m-4 relative">
            <NavLinks />
            <Hamburger />
          </div>
        </div>
        <div className="container-2 bg-white-50 text-teal-900 grid row-start-1 col-span-5 row-span-2"></div>
      </header>

      <div className="slide-in-from-right relative z-negative">
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
            <h2>About Me</h2>
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
      </div>

      <footer className="slide-in-from-left z-negative fixed bottom-0 w-full">
        <div className="footer-container text-sm text-zinc-50 bg-emerald-950 flex flex-col justify-center items-center">
          <p>
            &copy; 2024 Professional Financial Planner. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li className="hover:underline hover:text-zinc-400">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="hover:underline hover:text-zinc-400">
              <a href="#">Terms of Service</a>
            </li>
            <li className="hover:underline hover:text-zinc-400">
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
