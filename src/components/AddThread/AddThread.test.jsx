import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import AddThread from ".";

describe("Add Comment Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <AddThread />
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays title text when page is loaded", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("displays ask a question in placeholder", () => {
    const placeholder = screen.getByPlaceholderText("Ask a Question");
    expect(placeholder).toBeInTheDocument();
  });
});
