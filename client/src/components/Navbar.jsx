const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <span className="navbar-brand mx-3">MERN-CRUD</span>
        <ul className="navbar-nav navbar-items-right">
          <li className="navbar-item">
            <span className="nav-link">Home</span>
          </li>
          <li className="navbar-item">
            <span className="nav-link">Categories</span>
          </li>
          <li className="navbar-item">
            <span className="nav-link">About</span>
          </li>
          <li className="navbar-item">
            <span className="nav-link">Contact</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
