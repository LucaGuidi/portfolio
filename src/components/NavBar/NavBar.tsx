import "./navbar.scss";

export function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div className="wrapper col-lg-10 col-12">
          <div className="name">
            <h1>
              <a href="/">Luca</a>
            </h1>
          </div>

          <div className="links">
            <h4>
              <a href="#home">Home</a>
            </h4>
            <h4>
              <a href="#experience">Experience</a>
            </h4>
            <h4>
              <a href="#skills">Skills</a>
            </h4>
            <h4>
              <a href="#contacts">Contacts</a>
            </h4>
          </div>

          <div className="social">
            <a href="https://github.com/LucaGuidi">
              <img src="github.png" alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/luca-guidi-b1092a289">
              <img src="linkedIn.png" alt="linkedIn logo" />
            </a>
            <a href="https://www.instagram.com/lucaguidi__/">
              <img src="instagram.png" alt="instagram logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
