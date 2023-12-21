import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Router from 'react-router';
import { vi } from 'vitest'

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import ThreadsList from "./index";

describe('ThreadList', () => {

    const fetchSpy = vi.spyOn(global, 'fetch')

    afterEach(() => {
        fetchSpy.mockRestore()
    })


    it('should fetch threads', async () => {

        const mockResponse = [{
            "_id": "6581b2561e02a8b6730d5047",
            "Question": "What is the quadratic question?",
            "Subject": "maths",
            "createdAt": "2023-12-19T15:10:14.395Z",
            "updatedAt": "2023-12-19T15:10:14.395Z",
            "__v": 0
        },
        {
            "_id": "6581b22f1e02a8b6730d503b",
            "Question": "Explain the basics of game theory and its applications in economics",
            "Subject": "economics",
            "createdAt": "2023-12-19T15:09:35.795Z",
            "updatedAt": "2023-12-19T15:09:35.795Z",
            "__v": 0
        }
			]

			const mockResolveValue = { 
				ok: true,
				json: () => new Promise((resolve) => resolve(mockResponse))
		};
		fetchSpy.mockReturnValue(mockResolveValue);

        render(<ThreadsList/>)
        
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/threads')
        expect(fetch).toHaveBeenCalledTimes(1)

        expect(await screen.findByText('economics'))

    })
})
