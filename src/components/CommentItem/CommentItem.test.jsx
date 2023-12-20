import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Router from 'react-router';
import { vi } from 'vitest'

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import CommentItem from ".";

describe('CommentItem', () => {

    const fetchSpy = vi.spyOn(global, 'fetch')

    afterEach(() => {
        fetchSpy.mockRestore()
    })

    it('should fetch specific comment', async () => {

        vi.spyOn(Router, 'useParams').mockReturnValue({ id: '6581ab6e67e4eb3fe05d8fd6' });

        const mockResponse = {
            "_id": "6581ab7c67e4eb3fe05d8fdc",
            "ThreadID": "6581ab6e67e4eb3fe05d8fd6",
            "comment": "hi",
            "createdAt": "2023-12-19T14:41:00.326Z",
            "updatedAt": "2023-12-19T14:41:00.326Z",
            "__v": 0
        }

        const mockResolveValue = { 
            ok: true,
            json: () => new Promise((resolve) => resolve(mockResponse))
        };

        fetchSpy.mockReturnValue(mockResolveValue);

        render(<BrowserRouter><CommentItem /></BrowserRouter>)
        
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/comments/6581ab6e67e4eb3fe05d8fd6')
        expect(fetch).toHaveBeenCalledTimes(1)

    })

})
