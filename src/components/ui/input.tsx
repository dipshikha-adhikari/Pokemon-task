import { useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useGlobalContext } from '../../context/app-context'
import { useDebounce } from '../../hooks/use-debounce'

const Input = ({
    text,
    setText,
}: {
    text: string
    setText: (props: string) => void
}) => {
    const { setSearchBoxOpen, setSearchText } = useGlobalContext()
    const { debouncedText } = useDebounce(text, 300)

    useEffect(() => {
        setSearchText(debouncedText)
    }, [debouncedText])

    return (
        <div className="flex relative px-sm search items-center">
            <input
                type="text"
                placeholder="Search"
                name=""
                id=""
                value={text}
                className="p-xs h-full outline-none  search w-full"
                onChange={(e) => setText(e.target.value)}
            />{' '}
            <CiSearch
                fontSize={25}
                className="cursor-pointer  font-bold search  "
                onClick={() => setSearchBoxOpen(true)}
            />
        </div>
    )
}

export default Input
