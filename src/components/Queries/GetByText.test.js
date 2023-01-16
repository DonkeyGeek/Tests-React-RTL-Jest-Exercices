import { render, screen } from "@testing-library/react";
import GetByText from "./GetByText";

test('Elements render correctly', () => {
    render(<GetByText />)
    const inputButtonTheme = screen.getByText('Changer la couleur')
    expect(inputButtonTheme).toBeInTheDocument()

    const inputSubmitButton = screen.getByText('Valider')
    expect(inputSubmitButton).toBeInTheDocument()

    const introParagraph = screen.getByText('Veuillez indiquer votre identité')
    expect(introParagraph).toBeInTheDocument()
});
