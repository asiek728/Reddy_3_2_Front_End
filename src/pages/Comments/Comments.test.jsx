import React, { useState } from 'react';
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from 'react-router-dom';
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import { Comments } from '../index'

describe('CommentsPage', () => {
    beforeEach(() => {
      render(
      <Comments />);
    });
  
    afterEach(() => {
      cleanup();
    });


    it('Displays heading with appropriate text', () => {
        const title = screen.getByRole('title')
        expect(title).toBeInTheDocument();
        expect(title.textContent).toBe("Comments");
    })

    it('Contains a div element', () => {
        const div = screen.getByRole('div')
        expect(div).toBeInTheDocument()
        expect(div.children.length).toBe(2)
    })


})
