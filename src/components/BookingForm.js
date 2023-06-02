import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Booking.css";

const AvailableTimes = ({ bookingData, items, availableTimes }) => {
  if (
    bookingData &&
    bookingData.date &&
    items &&
    items.date !== bookingData.date
  ) {
    return availableTimes.times.map((time) => (
      <option key={time}>{time}</option>
    ));
  } else {
    return availableTimes.times.map((time) => {
      if (items && items.time !== time) {
        return <option key={time}>{time}</option>;
      }
      return null;
    });
  }
};

const BookingForm = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  submitForm,
}) => {
  const [dateError, setDateError] = useState(null);
  const [timeError, setTimeError] = useState(null);
  const [guestsError, setGuestsError] = useState(null);
  const [occasionError, setOccasionError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    validateForm();
  }, [bookingData, isTouched]);

  const handleBlur = () => {
    setIsTouched(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setBookingData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setIsTouched(true);
  };

  function isValidDate(dateString) {
    const yyyymmdd = dateString.split("-");
    const dateObj = new Date(
      parseInt(yyyymmdd[0]),
      parseInt(yyyymmdd[1]) - 1,
      parseInt(yyyymmdd[2]) + 1
    );

    if (dateObj < new Date()) return false;
    return true;
  }

  function validateForm() {
    if (isTouched) {
      let errors = {};

      if (bookingData.guests < 1) {
        errors.guests = "Has to be at least 1 guest";
      } else if (bookingData.guests > 10) {
        errors.guests = "Cannot seat more than 10";
      } else {
        errors.guests = null;
      }

      if (bookingData.date === "") {
        errors.date = "Must select a date";
      } else if (!isValidDate(bookingData.date)) {
        errors.date = "Sorry! Reservations not available for this date!";
      } else {
        errors.date = null;
      }

      if (bookingData.time === "") {
        errors.time = "Must select a time";
      } else {
        errors.time = null;
      }

      if (bookingData.occasion === "") {
        errors.occasion = "Must select an occasion";
      } else {
        errors.occasion = null;
      }

      setGuestsError(errors.guests);
      setDateError(errors.date);
      setTimeError(errors.time);
      setOccasionError(errors.occasion);

      setValidated(Object.values(errors).every((error) => error === null));
    }
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitForm() === true) {
      console.log("success");
      navigate("/confirmation");
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <h1>Book Table Now</h1>
      <div className="booking-wrapper">
        <form
          data-testid="booking-form"
          className="booking"
          onSubmit={handleSubmit}
        >
          {/* Rest of the form elements */}
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={bookingData.date}
              onChange={handleChange}
              onBlur={handleBlur}
              className={dateError ? "error" : ""}
            />
            {dateError && <p className="error-message">{dateError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              value={bookingData.time}
              onChange={handleChange}
              onBlur={handleBlur}
              className={timeError ? "error" : ""}
            >
              <option value="">Select a time</option>
              <AvailableTimes
                bookingData={bookingData}
                items={JSON.parse(localStorage.getItem("bookings"))}
                availableTimes={availableTimes}
              />
            </select>
            {timeError && <p className="error-message">{timeError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests:</label>
            <input
              type="number"
              id="guests"
              value={bookingData.guests}
              onChange={handleChange}
              onBlur={handleBlur}
              className={guestsError ? "error" : ""}
            />
            {guestsError && <p className="error-message">{guestsError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion:</label>
            <input
              type="text"
              id="occasion"
              value={bookingData.occasion}
              onChange={handleChange}
              onBlur={handleBlur}
              className={occasionError ? "error" : ""}
            />
            {occasionError && <p className="error-message">{occasionError}</p>}
          </div>

          <button type="submit" disabled={!validated || isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
