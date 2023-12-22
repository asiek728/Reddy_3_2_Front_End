import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import NavBar from ".";

describe("Navbar Component", () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    </AuthProvider>
  );

  it("displays a navbar with 2 children", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toBe(3);
  });

  it("displays a navbar with correct names", () => {
    const nav = screen.getByRole("navbar");
    expect(nav.childNodes[0].textContent).toBe("Home");
    expect(nav.childNodes[1].textContent).toBe("Flashcards");
    expect(nav.childNodes[2].textContent).toBe("Forum");
  });
});
