import { render, screen } from "@testing-library/react"
import { GetAllByTitle } from "./GetAllByTitle"

describe('Test to learn GetAllByTitle', () => {
    it('Should render two paraghraphs with title attribute presentation', () => {
        render(<GetAllByTitle />)
        const paraghraphs = screen.getAllByTitle('presentation')
        expect(paraghraphs.length).toBe(2)
    })
})
