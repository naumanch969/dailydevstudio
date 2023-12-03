import React from 'react'

const HoverButton = ({ className, onClick, children }: { className: string, onClick?: () => void, children: React.ReactNode }) => {
    return (
        <button
            onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
            className={`${className} z-[2] transition-all `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default HoverButton