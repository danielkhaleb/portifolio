import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

describe("Nav", () => {
  it("renders the logo", () => {
    render(<Nav />);
    expect(screen.getByText("Daniel Khaleb")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Nav />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("nav links point to correct anchors", () => {
    render(<Nav />);
    expect(screen.getByText("About").closest("a")).toHaveAttribute("href", "#about");
    expect(screen.getByText("Experience").closest("a")).toHaveAttribute("href", "#experience");
    expect(screen.getByText("Skills").closest("a")).toHaveAttribute("href", "#skills");
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute("href", "#contact");
  });

  it("matches snapshot", () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
