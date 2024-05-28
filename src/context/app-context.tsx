import { createContext, ReactNode, useContext, useState } from 'react'

interface InitialState {
    searchBoxOpen: boolean
    setSearchBoxOpen: (props: boolean) => void
    searchText: string
    setSearchText: (props: string) => void
}

const initialState: InitialState = {
    searchBoxOpen: false,
    setSearchBoxOpen: () => {},
    searchText: '',
    setSearchText: () => {},
}

const AppContext = createContext(initialState)

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [searchBoxOpen, setSearchBoxOpen] = useState(false)
    const [searchText, setSearchText] = useState('')

    return (
        <AppContext.Provider
            value={{
                searchBoxOpen,
                setSearchBoxOpen,
                searchText,
                setSearchText,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
