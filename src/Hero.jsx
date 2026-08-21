function Hero() {
  return (
    <section className="hero">
      <div className="hero-circle"></div>
      <div className="hero-circle hero-circle-two"></div>
      <span className="hero-badge">WE BUILD DIGITAL FUTURES</span>
      <h1>Welcome to VRS IT SOLUTION</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, alias!
      </p>
      <button
        onClick={() => {
          document.getElementById("services").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Get Start
      </button>
    </section>
  );
}
export default Hero;
