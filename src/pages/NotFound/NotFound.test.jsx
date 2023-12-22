import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../context/AuthContext";

import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import NotFound from ".";

describe("NotFound", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <NotFound />
        </AuthProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays text when page is loaded", () => {
    // Assert that the "404: Page not found" text is displayed
    const notFoundText = screen.getByText(/404: Page not found/i);
    expect(notFoundText).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });
});
