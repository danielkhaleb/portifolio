const jobs = [
  {
    period: "May 2021 — Present",
    company: "bolttech · Porto",
    role: "Full-Stack Developer",
    current: true,
    desc: "Started on microservices across Node.js, Go and Python. Led the Polymer → React migration, then co-founded the Frontend-Core team. Built a multi-brand design system using Figma tokens and led a CMS migration to Builder.io.",
    stack: ["React", "Next.js", "Node.js", "Go", "Python", "Builder.io", "Figma Tokens", "Monorepo"],
  },
  {
    period: "Jan 2020 — May 2021",
    company: "ateliware · Brasil",
    role: "Software Engineer",
    desc: "Multiple projects: a queue-skip app for restaurants and a route-optimisation platform for truck drivers. Full JS stack across back-end, front-end and mobile.",
    stack: ["React", "React Native", "Node.js", "Ruby on Rails", "Gatsby", "PostgreSQL", "Docker", "AWS"],
  },
  {
    period: "Apr 2019 — Nov 2019",
    company: "Sisand · Brasil",
    role: "Software Developer",
    desc: "Built an auto parts e-commerce for dealerships from scratch, including CI/CD on Bitbucket and deployment on GCP.",
    stack: ["Node.js", "Vue.js", "PostgreSQL", "Docker", "Google Cloud"],
  },
  {
    period: "Jul 2017 — Mar 2019",
    company: "ateliware · Brasil",
    role: "Software Engineer",
    desc: "Developed an online insurance policy issuer for an international security company — back office, profile management, and the policy calculation engine.",
    stack: [".NET", "SQL Server", "React", "Backbone", "CoffeeScript"],
  },
  {
    period: "Jan 2015 — Feb 2017",
    company: "Bornlogic · Brasil",
    role: "Full-Stack Developer",
    desc: "Developed and maintained an advertising platform — new features and bug fixes across the full stack.",
    stack: ["C# / MVC 5", "Web API", "AngularJS", "SQL Server", "Azure"],
  },
  {
    period: "Jun 2013 — Dec 2014",
    company: "Employer RH · Brasil",
    role: "Software Developer",
    desc: "First professional role. Internal system management — billing, financial and HSBC debit card generation systems.",
    stack: ["C#", ".NET Web Forms", "SQL Server"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-inner">
        <div className="exp-header">
          <p className="section-label">Career</p>
          <h2 className="section-title">Work experience</h2>
          <p className="section-subtitle">
            Over a decade building products across insurtech, fintech, logistics and e-commerce.
          </p>
        </div>
        <div className="timeline">
          {jobs.map((job) => (
            <div className="timeline-item" key={job.period}>
              <div>
                <p className="timeline-period">{job.period}</p>
                <p className="timeline-company">{job.company}</p>
              </div>
              <div>
                <h3 className="timeline-role">
                  {job.role}
                  {job.current && <span className="current-badge">Current</span>}
                </h3>
                <p className="timeline-desc">{job.desc}</p>
                <div className="timeline-stack">
                  {job.stack.map((s) => (
                    <span className="stack-chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
