import { render, screen } from "@testing-library/react";
import GetByAltText from "./GetByAltText";

test('Elements Render Correctly', () => {
    render(<GetByAltText />)

    const imageElement = screen.getByAltText('Chien');
    expect(imageElement).toBeInTheDocument();

    const submitBtn = screen.getByAltText('Valider');
    expect(submitBtn).toBeInTheDocument();
})