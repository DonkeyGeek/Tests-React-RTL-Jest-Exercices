import { render, screen } from "@testing-library/react";
import GetByRole from "./GetByRole";

describe('GetByRole', () => {
    test('Elements Render Correctly', () => {
        render(<GetByRole />)

        const headingH1Element = screen.getByRole('heading', { level: 1 });
        expect(headingH1Element).toBeInTheDocument();

        const headingH2Element = screen.getByRole('heading', { level: 4 });
        expect(headingH2Element).toBeInTheDocument();

        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();

        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();

        const inputElementFirstName = screen.getByRole('textbox', { name: 'Prénom'});
        expect(inputElementFirstName).toBeInTheDocument();

        const inputElementLastName = screen.getByRole('textbox', { name: 'Nom'});
        expect(inputElementLastName).toBeInTheDocument();

        const selectElement = screen.getByRole('listbox');
        expect(selectElement).toBeInTheDocument();

        const inputCheckboxTerms = screen.getByRole('checkbox', { name: "J'accepte les termes et conditions"});
        expect(inputCheckboxTerms).toBeInTheDocument();

        const inputCheckboxNewsletter = screen.getByRole('checkbox', { name: "Je m'abonne à la newsletter"});
        expect(inputCheckboxNewsletter).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })

});