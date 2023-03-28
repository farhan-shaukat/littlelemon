import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <ul>
            <li><Link to="/" className="a">Home</Link></li>
            <li><Link to="/" className="a">About</Link></li>
            <li><Link to="/" className="a">Menu</Link></li>
            <li><Link to="/reservations" className="a">Bookings</Link></li>
            <li><Link to="/" className="a">Order</Link></li>
        </ul>
    )
}

export default Nav;