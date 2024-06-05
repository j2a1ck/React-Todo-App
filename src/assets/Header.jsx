export default function Header() {
  return (
    <div className="container">
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#2C4E80" }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <a
            className="navbar-brand"
            href="https://github.com/j2a1ck/React-Todo-App"
          >
            Repo
          </a>
          <a className="navbar-brand" href="#">
            About
          </a>
        </div>
      </nav>
    </div>
  );
}
