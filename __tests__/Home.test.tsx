import React from 'react'
import { render, screen } from "@testing-library/react";
import Home from "@/src/app/page.tsx";

it("should have Docs text", () => {
  render(<Home />);
  const text = screen.getByText("hello world");

  expect(text).toBeInTheDocument();
}); 