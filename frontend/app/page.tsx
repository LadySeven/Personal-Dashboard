// Renders the dashboard overview with temporary sample content.
// Interactive controls and live API data will be added in later steps.

const workItems = [
  {
    name: "Personal Dashboard",
    kind: "Project",
    status: "In Progress",
    statusClass: "in-progress",
    tag: "Learning",
    time: "12.5 h",
    deadline: "Nov 14",
  },
  {
    name: "Design task and project data model",
    kind: "Task",
    status: "Brainstorming",
    statusClass: "brainstorming",
    tag: "Portfolio",
    time: "2 h",
    deadline: "Nov 5",
  },
  {
    name: "Prototype survival game",
    kind: "Project",
    status: "On Hold",
    statusClass: "on-hold",
    tag: "Game Dev",
    time: "8 h",
    deadline: "No deadline",
  },
];

const summaryCards = [
  { label: "Active projects", value: "4", note: "Across your workspace" },
  { label: "Tasks in progress", value: "8", note: "Keep moving forward" },
  { label: "Hours this week", value: "12.5", note: "Time logged so far" },
  { label: "Due soon", value: "2", note: "Within the next 7 days" },
];

/** Render the dashboard overview and its sample work summaries. */
export default function Home() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview">
          <span className="brand-mark">PD</span>
          <span>
            <strong>Personal</strong>
            <small>Dashboard</small>
          </span>
        </a>

        <p className="nav-label">WORKSPACE</p>
        <nav className="navigation" aria-label="Main navigation">
          <a className="nav-link active" href="#overview">Overview</a>
          <a className="nav-link" href="#work">Projects &amp; tasks</a>
          <a className="nav-link" href="#activity">Time log</a>
          <a className="nav-link" href="#reports">Reports</a>
        </nav>

        <div className="sidebar-footer">
          <span className="online-dot" />
          Private workspace
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <p className="breadcrumb">Workspace <span>/</span> Overview</p>
          <label className="search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search tasks and projects"
              aria-label="Search tasks and projects"
              disabled
            />
          </label>
          <button className="avatar" type="button" aria-label="Account">
            A
          </button>
        </header>

        <div className="page-content">
          <section className="welcome">
            <div>
              <p className="eyebrow">YOUR WORKSPACE</p>
              <h1>Make progress visible.</h1>
              <p className="welcome-copy">
                A clear view of what you’re working on and where your time goes.
              </p>
            </div>
            <button className="primary-button" type="button" disabled>
              + New entry
            </button>
          </section>

          <section className="summary-grid" aria-label="Workspace summary">
            {summaryCards.map((card) => (
              <article className="summary-card" key={card.label}>
                <p>{card.label}</p>
                <strong>{card.value}</strong>
                <span>{card.note}</span>
              </article>
            ))}
          </section>

          <div className="content-grid">
            <section className="panel work-panel" id="work">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">YOUR WORK</p>
                  <h2>Projects &amp; tasks</h2>
                </div>
                <span className="sample-label">Sample content</span>
              </div>

              <div className="work-list">
                {workItems.map((item) => (
                  <article className="work-item" key={item.name}>
                    <div className="work-main">
                      <span className="work-kind">{item.kind}</span>
                      <h3>{item.name}</h3>
                      <span className="tag">{item.tag}</span>
                    </div>
                    <div className="work-meta">
                      <span className={`status ${item.statusClass}`}>
                        {item.status}
                      </span>
                      <span>{item.time} logged</span>
                      <span>Due {item.deadline}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="side-panels">
              <section className="panel" id="activity">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">THIS WEEK</p>
                    <h2>Time logged</h2>
                  </div>
                  <span className="time-total">12.5 h</span>
                </div>
                <p className="muted-copy">
                  Your time summaries will appear here once you start logging
                  work.
                </p>
                <div className="activity-line">
                  <span className="activity-dot" />
                  <span>Recent activity will appear here</span>
                </div>
              </section>

              <section className="panel" id="reports">
                <p className="eyebrow">SHARING</p>
                <h2>Public summary</h2>
                <p className="muted-copy">
                  Only projects and updates you choose to share will appear in
                  your read-only portfolio.
                </p>
                <span className="visibility-label">Private by default</span>
              </section>
            </aside>
          </div>

          <p className="prototype-note">
            This screen uses sample content. Its controls are not connected yet.
          </p>
        </div>
      </main>
    </div>
  );
}