import restaurantFood from "../assets/images/restaurantFood.jpg";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <>
      <div className="main">
        <Container>
          <Row>
            <Col lg="8">
              <div className="main-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <Link to="/reservations">
              <button id="button" to="/reservations">
                Reserve a Table
              </button>
            </Link>
          </div>
            </Col>
            <Col lg="4">
            <div className="featured">
          <img src={restaurantFood} alt="restaurantFood" />
        </div>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
