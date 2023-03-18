import { Link } from "react-router-dom";
function Header({ bgCoolor, textColor }) {
  const headerStyles = {
    backgroundColor: bgCoolor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>
          <Link to="/">Feedback App</Link>
        </h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  bgCoolor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
