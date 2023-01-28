import { render, screen } from "@testing-library/react";
import GetByText from "./GetByText";

test('Elements render correctly', () => {
    render(<GetByText />)

    // matching a string
    const inputButtonTheme = screen.getByText('Changer la couleur') // Full string Match
    expect(inputButtonTheme).toBeInTheDocument()

    const inputButtonTheme2 = screen.getByText('er la coul', { exact: false }) // Substring match
    expect(inputButtonTheme2).toBeInTheDocument()

    const inputButtonTheme3 = screen.getByText('Changer la couLeur', { exact: false }) // ignore case
    expect(inputButtonTheme3).toBeInTheDocument()

    const inputSubmitButton = screen.getByText('Valider')
    expect(inputSubmitButton).toBeInTheDocument()

    const introParagraph = screen.getByText('Veuillez indiquer votre identité')
    expect(introParagraph).toBeInTheDocument()

    // Mattching a regex
    const introParagraph1 = screen.getByText(/indiquer/) // substring match
    expect(introParagraph1).toBeInTheDocument()

    const introParagraph2 = screen.getByText(/^veuillez indiquer votre identité$/i) // full string match. ignore case
    expect(introParagraph2).toBeInTheDocument()

    const introParagraph3 = screen.getByText(/Veuillez i?ndiqUER votre identité/i) // Regex
    expect(introParagraph3).toBeInTheDocument()

    // matching withg a function
    // (content ?: string, element ?: Element | null) => boolean
    const introParagraph4 = screen.getByText( content => content.startsWith('Ve') ) // function
    expect(introParagraph4).toBeInTheDocument()
});
