import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

describe('Exercice selectOptions & deselectOptions', () => {

    test('Tester la selection et la désélection des options', async () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];

        const user = userEvent.setup();
        render(<Select options={options} />)

        // Select Option 1 & Option 2
        const select = screen.getByRole('listbox')
        const option1 = screen.getByText('Option 1')
        const option2 = screen.getByText('Option 2')
        expect(option1).toBeInTheDocument()
        expect(option2).toBeInTheDocument()
        expect(select).toBeInTheDocument()

        await user.selectOptions(select, ['Option 1', 'Option 2'])
        expect(select).toHaveValue(['Option 1', 'Option 2'])

        expect(screen.getByRole('option', { name: 'Option 1'}).selected).toBeTruthy()
        expect(screen.getByRole('option', { name: 'Option 1'}).selected).toBe(true)

        expect(screen.getByRole('option', { name: 'Option 2'}).selected).toBeTruthy()
        expect(screen.getByRole('option', { name: 'Option 2'}).selected).toBe(true)

        expect(screen.getByRole('option', { name: 'Option 3'}).selected).toBeFalsy()
        expect(screen.getByRole('option', { name: 'Option 3'}).selected).toBe(false)

        // deselect
        await user.deselectOptions(select, option1)
        expect(select).toHaveValue(['Option 2'])

        // Select
        const option3 = screen.getByText('Option 3')
        await user.selectOptions(select, option3)
        expect(select).toHaveValue(['Option 2', 'Option 3'])
        
    })
});
