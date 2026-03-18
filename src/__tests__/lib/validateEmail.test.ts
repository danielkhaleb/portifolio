import { isValidEmail } from "@/lib/validateEmail";

describe("isValidEmail", () => {
  it.each([
    "user@example.com",
    "user.name+tag@sub.domain.org",
    "daniel.khaleb@gmail.com",
  ])("accepts valid email: %s", (email) => {
    expect(isValidEmail(email)).toBe(true);
  });

  it.each([
    "",
    "notanemail",
    "missing@domain",
    "@nodomain.com",
    "spaces in@email.com",
    "double@@at.com",
  ])("rejects invalid email: %s", (email) => {
    expect(isValidEmail(email)).toBe(false);
  });

  it("trims whitespace before validating", () => {
    expect(isValidEmail("  user@example.com  ")).toBe(true);
  });
});
