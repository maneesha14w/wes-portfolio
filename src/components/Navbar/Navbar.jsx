import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <a href="index.html">
              <img className="logo" src="/assets/logo.png" alt="logo" />
            </a>
          </li>
          <li>
            <a href="#gallery"> Gallery </a>
          </li>
          {/* <li><a href="#contact"> Contact </a></li> */}
          <ul className="nav-socials">
            <li>
              <a href="https://instagram.com/wes.ontheshore" target="_blank">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/anh.tienn" target="_blank">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="mailto:anhtien.visuals@gmail.com"
                className="connect-btn"
              >
                <i className="fa-regular fa-envelope" />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
