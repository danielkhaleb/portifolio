import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";

describe("Skills", () => {
  it("renders all skill categories", () => {
    render(<Skills />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Mobile & Data")).toBeInTheDocument();
    expect(screen.getByText("DevOps & Cloud")).toBeInTheDocument();
    expect(screen.getByText("AI & Vibe Coding")).toBeInTheDocument();
  });

  it("renders AI tools", () => {
    render(<Skills />);
    expect(screen.getByText("Claude")).toBeInTheDocument();
    expect(screen.getByText("Kiro")).toBeInTheDocument();
    expect(screen.getByText("Vibe Coding")).toBeInTheDocument();
    expect(screen.getByText("Prompt Engineering")).toBeInTheDocument();
  });

  it("renders skill bars with correct widths", () => {
    const { container } = render(<Skills />);
    const bars = container.querySelectorAll(".skill-bar");
    bars.forEach((bar) => {
      const width = (bar as HTMLElement).style.width;
      expect(width).toMatch(/^\d+%$/);
    });
  });

  it("matches snapshot", () => {
    const { container } = render(<Skills />);
    expect(container).toMatchSnapshot();
  });
});
