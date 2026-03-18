import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";

describe("Experience", () => {
  it("renders the section heading", () => {
    render(<Experience />);
    expect(screen.getByText("Work experience")).toBeInTheDocument();
  });

  it("renders the current job with badge", () => {
    render(<Experience />);
    expect(screen.getByText("Current")).toBeInTheDocument();
    expect(screen.getByText(/bolttech/i)).toBeInTheDocument();
  });

  it("renders all 6 jobs", () => {
    render(<Experience />);
    expect(screen.getAllByText(/ateliware · Brasil/i)).toHaveLength(2);
    expect(screen.getByText(/Sisand/i)).toBeInTheDocument();
    expect(screen.getByText(/Bornlogic/i)).toBeInTheDocument();
    expect(screen.getByText(/Employer RH/i)).toBeInTheDocument();
  });

  it("renders tech stack chips", () => {
    render(<Experience />);
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Node.js").length).toBeGreaterThan(0);
  });

  it("matches snapshot", () => {
    const { container } = render(<Experience />);
    expect(container).toMatchSnapshot();
  });
});
