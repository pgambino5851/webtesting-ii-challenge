import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from './Dashboard';

describe("Display Component successfully", () => {
    it("should render successfully", () => {
        render(<Dashboard />)
        cleanup()
    })
})