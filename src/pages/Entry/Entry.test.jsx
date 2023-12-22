import React, { useState } from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import { Entry } from "../index";

describe("Entry page", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <BrowserRouter>
            <Entry />
        </BrowserRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a welcome message", () => {
    const welcome = screen.getByRole("welcome");
    expect(welcome.textContent).toBe(" Welcome to your notes")
  });

  it.skip("renders 4 links", () => {
    const links = screen.getByRole("linkContainer");
    expect(links).toBeInTheDocument();
    expect(links.children.length).toBe(4);
  })
});
