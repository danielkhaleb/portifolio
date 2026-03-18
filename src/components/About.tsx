import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-img">
          <Image
            src="/danielbatista.jpeg"
            alt="Daniel Khaleb"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="about-text">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Enthusiastic learner. Pragmatic builder.</h2>
          <p>
            I&apos;m a Full-Stack Developer with roots since 2013, comfortable across back-end,
            front-end, mobile and DevOps. I thrive on exploring new technologies and turning
            them into real, scalable products.
          </p>
          <p>
            Currently at <strong>bolttech</strong> in Porto, I co-founded the Frontend-Core
            team — responsible for design systems, micro-frontend architecture and developer
            experience across the whole group. I led the migration from Polymer to React and
            the adoption of Figma tokens for multi-brand theming.
          </p>
          <p>
            I&apos;ve worked across Brazil and Portugal, at startups and enterprise alike —
            always chasing good problems to solve.
          </p>
          <p>
            Lately I&apos;ve been deep into <strong>AI-assisted development</strong> — using
            tools like <strong>Claude</strong> and <strong>Kiro</strong> to move faster and
            think bigger. I embrace vibe coding as a legitimate craft: knowing when to let AI
            accelerate and when to stay in control.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-num">12+</span>
              <span className="highlight-label">Years coding</span>
            </div>
            <div className="highlight">
              <span className="highlight-num">8</span>
              <span className="highlight-label">Companies</span>
            </div>
            <div className="highlight">
              <span className="highlight-num">10+</span>
              <span className="highlight-label">Tech stacks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
