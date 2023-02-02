import { render, screen, waitFor } from "@testing-library/react";
import FindByRole from "./FindByRole";

describe('Exercices findByRole', () => {

    test('Button Light renders correctly', async () => {
        render(<FindByRole />)
        const buttonThemeDark = await screen.findByRole('button', { name: 'Light'}, { timeout: 3000})
        expect(buttonThemeDark).toBeInTheDocument()
    });

    test('Check if image is not in the document', async () => {
        render(<FindByRole />)
        // await waitForElementToBeRemoved(() => screen.queryByRole('img'), { timeout: 3000} )
        // const imageElement = screen.queryByRole('img')
        // expect(imageElement).toBeNull(); 

        await waitFor(() => {
            expect(screen.queryByRole('img')).not.toBeInTheDocument()
        }, { timeout: 3000 })
    });
})