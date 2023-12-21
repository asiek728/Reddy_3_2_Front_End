import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "react-router";
import { vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import CommentItem from ".";

describe("CommentItem", () => {
  const fetchSpy = vi.spyOn(
    typeof window !== "undefined" ? window : global,
    "fetch"
  );

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it("should fetch specific comment", async () => {
    vi.spyOn(Router, "useParams").mockReturnValue({
      id: "65844a4bfbdf8cfc22ff3008",
    });

    const mockResponse = {
      _id: "65844a4bfbdf8cfc22ff3008",
      ThreadID: "658402b0ff5a98ea531fdd34",
      Email: "testing88@gmail.com",
      comment: "Test please pass",
      createdAt: "2023-12-21T14:23:07.199Z",
      updatedAt: "2023-12-21T14:23:07.199Z",
      __v: 0,
    };

    const mockResolveValue = {
      ok: true,
      json: () => new Promise((resolve) => resolve(mockResponse)),
    };

    fetchSpy.mockReturnValue(mockResolveValue);

    render(
      <AuthProvider>
        <BrowserRouter>
          <CommentItem />
        </BrowserRouter>
      </AuthProvider>
    );

    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0MDI2M2ZmNWE5OGVhNTMxZmRkMDEiLCJpYXQiOjE3MDMxNTAxNzksImV4cCI6MTcwMzQwOTM3OX0.NvhHqZqWkXTWxcKibgKN_6rNmdKpkth382zTQMWp1_Y";

    // Use waitFor to wait for the fetch operation to complete
    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        "http://localhost:3000/comments/65844a4bfbdf8cfc22ff3008",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });
  });
});
