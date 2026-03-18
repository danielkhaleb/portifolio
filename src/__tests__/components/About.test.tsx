import { render, screen } from "@testing-library/react";
import About from "@/components/About";

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getByText("Enthusiastic learner. Pragmatic builder.")).toBeInTheDocument();
  });

  it("renders highlight stats", () => {
    render(<About />);
    expect(screen.getByText("12+")).toBeInTheDocument();
    expect(screen.getByText("Years coding")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("10+")).toBeInTheDocument();
  });

  it("renders profile photo", () => {
    render(<About />);
    expect(screen.getByAltText("Daniel Khaleb")).toBeInTheDocument();
  });

  it("mentions AI and vibe coding", () => {
    render(<About />);
    expect(screen.getByText(/AI-assisted development/i)).toBeInTheDocument();
    expect(screen.getByText(/Claude/i)).toBeInTheDocument();
    expect(screen.getByText(/Kiro/i)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
