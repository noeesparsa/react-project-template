import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders its label and supports variants", () => {
    render(<Button variant="outline">Continue</Button>);

    const button = screen.getByRole("button", { name: "Continue" });

    expect(button).toBeVisible();
    expect(button).toHaveClass("border");
  });
});
