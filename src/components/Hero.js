import IntroImage from '../assets/images/IntroImage.jpg'
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <>
      <div className="main">
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

        <div className="featured">
          <img src={IntroImage} alt="bruchetta" />
        </div>
      </div>
    </>
  );
};

