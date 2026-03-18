/**
 * @jest-environment node
 */
import { POST } from "@/app/api/contact/route";
import { NextRequest } from "next/server";

// Mock nodemailer
jest.mock("nodemailer", () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: "test-id" }),
  }),
}));

import nodemailer from "nodemailer";

function makeRequest(body: object) {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  const sendMail = (nodemailer.createTransport as jest.Mock)().sendMail as jest.Mock;

  beforeEach(() => {
    sendMail.mockClear();
  });

  it("returns 200 and sends email with valid payload", async () => {
    const req = makeRequest({ name: "John", email: "john@example.com", message: "Hello!" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual({ ok: true });
    expect(sendMail).toHaveBeenCalledTimes(1);
  });

  it("sends email with correct subject and replyTo", async () => {
    const req = makeRequest({ name: "Jane", email: "jane@example.com", message: "Hi there" });
    await POST(req);

    const mailOptions = sendMail.mock.calls[0][0];
    expect(mailOptions.subject).toBe("Portfolio message from Jane");
    expect(mailOptions.replyTo).toBe("jane@example.com");
  });

  it("returns 400 when name is missing", async () => {
    const req = makeRequest({ email: "john@example.com", message: "Hello!" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("All fields are required.");
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("returns 400 when email is missing", async () => {
    const req = makeRequest({ name: "John", message: "Hello!" });
    const res = await POST(req);

    expect(res.status).toBe(400);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("returns 400 when message is missing", async () => {
    const req = makeRequest({ name: "John", email: "john@example.com" });
    const res = await POST(req);

    expect(res.status).toBe(400);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("returns 400 when email format is invalid", async () => {
    const req = makeRequest({ name: "John", email: "not-an-email", message: "Hello!" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Invalid email address.");
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("returns 500 when nodemailer throws", async () => {
    sendMail.mockRejectedValueOnce(new Error("SMTP error"));

    const req = makeRequest({ name: "John", email: "john@example.com", message: "Hello!" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json.error).toBe("Failed to send email.");
  });
});
