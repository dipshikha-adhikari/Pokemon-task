import { CiSearch } from 'react-icons/ci'
import { LiaTimesSolid } from 'react-icons/lia'
import { useGlobalContext } from '../../context/app-context'
import Input from './input'
import SearchSuggestions from './search-suggestions'
import { useState } from 'react'

const SearchBox = () => {
    const [text, setText] = useState<string>('')
    return (
        <>
            <SearchBoxMobile text={text} setText={setText} />
            <SearchBoxDesktop text={text} setText={setText} />
        </>
    )
}

export default SearchBox

const SearchBoxMobile = ({
    text,
    setText,
}: {
    text: string
    setText: (props: string) => void
}) => {
    const { setSearchBoxOpen, searchBoxOpen, searchText } = useGlobalContext()

    return (
        <div className="search">
            <CiSearch
                fontSize={25}
                className="cursor-pointer  md:hidden search"
                onClick={() => setSearchBoxOpen(true)}
            />
            {searchBoxOpen && (
                <section className="absolute md:hidden  search p-xs left-0 top-0 w-full bg-white">
                    <div className=" px-1 flex search items-center  border-sm border-gray-300  rounded-sm">
                        <LiaTimesSolid
                            fontSize={25}
                            className="cursor-pointer text-gray-500"
                            onClick={() => {
                                setSearchBoxOpen(false)
                                setText('')
                            }}
                        />
                        <div className="w-full">
                            <Input text={text} setText={setText} />
                        </div>
                    </div>
                </section>
            )}
            {searchBoxOpen && searchText && (
                <div className="md:hidden">
                    <SearchSuggestions />
                </div>
            )}
        </div>
    )
}

const SearchBoxDesktop = ({
    text,
    setText,
}: {
    text: string
    setText: (props: string) => void
}) => {
    const { searchText } = useGlobalContext()
    return (
        <div className="border-sm border-gray-400 rounded-md search hidden md:block">
            <Input text={text} setText={setText} />
            {searchText && <SearchSuggestions />}
        </div>
    )
}
