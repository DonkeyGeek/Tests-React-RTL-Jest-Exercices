import { render } from "@testing-library/react";

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

describe('Learn Mouse Pointer Interactions', () => {
    render(<IncrementCount />)
});
