import ratings from "../assets/images/rating.png";
import profile1 from "../assets/images/person1.jpeg";
import profile2 from "../assets/images/person2.jpeg";
import profile3 from "../assets/images/person3.jpeg";
import profile4 from "../assets/images/person4.jpeg";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile1} alt="Customer Pic" />
            <h2>Andrea Gomez.</h2>
            <p>"Very pleasant and memorable dining Experience"</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile2} alt="Customer Pic" />
            <h2>Steven Chang</h2>
            <p>"The gyros were amazing"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile3} alt="Customer Pic" />
            <h2>Jada Williams.</h2>
            <p>"Amazingly authetic greek-food!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile4} alt="Customer Pic" />
            <h2>Caleb John.</h2>
            <p>"Awesome ambience, and food makes you feel like on greece"</p>
          </div>
        </div>
      </div>
    </>
  );
}
