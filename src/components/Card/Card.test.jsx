import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Card from ".";

const cards = [
  {
    frontSide: "frontSide",
    backSide: "backSide",
  },
  {
    frontSide: "frontSide2",
    backSide: "backSide2",
  },
];

describe("Card Component", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Card cards={cards} cardIncrement={0} setCardIncrement={null} />
        </MemoryRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays a card when page is loaded", () => {
    const card = screen.getByRole("displayCard");
    expect(card).toBeInTheDocument();
  });

  it("displays a front side then a back side", () => {
    const card = screen.getByRole("displayCard");
    expect(card[0].frontSide).toBe("frontSide");
    userEvent.click(card);
    expect(card[0].backSide).toBe("backSide");
  });

  it("displays next card when button passed button is pressed", () => {
    const card = screen.getByRole("displayCard");
    const passed = screen.getByRole("passButt");
  });
});
