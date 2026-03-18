import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders name and location", () => {
    render(<Footer />);
    expect(screen.getByText(/Daniel Khaleb Batista/i)).toBeInTheDocument();
    expect(screen.getByText(/Porto, Portugal/i)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
