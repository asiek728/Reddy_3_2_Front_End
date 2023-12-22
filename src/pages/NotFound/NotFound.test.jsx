import React, { useState } from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../context/AuthContext";
import Signup from "../../components/Signup";

import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import { NotFound } from ".";

describe("NotFound", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays text when page is loaded", () => {
    const nonexistentElement = screen.queryByTestId("nonexistent-element");
    // Assert that the "page not found" message is displayed
    expect(nonexistentElement).toBeInTheDocument();
  });
});
