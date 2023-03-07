import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TypeClear from './TypeClear';

describe('Exercice type & clear', () => {

    test('taper dans un champ de saisie', async () => { 
        const user = userEvent.setup();
        render(<TypeClear />)
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toHaveValue('Bonjour')
        await user.type(inputElement, ' les amis dev!')
        expect(inputElement).toHaveValue('Bonjour les amis dev!')
        expect(inputElement.value).toBe('Bonjour les amis dev!')
        expect(inputElement.value).toEqual('Bonjour les amis dev!')

        await user.clear(inputElement)
        expect(inputElement).toHaveValue('')
        expect(inputElement.value).toBe('')
    })
});
