import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ScoreProvider } from "../../context/ScoreContext";
import { AuthProvider } from "../../context/AuthContext";
import PassedButtons from ".";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("PassedButtons Component", () => {
  let cardIncrement;

  beforeEach(() => {
    cardIncrement = 0; // Initialize cardIncrement directly in the test

    render(
      <AuthProvider>
        <MemoryRouter>
          <ScoreProvider>
            <PassedButtons
              cardIncrement={cardIncrement}
              setCardIncrement={null}
            />
          </ScoreProvider>
        </MemoryRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders 'Got it' and 'Not quite' buttons", () => {
    const pass = screen.getByRole("button", { name: /Got it/i });
    const fail = screen.getByRole("button", { name: /Not quite/i });

    expect(pass).toBeInTheDocument();
    expect(fail).toBeInTheDocument();
  });
});
