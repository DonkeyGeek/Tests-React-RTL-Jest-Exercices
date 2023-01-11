import { render, screen } from "@testing-library/react";
import GetByRole from "./GetByRole";

describe('GetByRole', () => {
    test('Elements Render Correctly', () => {
        render(<GetByRole />)

        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();

        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();

        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();

        const selectElement = screen.getByRole('listbox');
        expect(selectElement).toBeInTheDocument();

        const inputCheckboxElement = screen.getByRole('checkbox');
        expect(inputCheckboxElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })

});