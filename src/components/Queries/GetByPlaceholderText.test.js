import { render, screen } from "@testing-library/react";
import GetByPlaceholderText from "./GetByPlaceholderText";

describe('GetByRole', () => {
    test('Elements Render Correctly', () => {
        render(<GetByPlaceholderText />)

        const inputElementFirstname = screen.getByPlaceholderText('Indiquez votre prénom')
        expect(inputElementFirstname).toBeInTheDocument();

        const inputElementLastName = screen.getByPlaceholderText('Indiquez votre nom')
        expect(inputElementLastName).toBeInTheDocument();
    })
});