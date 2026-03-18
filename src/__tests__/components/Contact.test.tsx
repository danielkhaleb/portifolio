import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/Contact";

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("Contact", () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it("renders the contact form fields", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/tell me about/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("renders contact info links", () => {
    render(<Contact />);
    expect(screen.getByText("daniel.khaleb@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+351 910 524 245")).toBeInTheDocument();
    expect(screen.getByText(/linkedin/i)).toBeInTheDocument();
  });

  it("shows loading state while submitting", async () => {
    let resolve: (v: unknown) => void;
    mockFetch.mockReturnValueOnce(new Promise((res) => { resolve = res; }));
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText("Your name"), "John");
    await user.type(screen.getByPlaceholderText("Email address"), "john@example.com");
    await user.type(screen.getByPlaceholderText(/tell me about/i), "Hello!");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
    resolve!({ ok: true, json: async () => ({ ok: true }) });
  });

  it("shows success message after successful submission", async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, json: async () => ({ ok: true }) });
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText("Your name"), "John");
    await user.type(screen.getByPlaceholderText("Email address"), "john@example.com");
    await user.type(screen.getByPlaceholderText(/tell me about/i), "Hello!");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    );
  });

  it("shows error message on failed submission", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Failed to send email." }),
    });
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText("Your name"), "John");
    await user.type(screen.getByPlaceholderText("Email address"), "john@example.com");
    await user.type(screen.getByPlaceholderText(/tell me about/i), "Hello!");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByText(/failed to send email/i)).toBeInTheDocument()
    );
  });

  it("shows inline error for invalid email without calling fetch", async () => {
    render(<Contact />);
    const form = screen.getByPlaceholderText("Your name").closest("form")!;

    // Use fireEvent.submit to bypass native type="email" validation in jsdom
    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Email address"), { target: { value: "not-an-email" } });
    fireEvent.change(screen.getByPlaceholderText(/tell me about/i), { target: { value: "Hello!" } });
    fireEvent.submit(form);

    await waitFor(() => expect(screen.getByText(/valid email/i)).toBeInTheDocument());
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
