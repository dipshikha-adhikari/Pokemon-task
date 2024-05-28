import { CSSProperties, ReactNode } from 'react'

interface ContentProps {
    style?: CSSProperties
    children: ReactNode
}

const ContentLayout = ({ style, children }: ContentProps) => {
    return (
        <div
            className="max-w-7xl px-sm md:px-md lg:px-xl mx-auto"
            style={style}
        >
            {children}
        </div>
    )
}

export default ContentLayout
