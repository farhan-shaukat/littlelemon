import bruchetta from "../assets/images/bruchetta.svg";
import salad from "../assets/images/greek-salad1.jpg";
import dessert from "../assets/images/lemon-dessert1.jpg";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Specials() {
  return (
    <>
    <Container className="mt-5 pt-5 pb-5 mb-5">
      <Row className="align-items-center">
        <Col lg="8">
          <h3 className="ml-0">Specials</h3>
        </Col>
        <Col lg="4" className="text-end">
          <button id="button" className="mr-0">Online Menu</button>
        </Col>
      </Row>
      <Row className="cards">
      <Col lg="4">
        <Card className="pl-0 pr-0">
          <Card.Img variant="top" src={salad} />
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </Card.Text>
            <button className="btn-app">Order Delivery </button>
          </Card.Body>
        </Card>
        </Col>
        <Col lg="4">
        <Card className="pl-0 pr-0">
          <Card.Img variant="top" src={bruchetta} />
          <Card.Body>
            <Card.Title>Bruschetta</Card.Title>
            <Card.Text>
              Our Bruschetta is made from homemade grilled bread that has been
              smeared with garlic and seasoned with salt and olive oil. Topped
              with fresh vegetables.
            </Card.Text>
            <button className="btn-app">Order Delivery </button>
          </Card.Body>
        </Card>
        </Col>
        <Col lg="4">
        <Card className="pl-0 pr-0">
          <Card.Img variant="top" src={dessert} />
          <Card.Body>
            <Card.Title>Lemon Cake</Card.Title>
            <Card.Text>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined. <i className="fa-regular fa-moped"></i>
            </Card.Text>
            <button className="btn-app">Order Delivery </button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Specials;
