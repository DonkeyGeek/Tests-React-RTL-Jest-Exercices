import { render, screen } from "@testing-library/react";
import GetByTitle from "./GetByTitle";

test('Elements Render Correctly', () => {
    render(<GetByTitle />)

    const titleAA = screen.getByTitle('Adopter un animal')
    expect(titleAA).toBeInTheDocument()

    const reactLogo = screen.getByTitle('React Logo')
    expect(reactLogo).toBeInTheDocument()
})