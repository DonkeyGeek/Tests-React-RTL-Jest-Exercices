import { render, screen } from "@testing-library/react";
import QueryByRole from "./QueryByRole";

describe('GetBy Vs QueryBy', () => {

  test('Buttons render correctly', () => {
      render(<QueryByRole />)
      const buttonThemeDark = screen.getByRole('button', { name: 'Dark'})
      expect(buttonThemeDark).toBeInTheDocument()

      const buttonThemeLight = screen.queryByRole('button', { name: 'Light'})
      console.log(buttonThemeLight) // NULL
      // expect(buttonThemeLight).not.toBeInTheDocument()
      // expect(buttonThemeLight).toBeFalsy()
      expect(buttonThemeLight).not.toBeTruthy()
  });
})
