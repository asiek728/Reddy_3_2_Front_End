import React, { useState } from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../context/AuthContext";
import Signup from "../../components/Signup";

import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import { SignupPage } from ".";

describe("SignupPage", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <Signup>
          <SignupPage />
        </Signup>
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
