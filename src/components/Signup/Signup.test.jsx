import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Signup from ".";

describe("Signup Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays text when page is loaded", () => {
    const heading = screen.getByText("Sign Up");
    expect(heading).toBeInTheDocument();
  });

  it("displays textbox input", () => {
    const email = screen.getByRole("textbox");
    expect(email).toBeInTheDocument();
  });

  it("displays button input", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
