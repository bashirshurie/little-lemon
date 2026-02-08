import { useState } from "react";

export default function BookingForm({ availableTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time || guests < 1) {
      alert("Please fill all required fields");
      return;
    }

    alert("Reservation confirmed!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
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
          <option key={t}>{t}</option>
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

      <button type="submit">Reserve</button>
    </form>
  );
}
