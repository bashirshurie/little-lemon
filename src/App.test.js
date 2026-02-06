import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Reserve a Table heading", () => {
  render(<App />);
  expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
});

test("renders Book Table button", () => {
  render(<App />);
  expect(screen.getByText(/Book Table/i)).toBeInTheDocument();
});
