import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context/app-context'
import { Pokemon } from '../../types'
import ContentLayout from '../layout/content-layout'

const SuggestionBox = ({
    loading,
    results,
}: {
    loading: boolean
    results: Pokemon[]
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const { searchText, setSearchText, setSearchBoxOpen } = useGlobalContext()

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (!searchText) return
            if ((e.target as Element).classList.contains('search')) return
            if (ref.current) {
                if (!ref.current.contains(e.target as Element)) {
                    setSearchBoxOpen(false)
                    setSearchText('')
                }
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => document.removeEventListener('click', handleClickOutside)
    }, [ref, searchText, setSearchBoxOpen, setSearchText])

    return (
        <section className="absolute left-0 top-[9vh] sm:top-[10vh]  w-full">
            <ContentLayout>
                {!loading && results.length > 0 && (
                    <div
                        ref={ref}
                        className=" p-2 border-sm search bg-white max-w-3xl border-gray-200 mx-auto grid gap-2"
                    >
                        {results.map((item) => {
                            return (
                                <a
                                    key={item.name}
                                    href={item.name}
                                    className="font-bold capitalize hover:text-green-700"
                                    onClick={() => setSearchText('')}
                                >
                                    {item.name}
                                </a>
                            )
                        })}
                    </div>
                )}
                {loading && (
                    <div className="text-center bg-white">Loading...</div>
                )}
                {!loading && results.length === 0 && (
                    <div className="text-center py-md bg-white">
                        No results found!
                    </div>
                )}
            </ContentLayout>
        </section>
    )
}

export default SuggestionBox
