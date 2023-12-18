import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App'

describe('App Component', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )

    afterEach(() => {
        cleanup()
    })

    it('only displays one h1 per page', () => {
        const h1s = screen.queryAllByRole('heading', {
            level: 1
        })
        expect(h1s.length).not.toBeGreaterThan(1)
    })
    
})
