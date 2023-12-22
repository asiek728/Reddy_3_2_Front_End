import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import NewFlashCardFormPage from ".";

describe("Signup Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <NewFlashCardFormPage />
        </BrowserRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays text when page is loaded", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("displays front label", () => {
    const frontLabel = screen.getByLabelText('Front:')
    expect(frontLabel).toBeInTheDocument();
  });

  it("displays back label", () => {
    const backLabel = screen.getByLabelText('Back:')
    expect(backLabel).toBeInTheDocument();
  });

  it("displays button", () => {
    const button = screen.getByRole("button", { name: /Add/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', 'newFlashCard');
  });
});
