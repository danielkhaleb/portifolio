const categories = [
  {
    label: "Frontend",
    items: [
      { name: "React / Next.js", pct: 95 },
      { name: "TypeScript", pct: 88 },
      { name: "Vue.js", pct: 78 },
      { name: "Angular", pct: 65 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", pct: 93 },
      { name: "C# / .NET", pct: 80 },
      { name: "Python", pct: 70 },
      { name: "Go / Elixir", pct: 60 },
    ],
  },
  {
    label: "Mobile & Data",
    items: [
      { name: "React Native", pct: 82 },
      { name: "PostgreSQL", pct: 85 },
      { name: "SQL Server", pct: 78 },
      { name: "Oracle", pct: 55 },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { name: "Docker", pct: 85 },
      { name: "AWS", pct: 72 },
      { name: "GCP", pct: 65 },
      { name: "Azure", pct: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-inner">
        <div>
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">Skills &amp; technologies</h2>
          <p className="section-subtitle">
            A broad stack built over 12+ years — from enterprise .NET to modern React architecture.
          </p>
        </div>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-card" key={cat.label}>
              <p className="skill-category">{cat.label}</p>
              <div className="skill-items">
                {cat.items.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <span className="skill-name">{item.name}</span>
                    <div className="skill-bar-wrap">
                      <div className="skill-bar" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
