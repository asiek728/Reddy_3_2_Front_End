import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
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

  it("increments counter when 'Got it' button is pressed", () => {
    const pass = screen.getByRole("button", { name: /Got it/i });
    expect(cardIncrement).toBe(0);
    userEvent.click(pass);
    expect(cardIncrement).toBe(1);
  });

  it("increments counter when 'Not quite' button is pressed", () => {
    const fail = screen.getByRole("button", { name: /Not quite/i });
    expect(cardIncrement).toBe(0);
    userEvent.click(fail);
    expect(cardIncrement).toBe(1);
  });
});
