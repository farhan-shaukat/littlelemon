import logo from "../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <Container>
      <footer className="footer">
        <div className="one">
          <img src={logo} alt="Secondary Logo" />
        </div>
        <div className="two">
          <ul>
            <h5>Navigation</h5>
            <li>
              <Link to="/" className="a">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="a">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="a">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="a">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order" className="a">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/" className="a">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Contact</h5>
            <li>
              <Link to="/" className="a">
                Phone Number
              </Link>
            </li>
            <li>
              <Link to="/" className="a">
                Email
              </Link>
            </li>
            <li>
              <Link to="/" className="a">
                Address
              </Link>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>

            <li>
              <Link to="/" className="a">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="/" className="a">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="/" className="a">
                Pinterest
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
