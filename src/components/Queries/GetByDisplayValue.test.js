import { render, screen } from "@testing-library/react";
import GetByDispalyValue from "./GetByDisplayValue";

test('Elements Render Correctly', () => {
    render(<GetByDispalyValue />)

    const firstName = screen.getByDisplayValue('Stan');
    expect(firstName).toBeInTheDocument();

    const lastName = screen.getByDisplayValue('Smith');
    expect(lastName).toBeInTheDocument();

    const textAreaMsg = screen.getByDisplayValue('Bonjour à tous')
    expect(textAreaMsg).toBeInTheDocument();

})