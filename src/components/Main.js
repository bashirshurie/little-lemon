import { useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00"];
};

const updateTimes = (state, action) => {
  return initializeTimes();
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <section>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </main>
  );
}
