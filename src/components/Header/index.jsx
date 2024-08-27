import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo Kasa"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
      </nav>
    </header>
  );
}

export default Header
