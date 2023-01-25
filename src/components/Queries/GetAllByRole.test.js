import { render, screen } from "@testing-library/react";
import { GetAllByRole } from "./GetAllByRole";

describe('Test to learn GetAllByRole', () => {

    const buttons = ["Bouton 1", "Bouton 2", "Bouton 3"];

    test('UL Element renders correctly', () => { 
        render(<GetAllByRole btns={buttons} />)
        const ulElement = screen.getByRole('list');
        expect(ulElement).toBeInTheDocument()
    })

    test('LI Elements render correctly', () => { 
        render(<GetAllByRole btns={buttons} />)
        const liElements = screen.getAllByRole('listitem');
        expect(liElements).toHaveLength(buttons.length)
    })

    test('Should have multiple buttons', () => { 
        render(<GetAllByRole btns={buttons} />)
        const buttonElements = screen.getAllByRole('button');
        expect(buttonElements).toHaveLength(buttons.length)
    })
});
