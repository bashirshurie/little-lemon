import { useState, useEffect } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (date) {
      setAvailableTimes(["17:00", "18:00", "19:00", "20:00"]);
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table booking form"
    >
      <fieldset>
        <legend>Booking Details</legend>

        <label htmlFor="date">Choose date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-required="true"
        />

        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button type="submit" aria-label="Submit booking">
          Book Table
        </button>

        {success && (
          <p className="success" role="alert">
            ✅ Booking confirmed! We look forward to seeing you.
          </p>
        )}
      </fieldset>
    </form>
  );
}

export default BookingForm;
