import { logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm ______", () => {
    const { container } = render(<App />);

    logRoles(container)
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1
    });

    expect(topLevelHeading).toBeInTheDocument();
})

test("displays an image with alt text", () => {
    const { container } = render(<App />);

    logRoles(container)

    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("alt", "self-potrait")
    expect(image).toBeInTheDocument();
})

test("displays a top-level heading with the text `About Me", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2
    });

    expect(secondLevelHeading).toBeInTheDocument();
})

test("displays a top-level heading with the text `Hi, I'm ______", () => {
    const { container } = render(<App />);

    logRoles(container)
    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
})
test("displays github link", () => {
    const { container } = render(<App />);

    logRoles(container)
    const gitlink = screen.getByRole("link", {
        name: /Github/i,
    });

    expect(gitlink).toBeInTheDocument();
})
test("displays linkedin link", () => {
    const { container } = render(<App />);

    logRoles(container)
    const linkedlink = screen.getByRole("link", {
        name: /LinkedIn/i,
    });

    expect(linkedlink).toBeInTheDocument();
})