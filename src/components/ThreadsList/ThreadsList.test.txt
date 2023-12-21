import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ThreadsList from ".";

describe("ThreadList", () => {
  const fetchSpy = vi.spyOn(global, "fetch");

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it("should fetch threads", async () => {
    const mockResponse = [
      {
        _id: "658402b0ff5a98ea531fdd34",
        Question: "What factors affect stock prices?",
        Subject: "Economics",
        Email: "low14@hotmail.com",
        createdAt: "2023-12-21T09:17:36.516Z",
        updatedAt: "2023-12-21T09:17:36.516Z",
        __v: 0,
      },
      {
        _id: "658401bd5aa3969e23cc94d4",
        Question: "Hi",
        Subject: "Economics",
        Email: "testing1@gmail.com",
        createdAt: "2023-12-21T09:13:33.901Z",
        updatedAt: "2023-12-21T09:13:33.901Z",
        __v: 0,
      },
    ];

    const mockResolveValue = {
      ok: true,
      json: () => new Promise((resolve) => resolve(mockResponse)),
    };
    fetchSpy.mockReturnValue(mockResolveValue);

    render(
      <AuthProvider>
        <BrowserRouter>
          <ThreadsList />
        </BrowserRouter>
      </AuthProvider>
    );
    console.log(fetchSpy);
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0MDI2M2ZmNWE5OGVhNTMxZmRkMDEiLCJpYXQiOjE3MDMxNTAxNzksImV4cCI6MTcwMzQwOTM3OX0.NvhHqZqWkXTWxcKibgKN_6rNmdKpkth382zTQMWp1_Y";

    await waitFor(() => {
      // Log actual calls to fetchSpy
      console.log("Component is rendered:", screen.debug());
      console.log(fetchSpy.calls);
      expect(fetchSpy).toHaveBeenCalledWith("http://localhost:3000/threads", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
    });

    // Add other assertions you want to check after the fetch completes
    expect(screen.getByText("Economics")).toBeInTheDocument();
  });
});
