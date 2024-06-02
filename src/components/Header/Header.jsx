import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { homepage, title, logo } = header; // Assuming `logo` is the path to your image

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            <img src={logo} alt={title} className="header__logo" />{" "}
            {/* Image as title */}
          </a>
        ) : (
          <img src={logo} alt={title} className="header__logo" /> // If homepage is not defined
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
