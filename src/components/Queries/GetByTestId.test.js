import { render, screen } from "@testing-library/react";
import GetByTestId from "./GetByTestId";

test('Elements Render Correctly', () => {
    render(<GetByTestId />)

    const customBtn = screen.getByTestId('custom-element')
    expect(customBtn).toBeInTheDocument()

    const divElement = screen.getByTestId('div-element')
    expect(divElement).toBeInTheDocument()
    
})