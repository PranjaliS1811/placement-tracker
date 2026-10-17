
import { useEffect, useState } from "react";
import "./App.css";

const initialQuestions = [
  {
    id: 1,
    title: "Two Sum",
    topic: "Arrays",
    difficulty: "Easy",
    solved: false,
  },
  {
    id: 2,
    title: "Reverse a String",
    topic: "Strings",
    difficulty: "Easy",
    solved: false,
  },
  {
    id: 3,
    title: "Maximum Subarray",
    topic: "Arrays",
    difficulty: "Medium",
    solved: false,
  },
  {
    id: 4,
    title: "Valid Parentheses",
    topic: "Stack",
    difficulty: "Medium",
    solved: false,
  },
  {
    id: 5,
    title: "Binary Search",
    topic: "Searching",
    difficulty: "Easy",
    solved: false,
  },
];

const initialApplications = [
  {
    id: 1,
    company: "TCS",
    role: "Software Developer",
    status: "Applied",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Systems Engineer",
    status: "Interview",
  },
  {
    id: 3,
    company: "Cognizant",
    role: "Programmer Analyst",
    status: "Shortlisted",
  },
];

const companies = [
  { name: "TCS", focus: "Aptitude, coding, and technical interview" },
  { name: "Infosys", focus: "Logical reasoning, coding, and CS fundamentals" },
  { name: "Accenture", focus: "Problem solving, coding, and communication" },
  { name: "Cognizant", focus: "Programming, SQL, and technical interview" },
];

