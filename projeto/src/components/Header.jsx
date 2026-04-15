import "./Header.css";

export default function Header({ onLogout }) {
  return (
    <header className="app-header">
      <div className="app-header-logo">
        <h1>FabLab</h1>
      </div>

      <div className="app-header-acoes">
        <button type="button" className="header-link-button" onClick={onLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}