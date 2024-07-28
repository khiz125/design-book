import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have Docs text", () => {
  render(<Home />);
  const text = screen.getByText("hello world");

  expect(text).toBeInTheDocument();
}); 