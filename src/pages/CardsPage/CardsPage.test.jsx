import React, { useState } from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../context/AuthContext";

import { BrowserRouter } from "react-router-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
 
import { CardsPage } from "../index"

describe("CommentsPage", () => {
    
    beforeEach(() => {
      render(
        <BrowserRouter>
        <AuthProvider>
          <CardsPage />
        </AuthProvider>
        </BrowserRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it("Displays h1 with the appropriate text", () => {
        const heading = screen.getByRole('head1')
        expect(heading).toBeInTheDocument()
        expect(heading.textContent).toBe('flashcards')
    })

    it("Displays h2 with the appropriate text", () => {
        const heading = screen.getByRole('head2')
        expect(heading).toBeInTheDocument()
        expect(heading.textContent).toBe('Press on card to flip it')
    })

    it("parent div element contains 3 child nodes", () => {
        const parent = screen.getByRole('parent')
        expect(parent).toBeInTheDocument()
        expect(parent.childNodes.length).toBe(3)
    })

    it("div element contains 1 child node", () => {
        const div = screen.getByRole('cards')
        expect(div).toBeInTheDocument()
        expect(div.childNodes.length).toBe(1)
    })

})
