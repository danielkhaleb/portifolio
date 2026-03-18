export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-text">
        <span className="hero-tag">✦ Open to new opportunities</span>
        <h1>
          Full-Stack Developer building things that <em>scale.</em>
        </h1>
        <p>
          Hi, I&apos;m Daniel — a full-stack developer based in Porto, Portugal with 12+ years
          of experience across Node.js, React, .NET, React Native and more. I specialise in
          frontend architecture, design systems, and shipping software that lasts.
        </p>
        <div className="hero-cta">
          <a href="#experience" className="btn-primary">See My Experience</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="blob-card">
          <div className="blob-bg" />
          <div className="blob-content">
            <div className="code-snippet">
              <span className="kw">const</span> daniel = &#123;<br />
              &nbsp;&nbsp;stack: <span className="str">&quot;full-stack&quot;</span>,<br />
              &nbsp;&nbsp;years: <span className="str">12</span>,<br />
              &nbsp;&nbsp;location: <span className="str">&quot;Porto 🇵🇹&quot;</span>,<br />
              &nbsp;&nbsp;loves: <span className="fn">buildAndShip</span>()<br />
              &#125;;
            </div>
            <span className="floating-tag" style={{ top: 28, right: -12 }}>Node.js ✦ React</span>
            <span className="floating-tag" style={{ bottom: 38, left: -18, animationDelay: "1.5s" }}>Porto, Portugal</span>
            <span className="floating-tag" style={{ bottom: 105, right: -28, animationDelay: "1s", color: "var(--accent2)" }}>React Native</span>
          </div>
        </div>
      </div>
    </section>
  );
}
