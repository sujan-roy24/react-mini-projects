import "./Header.css";

export default function Header({ title, onToggleSidebar, collapsed }) {
  return (
    <header className="header">

      <div className="header-left">
        <button
          className="menu-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {collapsed ? "✕" : "☰"}
        </button>

        <h1 className="project-title">React Mini Projects</h1>
      </div>

      <div className="header-center">
        <h2 className="page-title">{title}</h2>
      </div>

    </header>
  );
}