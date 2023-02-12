import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event';

/*
    clear: [Function: clear],

    copy: [Function: copy],
    cut: [Function: cut],
    deselectOptions: [Function: deselectOptions],
    keyboard: [AsyncFunction: keyboard],
    paste: [Function: paste],
    pointer: [AsyncFunction: pointer],
    selectOptions: [Function: selectOptions],
    tab: [Function: tab],
    type: [Function: type],
    upload: [Function: upload],
    setup: [Function: setupMain]

    1) Convinience APIs
    *******************
    Intéractions avec la souris
    - click()
    - dblClick()
    - tripleClick
    Les mouvements de la souris 
    - hover()
    - unhover()

    2) Pointer API
    Voir la doc : https://testing-library.com/docs/user-event/pointer

*/

import IncrementCount from "./IncrementCount";

describe('Learn User Interactions', () => {
    test("Le compteur et le bouton s'affichent correctement", () => {
        render(<IncrementCount />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(buttonElement).toBeInTheDocument()
    })

    test("Le compteur et le bouton affichent 0 avant le clic", () => {
        render(<IncrementCount />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('0') // Test pass

        const buttonElement = screen.getByRole('button', { name: /Vous avez cliqué \d+ fois/})
        expect(buttonElement).toHaveTextContent('Vous avez cliqué 0 fois')
    })
});
