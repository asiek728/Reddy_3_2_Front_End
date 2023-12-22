import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import DeleteThread from ".";

describe("Add Comment item Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <DeleteThread/>
        </BrowserRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it.skip("should render the delete button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });


})
