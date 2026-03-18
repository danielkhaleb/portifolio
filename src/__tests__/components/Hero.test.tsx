import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("See My Experience")).toHaveAttribute("href", "#experience");
    expect(screen.getByText("Get in Touch")).toHaveAttribute("href", "#contact");
  });

  it("renders the open to opportunities tag", () => {
    render(<Hero />);
    expect(screen.getByText(/open to new opportunities/i)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
