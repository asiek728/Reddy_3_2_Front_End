import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import StackForm from ".";

import Getter from '.'
import axios from 'axios';

describe("StackForm Component", () => {
	// const = 
  beforeEach(() => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <StackForm />
        </BrowserRouter>
      </AuthProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("displays text when page is loaded", () => {
    const heading = screen.getByText("Topic:");
    expect(heading).toBeInTheDocument();
  });

  it("displays textbox input", () => {
    const email = screen.getByRole("textbox");
    expect(email).toBeInTheDocument();
  });

  it("displays button input", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it('posts a new card givena topic', async () => {
  vi.spyOn(axios, 'post').mockResolvedValueOnce({
  topic: [{ "topic" : "Geography" }]
  }) 
  const card = await screen.getByRole("textbox")
  expect(card.childNodes.textContent).toBe(undefined)
  }
  )



});
