import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import { ScoreProvider } from "../../context/ScoreContext";
import { TimerProvider } from "../../context/TimerContext";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import FlashStacksPage from ".";

describe("FlashStacksPage Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <ScoreProvider>
          <TimerProvider>
            <BrowserRouter>
              <FlashStacksPage />
            </BrowserRouter>
          </TimerProvider>
        </ScoreProvider>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });


  it("displays button", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Your flashcard stacks')
  });
});


//    expect(button).toHaveAttribute('id', 'signupLink');
