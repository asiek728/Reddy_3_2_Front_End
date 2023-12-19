import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
global.userEvent = userEvent

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import PassedButtons from '.'

describe('Card Component', () => {
    let cardIncrement
    beforeEach(() => {
        cardIncrement = 0
        render(
            <MemoryRouter>
                <PassedButtons cardIncrement={cardIncrement} setCardIncrement={null}/>
            </MemoryRouter>
        )
      });
    
      afterEach(() => {
        cleanup();
      });


    it('renders 2 buttons ',() => {
        const pass = screen.getByRole('button', { name: /Got it/i })
        const fail = screen.getByRole('button', { name: /Not quite/i })
        expect(pass).toBeInTheDocument()
        expect(fail).toBeInTheDocument()
    })

    it('incriments counter when pass button is pressed', () => {
        const pass = screen.getByRole('button', { name: /Got it/i })
        expect(cardIncrement).toBe(0)
        userEvent.click(pass)
        expect(cardIncrement).toBe(1)
    })

    it('incriments counter when fail button is pressed', () => {
        const fail = screen.getByRole('button', { name: /Not quite/i })
        expect(cardIncrement).toBe(0)
        userEvent.click(fail)
        expect(cardIncrement).toBe(1)
    })
})