const navigation = [
  { id: "dashboard", icon: "▦", label: "Dashboard" },
  { id: "dsa", icon: "⌘", label: "DSA Practice" },
  { id: "aptitude", icon: "◷", label: "Aptitude" },
  { id: "applications", icon: "▤", label: "Applications" },
  { id: "interviews", icon: "✦", label: "Interview Prep" },
];

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function StatCard({ icon, label, value, note }) {
  return (
    <article className="stat-card">
      <div className="stat-icon">{icon}</div>
      <p className="stat-label">{label}</p>
      <h2>{value}</h2>
      <p className="stat-note">{note}</p>
    </article>
  );
}

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const [questions, setQuestions] = useState(() =>
    readStorage("placement-questions", initialQuestions)
  );

  const [applications, setApplications] = useState(() =>
    readStorage("placement-applications", initialApplications)
  );

  const [goals, setGoals] = useState(() =>
    readStorage("placement-goals", {
      dsa: 3,
      aptitude: 10,
      studyMinutes: 120,
    })
  );

  const [completedGoals, setCompletedGoals] = useState(() =>
    readStorage("placement-completed-goals", {
      dsa: false,
      aptitude: false,
      studyMinutes: false,
    })
  );

  const [newCompany, setNewCompany] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newTopic, setNewTopic] = useState("Arrays");
  const [newDifficulty, setNewDifficulty] = useState("Easy");

  useEffect(() => {
    localStorage.setItem("placement-questions", JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem(
      "placement-applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  useEffect(() => {
    localStorage.setItem("placement-goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem(
      "placement-completed-goals",
      JSON.stringify(completedGoals)
    );
  }, [completedGoals]);

  const solvedCount = questions.filter((q) => q.solved).length;
  const totalQuestions = questions.length;

  const progress =
    totalQuestions === 0
      ? 0
      : Math.round((solvedCount / totalQuestions) * 100);

  function toggleQuestion(id) {
    setQuestions((previous) =>
      previous.map((question) =>
        question.id === id
          ? { ...question, solved: !question.solved }
          : question
      )
    );
  }

  function addQuestion(event) {
    event.preventDefault();

    if (!newQuestion.trim()) return;

    setQuestions((previous) => [
      ...previous,
      {
        id: Date.now(),
        title: newQuestion.trim(),
        topic: newTopic,
        difficulty: newDifficulty,
        solved: false,
      },
    ]);

    setNewQuestion("");
  }

  function addApplication(event) {
    event.preventDefault();

    if (!newCompany.trim() || !newRole.trim()) return;

    setApplications((previous) => [
      ...previous,
      {
        id: Date.now(),
        company: newCompany.trim(),
        role: newRole.trim(),
        status: "Applied",
      },
    ]);

    setNewCompany("");
    setNewRole("");
  }

  function updateStatus(id, status) {
    setApplications((previous) =>
      previous.map((application) =>
        application.id === id
          ? { ...application, status }
          : application
      )
    );
  }

  function toggleGoal(key) {
    setCompletedGoals((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  }

 function updateGoal(key, value) {
    const number = Number(value);

    if (Number.isFinite(number) && number >= 0) {
      setGoals((previous) => ({
        ...previous,
        [key]: number,
      }));
    }
  }

  const activeLabel =
    navigation.find((item) => item.id === activePage)?.label || "Dashboard";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function renderDashboard() {
    return (
      <>
        <section className="welcome-banner">
          <div>
            <p className="eyebrow">YOUR PLACEMENT JOURNEY</p>
            <h2>Build skills. Track progress. Get placed.</h2>
            <p>
              Stay consistent with your preparation and move closer to your
              dream job.
            </p>
            <button
              className="primary-button"
              onClick={() => setActivePage("dsa")}
            >
              Continue Preparation →
            </button>
          </div>

          <div className="banner-illustration" aria-hidden="true">
            🎓
          </div>
        </section>

        <section className="stats-grid">
          <StatCard
            icon="⌘"
            label="Questions Solved"
            value={solvedCount}
            note={`${totalQuestions} questions in your tracker`}
          />

          <StatCard
            icon="▤"
            label="Applications"
            value={applications.length}
            note="Companies you're tracking"
          />

          <StatCard
            icon="✓"
            label="Shortlisted"
            value={
              applications.filter((a) => a.status === "Shortlisted").length
            }
            note="Applications shortlisted"
          />

          <StatCard
            icon="◷"
            label="DSA Progress"
            value={`${progress}%`}
            note="Based on questions in your tracker"
          />
        </section>

        <div className="dashboard-grid">
          <section className="panel progress-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">YOUR PERFORMANCE</p>
                <h3>DSA Progress</h3>
              </div>
              <button
                className="text-button"
                onClick={() => setActivePage("dsa")}
              >
                View all →
              </button>
            </div>

            <div className="progress-content">
              <div
                className="progress-ring"
                style={{
                  background: `conic-gradient(#6657e8 ${
                    progress * 3.6
                  }deg, #eeedf7 0deg)`,
                }}
              >
                <div className="progress-ring-inner">
                  <strong>{progress}%</strong>
                  <span>Completed</span>
                </div>
              </div>

              <div className="progress-details">
                <h4>Keep going!</h4>
                <p>
                  You have solved {solvedCount} out of {totalQuestions} tracked
                  questions.
                </p>
                <div className="mini-progress">
                  <div style={{ width: `${progress}%` }} />
                </div>
                <span className="muted-text">
                  {totalQuestions - solvedCount} questions remaining
                </span>
              </div>
            </div>
          </section>

          <section className="panel goals-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">STAY CONSISTENT</p>
                <h3>Daily Goals</h3>
              </div>
              <span className="date-label">Today</span>
            </div>

            <div className="goal-list">
              <label className="goal-item">
                <input
                  type="checkbox"
                  checked={completedGoals.dsa}
                  onChange={() => toggleGoal("dsa")}
                />
                <span>
                  <strong>Solve DSA questions</strong>
                  <small>{goals.dsa} questions</small>
                </span>
              </label>

              <label className="goal-item">
                <input
                  type="checkbox"
                  checked={completedGoals.aptitude}
                  onChange={() => toggleGoal("aptitude")}
                />
                <span>
                  <strong>Practice aptitude</strong>
                  <small>{goals.aptitude} questions</small>
                </span>
              </label>

              <label className="goal-item">
                <input
                  type="checkbox"
                  checked={completedGoals.studyMinutes}
                  onChange={() => toggleGoal("studyMinutes")}
                />
                <span>
                  <strong>Study session</strong>
                  <small>{goals.studyMinutes} minutes</small>
                </span>
              </label>
            </div>

            <p className="muted-text">
              {Object.values(completedGoals).filter(Boolean).length} of 3 goals
              completed
            </p>
          </section>
        </div>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">TARGET YOUR PREPARATION</p>
              <h3>Company Preparation</h3>
            </div>
          </div>

          <div className="company-grid">
            {companies.map((company) => (
              <article className="company-card" key={company.name}>
                <div className="company-logo">{company.name[0]}</div>
                <h4>{company.name}</h4>
                <p>{company.focus}</p>
                <button
                  className="text-button"
                  onClick={() => setActivePage("interviews")}
                >
                  Prepare now →
                </button>
              </article>
            ))}
          </div>
        </section>

        <ApplicationsTable
          applications={applications.slice(0, 3)}
          updateStatus={updateStatus}
          onViewAll={() => setActivePage("applications")}
        />
      </>
    );
  }

  function renderDSA() {
    return (
      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">PRACTICE TRACKER</p>
            <h3>DSA Questions</h3>
            <p className="muted-text">
              Mark questions as solved to update your progress.
            </p>
          </div>
        </div>

        <form className="add-form" onSubmit={addQuestion}>
          <input
            aria-label="Question name"
            placeholder="Question name"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            required
          />

          <select
            aria-label="Topic"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
          >
            {["Arrays", "Strings", "Linked List", "Stack", "Searching", "DP"].map(
              (topic) => (
                <option key={topic}>{topic}</option>
              )
            )}
          </select>

          <select
            aria-label="Difficulty"
            value={newDifficulty}
            onChange={(e) => setNewDifficulty(e.target.value)}
          >
            {["Easy", "Medium", "Hard"].map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>

          <button className="primary-button" type="submit">
            + Add
          </button>
        </form>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Topic</th>
                <th>Difficulty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.title}</td>
                  <td>{question.topic}</td>
                  <td>
                    <span
                      className={`difficulty ${question.difficulty.toLowerCase()}`}
                    >
                      {question.difficulty}
                    </span>
                  </td>
                  <td>
                    <label className="solved-control">
                      <input
                        type="checkbox"
                        checked={question.solved}
                        onChange={() => toggleQuestion(question.id)}
                      />
                      {question.solved ? "Solved" : "Pending"}
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  function renderApplications() {
    return (
      <>
        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">CAREER TRACKER</p>
              <h3>Track Your Applications</h3>
            </div>
          </div>

          <form className="add-form" onSubmit={addApplication}>
            <input
              placeholder="Company name"
              aria-label="Company name"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              required
            />

            <input
              placeholder="Job role"
              aria-label="Job role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              required
            />

            <button className="primary-button" type="submit">
              + Add Application
            </button>
          </form>
        </section>

        <ApplicationsTable
          applications={applications}
          updateStatus={updateStatus}
        />
      </>
    );
  }

  function renderAptitude() {
    const topics = [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Verbal Ability",
    ];

    return (
      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">ASSESS YOUR READINESS</p>
            <h3>Aptitude Preparation</h3>
            <p className="muted-text">
              Record how many questions you have practiced for each subject.
            </p>
          </div>
        </div>

        <div className="aptitude-grid">
          {topics.map((topic, index) => {
            const key = ["quant", "reasoning", "verbal"][index];

            return (
              <article className="aptitude-card" key={key}>
                <h4>{topic}</h4>
                <label>
                  Practice target
                  <input
                    type="number"
                    min="0"
                    value={goals[key] ?? 10}
                    onChange={(e) =>
                      updateGoal(key, e.target.value)
                    }
                  />
                </label>
                <p className="muted-text">
                  Set your daily practice target.
                </p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  function renderInterviews() {
    return (
      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">PREPARE WITH CONFIDENCE</p>
            <h3>Interview Preparation</h3>
          </div>
        </div>

        {[
          {
            title: "Java & Object-Oriented Programming",
            description:
              "Practice inheritance, polymorphism, interfaces, abstraction, and exception handling.",
          },
          {
            title: "DBMS & SQL",
            description:
              "Revise joins, normalization, keys, subqueries, and aggregate functions.",
          },
          {
            title: "Web Development",
            description:
              "Prepare React, JavaScript, REST APIs, HTTP methods, and frontend fundamentals.",
          },
          {
            title: "HR & Situational Questions",
            description:
              "Practice self-introduction, project explanations, teamwork, and problem-solving scenarios.",
          },
        ].map((item) => (
          <article className="interview-card" key={item.title}>
            <div className="interview-icon">✦</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    );
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">P</div>
          <div>
            <h2>PlacePilot</h2>
            <p>Placement companion</p>
          </div>
        </div>

        <div className="sidebar-label">WORKSPACE</div>

        <nav>
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${
                activePage === item.id ? "active" : ""
              }`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="student-avatar">PS</div>
          <div>
            <strong>Student</strong>
            <p>Placement aspirant</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="muted-text">{today}</p>
            <h1>{activeLabel}</h1>
          </div>

          <div className="topbar-right">
            <span className="status-indicator" />
            <span>Preparation mode</span>
          </div>
        </header>

        {activePage === "dashboard" && renderDashboard()}
        {activePage === "dsa" && renderDSA()}
        {activePage === "applications" && renderApplications()}
        {activePage === "aptitude" && renderAptitude()}
        {activePage === "interviews" && renderInterviews()}
      </main>
    </div>
  );
}

function ApplicationsTable({
  applications = [],
  updateStatus,
  onViewAll,
}) {
  const safeApplications = Array.isArray(applications)
    ? applications
    : [];

  return (
    <section className="panel applications-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">YOUR CAREER PIPELINE</p>
          <h3>Recent Applications</h3>
        </div>

        {onViewAll && (
          <button
            type="button"
            className="text-button"
            onClick={onViewAll}
          >
            View all →
          </button>
        )}
      </div>

      {safeApplications.length === 0 ? (
        <p className="empty-state">
          No applications yet. Add your first application above.
        </p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {safeApplications.map((application, index) => {
                const status = application.status || "Applied";

                return (
                  <tr key={application.id ?? index}>
                    <td>
                      <strong>
                        {application.company || "N/A"}
                      </strong>
                    </td>

                    <td>{application.role || "N/A"}</td>

                    <td>
                      <select
                        className={`status-select ${status
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        value={status}
                        onChange={(e) => {
                          if (typeof updateStatus === "function") {
                            updateStatus(
                              application.id,
                              e.target.value
                            );
                          }
                        }}
                        aria-label={`Status for ${
                          application.company || "this application"
                        }`}
                      >
                        {[
                          "Applied",
                          "Shortlisted",
                          "Interview",
                          "Selected",
                          "Rejected",
                        ].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default App;