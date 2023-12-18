import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import FlashStack from '.'

const stack = {
    topic: "topic",
    cardCount: 10
}

describe('FlashStack Component', () => {
    render(
        <MemoryRouter>
            <FlashStack stack = {stack}/>
        </MemoryRouter>
    )

    it('displays a stack with 3 children', () => {
        const stacks = screen.getByRole('stackDiv')
        expect(stacks).toBeInTheDocument()
        expect(stacks.childNodes.length).toBe(3)
    })
})

