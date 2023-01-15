import { render, screen } from "@testing-library/react";
import GetByLabelText from "./GetByLabelText";

describe('GetByRole', () => {
    test('Elements Render Correctly', () => {
        render(<GetByLabelText />)

        const inputElementFirstName = screen.getByLabelText('Prénom');
        expect(inputElementFirstName).toBeInTheDocument();

        const inputElementLastName = screen.getByLabelText('Nom');
        expect(inputElementLastName).toBeInTheDocument();

        const inputElementUsername = screen.getByLabelText('Username');
        expect(inputElementUsername).toBeInTheDocument();

        const inputCheckboxTerms = screen.getByLabelText("J'accepte les termes et conditions");
        expect(inputCheckboxTerms).toBeInTheDocument();

        const inputCheckboxNewsletter = screen.getByLabelText("Je m'abonne à la newsletter");
        expect(inputCheckboxNewsletter).toBeInTheDocument();

        const input = screen.getByLabelText('Animal Préféré', { selector: 'input'});
        expect(input).toBeInTheDocument()
        const textarea = screen.getByLabelText('Animal Préféré', { selector: 'textarea'});
        expect(textarea).toBeInTheDocument()
    })

});