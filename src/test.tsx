import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("renders with an initial count of 0 by default", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  });

  it("renders with a custom initial value", () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 5");
  });

  it("increments the count when Increment is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  it("decrements the count when Decrement is clicked", () => {
    render(<Counter initialValue={2} />);
    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  it("resets the count back to the initial value", () => {
    render(<Counter initialValue={3} />);
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 3");
  });
});
