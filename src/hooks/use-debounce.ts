import { useEffect, useState } from 'react'

export const useDebounce = (text: string, delay: number) => {
    const [debouncedText, setDebouncedText] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedText(text)
        }, delay)

        return () => clearTimeout(timeout)
    }, [text])

    return { debouncedText }
}
