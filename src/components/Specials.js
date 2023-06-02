import dish1 from "../assets/images/dish1.jpg";
import dish2 from "../assets/images/dish2.jpg";
import dish3 from "../assets/images/dish3.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Specials() {
  return (
    <>
      <div className="specials">
        <div className="specials-head">
          <h3>Our Specials this Week!</h3>

          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dish1} />
          <Card.Body>
            <Card.Title>Greek SALAD</Card.Title>
            <Card.Text>
              Experience the essence of Greece with our Choriatiki, a classic
              Greek salad bursting with vibrant flavors served come together
              with Kalamata olives and a drizzle of extra virgin olive oil,
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dish2} />
          <Card.Body>
            <Card.Title>Greek Gyros</Card.Title>
            <Card.Text>
              Indulge in our signature bruschetta, a delightful combination of
              grilled bread, creamy mozzarella, and sun-dried tomatoes,
              perfectly complemented by a hint of aromatic garlic.
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dish3} />
          <Card.Body>
            <Card.Title>Loukoumades</Card.Title>
            <Card.Text>
              Indulge in our signature bruschetta, a delightful combination of
              grilled bread, creamy mozzarella, and sun-dried tomatoes,
              perfectly complemented by a hint of aromatic garlic.{" "}
              <i class="fa-regular fa-moped"></i>
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
