import { RefObject, useEffect, useState } from 'react'

export const useIntersectionObserver = (ref: RefObject<HTMLDivElement>) => {
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsInView(true)
            } else {
                setIsInView(false)
            }
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref])

    return { isInView }
}
