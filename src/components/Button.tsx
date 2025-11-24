import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-light'
    size?: 'small' | 'medium' | 'large'
    children: ReactNode
}

export default function Button({
    variant = 'primary',
    size = 'medium',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const variantClass = `btn-${variant}`
    const sizeClass = size !== 'medium' ? `btn-${size}` : ''

    return (
        <button
            className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    )
}
