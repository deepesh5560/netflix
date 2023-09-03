import { useState } from "react";

const Navbar = () => {
  const [first, setfirst] = useState(false);
  const handleClick = () => {
    setfirst(!first);
  };
  return (
    <div>
      <header>
        <div className="netflixLogo">
          <a id="logo">
            <img src="./logo.PNG" alt="Logo Image" />
          </a>
        </div>
        <nav className="main-nav w99">
          <a>Home</a>
          <a>TV Shows</a>
          <a>Movies</a>
          <a>Originals</a>
          <a>Recently Added</a>
          <a>My List</a>
        </nav>
        <nav className="sub-nav w99">
          <a>
            <img src="./bull.png" width={60} alt="" />
          </a>
          <a>Account</a>
        </nav>
        <div className="menu-999">
          <div>
            <img
              src="./menu.jpg"
              onClick={() => handleClick()}
              className="ham-img"
              alt=""
              width={50}
            />
          </div>

          {first ? (
            <div className="in-nav">
              <div>Home</div>
              <div>TV Shows</div>
              <div>Movies</div>
              <div>Originals</div>
              <div>Recently Added</div>
              <div>My List</div>
              <div>Account</div>
            </div>
          ) : null}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
