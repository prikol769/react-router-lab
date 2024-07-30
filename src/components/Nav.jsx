import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">CRYPTO PRICES</Link>
      <Link to="/currencies">CURRENCIES</Link>
    </div>
  );
};

export default Nav;
