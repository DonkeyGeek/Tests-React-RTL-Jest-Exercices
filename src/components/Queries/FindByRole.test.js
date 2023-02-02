import { render, screen } from "@testing-library/react";
import FindByRole from "./FindByRole";

describe('Exercices findByRole', () => {

  test('Buttons render correctly', async () => {
      render(<FindByRole />)
      const buttonThemeDark = await screen.findByRole('button', { name: 'Light'}, { timeout: 3000})
      expect(buttonThemeDark).toBeInTheDocument()
  });
})