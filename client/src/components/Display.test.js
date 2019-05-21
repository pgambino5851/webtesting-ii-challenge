import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from './Display';

describe('Display Component', () => {
    it("should render successfully", () => {
        render(<Display />)
        cleanup()
    })

    it("should display balls title for at-bat", () => {
        const { getByText } = render(<Display />);
        const balls = getByText(/balls:/i)
        expect(balls).toBeInTheDocument();
        cleanup();
    })

    it("should display strikes title for at-bat", () => {
        const { getByText } = render(<Display />);
        const strikes = getByText(/strikes:/i)
        expect(strikes).toBeInTheDocument();
        cleanup();
    })

    it("should display actual count of strikes and balls passed in from state or props", () => {
        const { getByText } = render(<Display balls ={3} strikes = {0} />)

        const balls = getByText(/3/)
        const strikes = getByText(/0/)

        expect(balls).toBeInTheDocument()
        expect(strikes).toBeInTheDocument();
    })


})