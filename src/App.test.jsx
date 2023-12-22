import React from "react";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("only displays one h1 per page", () => {
    const h1s = screen.queryAllByRole("heading", {
      level: 1,
    });
    expect(h1s.length).not.toBeGreaterThan(1);
  });
});
