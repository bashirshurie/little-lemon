export default function BookingForm() {
  return (
    <form>
      <label htmlFor="date">Choose date</label>
      <input id="date" type="date" />

      <button type="submit">Reserve</button>
    </form>
  );
}
