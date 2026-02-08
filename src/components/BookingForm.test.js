import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders Reserve button", () => {
  render(<BookingForm availableTimes={["18:00"]} />);
  const button = screen.getByText("Reserve");
  expect(button).toBeInTheDocument();
});
