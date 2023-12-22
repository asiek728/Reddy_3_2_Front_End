import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import FilterThread from ".";

describe("FilterThread", () => {
  beforeEach(() => {
    render(<FilterThread />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the search bar", () => {
    const searchBar = screen.getByLabelText("Filter By Subject:");
    expect(searchBar).toBeInTheDocument();
  });

  it("should render the select option", () => {
    const inputNode = screen
      .getByLabelText("Filter By Subject:")
      .querySelector('[value="Politics"]');
    expect(inputNode).toBeInTheDocument();
  });
});
