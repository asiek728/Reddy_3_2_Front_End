import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import CheckDelete from ".";

describe("Add Delete Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <CheckDelete />
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays a submit button when page is loaded", () => {
    const question = screen.getByText(
      "Are you sure you want to delete this stack?"
    );
    expect(question).toBeInTheDocument();
  });
});
