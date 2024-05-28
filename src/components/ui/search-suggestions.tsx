import { useEffect, useState } from 'react'
import { getSearchSuggestions } from '../../api/get-search-suggestions'
import { useGlobalContext } from '../../context/app-context'
import SuggestionBox from './suggestion-box'

const SearchSuggestions = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const { searchText } = useGlobalContext()

    useEffect(() => {
        const getFilteredResults = async () => {
            try {
                setLoading(true)
                const result = await getSearchSuggestions(searchText, 100)
                setResults(result)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                throw err
            }
        }
        getFilteredResults()
    }, [searchText])

    return <SuggestionBox loading={loading} results={results} />
}

export default SearchSuggestions
