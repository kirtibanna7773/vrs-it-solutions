import { useState, useEffect } from "react";
// import css
import "./Header.css";
// import another fil
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(message);
    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  };
  // scroll eff
  const [showScrollTop, setShowScrollTop] = useState(false);

  // loader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // timer for load eff
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loader-circle"></div>
          <p>VRS IT Solutions</p>
        </div>
      )}
      <Header />
      <Hero />
      <section id="about">
        <div className="about-content">
          <span className="section-tag">ABOUT US</span>

          <h2>We Create Digital Solutions</h2>

          <p>
            VRS IT Solutions provides modern web development, app development,
            software development and digital solutions for businesses.
          </p>
          <div className="about-features">
            <div>
              <h3>01</h3>
              <p>Modern Technology</p>
            </div>

            <div>
              <h3>02</h3>
              <p>Creative Solutions</p>
            </div>

            <div>
              <h3>03</h3>
              <p>Reliable Support</p>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <h2>Our Services</h2>

        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Web Development</h3>
            <p>Modern and responsive websites.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>App Development</h3>
            <p>Powerful mobile applications.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Software Development</h3>
            <p>Custom software solutions.</p>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        {submitted && <p className="success-msg">message sent success</p>}
      </section>
      <Footer />
      {showScrollTop && (
        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
