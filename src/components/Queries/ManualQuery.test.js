import { render, screen } from "@testing-library/react";
import ManualQuery from "./ManualQuery";

describe('Manual Test', () => {
    test('Header renders correctly', () => {
        // getByRole
        render(<ManualQuery />)
        const headingH1Element = screen.getByRole('heading', { level: 1 })
        expect(headingH1Element).toBeInTheDocument();
    })

    test('Header renders correctly 2', () => {
        // querySelector
        const { container } = render(<ManualQuery />)
        const headingH1 = container.querySelector(".headerOne")
        expect(headingH1).toBeInTheDocument();
    })
});
