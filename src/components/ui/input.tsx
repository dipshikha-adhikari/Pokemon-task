import { CiSearch } from 'react-icons/ci'
import { useGlobalContext } from '../../context/app-context'

const Input = () => {
    const { setSearchBoxOpen } = useGlobalContext()
    return (
        <div className="flex  items-center">
            <input
                type="text"
                placeholder="Search"
                name=""
                id=""
                className="p-xs outline-none  w-full"
            />{' '}
            <CiSearch
                fontSize={30}
                className="cursor-pointer "
                onClick={() => setSearchBoxOpen(true)}
            />
        </div>
    )
}

export default Input
