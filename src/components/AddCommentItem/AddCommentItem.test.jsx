import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import AddCommentItem from ".";

describe("Add Comment Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <AddCommentItem />
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays a submit button when page is loaded", () => {
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });

  it("displays add comments in placeholder", () => {
    const placeholder = screen.getByPlaceholderText("Add comment");
    expect(placeholder).toBeInTheDocument();
  });
});
