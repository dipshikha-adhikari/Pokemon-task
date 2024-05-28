import { fireEvent, render } from '@testing-library/react'
import { useGlobalContext } from '../../context/app-context'
import { Pokemon } from '../../types'
import SuggestionBox from '../ui/suggestion-box'
// Mock the useGlobalContext hook
jest.mock('../../context/app-context', () => ({
    useGlobalContext: jest.fn(),
}))

describe('SuggestionBox Component', () => {
    let mockSetSearchBoxOpen: jest.Mock
    let mockSetSearchText: jest.Mock

    beforeEach(() => {
        mockSetSearchBoxOpen = jest.fn()
        mockSetSearchText = jest.fn()
        ;(useGlobalContext as jest.Mock).mockReturnValue({
            searchText: 'pikachu',
            setSearchText: mockSetSearchText,
            setSearchBoxOpen: mockSetSearchBoxOpen,
        })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    const mockResults: Pokemon[] = [
        { id: 1, name: 'Pikachu', imageUrl: '', types: ['electric'] },
        { id: 2, name: 'Bulbasaur', imageUrl: '', types: ['grass', 'poison'] },
    ]

    it('should render suggestions when results are available', () => {
        const { getByText } = render(
            <SuggestionBox loading={false} results={mockResults} />
        )

        expect(getByText('Pikachu')).toBeInTheDocument()
        expect(getByText('Bulbasaur')).toBeInTheDocument()
    })

    it('should render "No results found!" when no results are available', () => {
        const { getByText } = render(
            <SuggestionBox loading={false} results={[]} />
        )

        expect(getByText('No results found!')).toBeInTheDocument()
    })

    it('should render "Loading..." when loading is true', () => {
        const { getByText } = render(
            <SuggestionBox loading={true} results={[]} />
        )

        expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('should hide the search box when clicking outside of it', () => {
        const { getByText, container } = render(
            <div>
                <div data-testid="outside-element">Outside</div>{' '}
                {/* Element representing outside the suggestion box */}
                <SuggestionBox loading={false} results={mockResults} />
            </div>
        )

        // Simulate click inside the suggestion box
        fireEvent.click(getByText('Pikachu'))
        expect(mockSetSearchBoxOpen).not.toHaveBeenCalled()
        expect(mockSetSearchText).toHaveBeenCalledWith('')

        // Simulate click outside the suggestion box
        const outsideElement = container.querySelector(
            '[data-testid="outside-element"]'
        )
        if (outsideElement) {
            fireEvent.click(outsideElement)
            expect(mockSetSearchBoxOpen).toHaveBeenCalledWith(false)
            expect(mockSetSearchText).toHaveBeenCalledWith('')
        } else {
            throw new Error('Outside element not found')
        }
    })

    it('should not hide the search box when clicking an element with class "search"', () => {
        const {} = render(
            <SuggestionBox loading={false} results={mockResults} />
        )

        // Create an element with class 'search' and append it to the body
        const searchElement = document.createElement('div')
        searchElement.className = 'search'
        document.body.appendChild(searchElement)

        // Simulate click on the element with class 'search'
        fireEvent.mouseDown(searchElement)
        expect(mockSetSearchBoxOpen).not.toHaveBeenCalled()
        expect(mockSetSearchText).not.toHaveBeenCalled()

        // Clean up
        document.body.removeChild(searchElement)
    })
})
