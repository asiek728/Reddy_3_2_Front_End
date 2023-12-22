import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import NewFlashCardFormPage from ".";

describe("NewFlashCardFormPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <NewFlashCardFormPage />
        </AuthProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays text when page is loaded", () => {
    const heading = screen.getByText("Add a New Flash Card");
    expect(heading).toBeInTheDocument();
  });

  it("displays button input", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
