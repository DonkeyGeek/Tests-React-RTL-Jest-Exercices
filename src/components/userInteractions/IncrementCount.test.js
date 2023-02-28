import { act, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import IncrementCount from "./IncrementCount";

describe('Learn User Interactions', () => {
    test("Le compteur et le bouton ainsi que le checkbox s'affichent dans le DOM", () => {
        render(<IncrementCount />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(buttonElement).toBeInTheDocument()

        const checkbox = screen.getByRole('checkbox', { name: /J'accepte les termes et conditions/i})
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
    })

    test("avant clic, le compteur et le bouton affichent 0 & Bouton désactivé et orange ", () => {
        render(<IncrementCount />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('0') // Test pass

        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(buttonElement).toHaveTextContent('Vous avez cliqué 0 fois')
        expect(buttonElement).toBeDisabled()
        expect(buttonElement).toHaveStyle({'background-color': 'orange'}) 
    })

    test("Afficher le bouton après checkbox coché. Ensuite, le cacher après checkbox décoché", async () => {
        const user = userEvent.setup()
        render(<IncrementCount />)
        const checkbox = screen.getByRole('checkbox', { name: /J'accepte les termes et conditions/i})
        await user.click(checkbox)
        expect(checkbox).toBeChecked()

        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(buttonElement).toBeEnabled()

        await user.click(checkbox)
        expect(checkbox).not.toBeChecked()
        expect(buttonElement).toBeDisabled()

        await user.dblClick(checkbox)
        expect(checkbox).not.toBeChecked()
        expect(buttonElement).toBeDisabled()
        
    })

    test("Compteur et bouton affichent 3 après 1 clic + un dblClick + couleur du bouton change en cyan", async () => {
        const user = userEvent.setup()
        render(<IncrementCount />)
        const checkbox = screen.getByRole('checkbox', { name: /J'accepte les termes et conditions/i})
        await user.click(checkbox)

        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(buttonElement).toBeEnabled()

        await user.click(buttonElement)
        expect(buttonElement).toHaveTextContent('Vous avez cliqué 1 fois')
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('1')
        expect(buttonElement).toHaveStyle({'background-color': 'cyan'})

        await user.dblClick(buttonElement)
        expect(buttonElement).toHaveTextContent('Vous avez cliqué 3 fois')
        expect(headingElement).toHaveTextContent('3')
        expect(buttonElement).toHaveStyle({'background-color': 'cyan'})
        await user.click(checkbox)
        expect(buttonElement).toBeDisabled()

    })

    test("Compteur et bouton affichent 2 après 2 clics + couleur du bouton change en orange", async () => {
        const user = userEvent.setup()
        render(<IncrementCount />)
        const checkbox = screen.getByRole('checkbox', { name: /j'accepte les termes et conditions/i})
        await user.click(checkbox)
        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(buttonElement).toBeEnabled()
        
        await user.dblClick(buttonElement)
        expect(buttonElement).toHaveTextContent('Vous avez cliqué 2 fois')

        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('2')

        expect(buttonElement).toHaveStyle({'background-color': 'orange'})
    })

    test('Le popup est caché avant le mouseOver', () => {
        render(<IncrementCount />)
        const popup = screen.queryByText(/velit voluptatibus quos excepturi/i) // substring match + ignore case
        expect(popup).not.toBeInTheDocument()
        expect(popup).toBeNull()
    })

    test("Popup s'affiche après MouseOver et s'efface après le MouseOut", async () => {
        const user = userEvent.setup()
        render(<IncrementCount />)
        // Hover
        const termsAndConditions = screen.getByText(/les termes et conditions/i)
        expect(termsAndConditions).toBeInTheDocument()
        // await user.hover(termsAndConditions)
        await act(() => user.hover(termsAndConditions))
        const popup = screen.queryByText(/velit voluptatibus quos excepturi/i)
        expect(popup).toBeInTheDocument()

        // UNHOVER
        await act(() => user.unhover(termsAndConditions))
        expect(popup).not.toBeInTheDocument()
    })

    test("Focus s'effectue sur checkbox après TAB. Ensuite, sur le bouton après checkbox coché", async () => {
        const user = userEvent.setup()
        render(<IncrementCount />)
        const checkbox = screen.getByRole('checkbox', { name: /j'accepte les termes et conditions/i})
        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(checkbox).not.toHaveFocus()
        expect(buttonElement).not.toHaveFocus()
        await user.tab()
        expect(checkbox).toHaveFocus()
        await user.click(checkbox)
        await user.tab()
        expect(buttonElement).toHaveFocus()
    })
});
