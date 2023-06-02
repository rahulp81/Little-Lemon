import dish1 from "../assets/images/dish-1.jpg";
import dish2 from "../assets/images/dish2.jpg";
import dish3 from "../assets/images/dish3.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Specials() {
  return (
    <>
      <div className="specials">
        <div className="specials-head">
          <h3>Specials</h3>

          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dish1} />
          <Card.Body>
            <Card.Title>
              Potatoes and sea bream with spices from PLATIA
            </Card.Title>
            <Card.Text>
              Indulge in the tantalizing combination of succulent sea bream
              infused with aromatic spices, served alongside a bed of perfectly
              seasoned potatoes from PLATIA. Experience a harmonious blend of
              flavors that will captivate your taste buds and transport you to a
              culinary paradise.
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dish2} />
          <Card.Body>
            <Card.Title>Greek Gyros</Card.Title>
            <Card.Text>
              Indulge in the irresistible flavors of Greek gyros at PLATIA.
              Experience tender, flavorful meat, perfectly seasoned with
              traditional Greek spices, wrapped in a soft pita bread and
              accompanied by fresh, vibrant toppings. Discover the essence of
              Greece in every bite of our mouthwatering gyros.
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dish3} />
          <Card.Body>
            <Card.Title>Loukoumades</Card.Title>
            <Card.Text>
              Loukoumades are little bite-sized golden puffs of fried dough that
              are sprinkled with sweet syrup, walnuts and cinnamon. With crispy
              outside and fluffy inside this Greek donut will give you absolute
              deliciousness. <i class="fa-regular fa-moped"></i>
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

