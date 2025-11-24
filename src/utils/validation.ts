// Form validation utilities

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function validatePassword(password: string): {
    isValid: boolean
    strength: 'weak' | 'medium' | 'strong'
    errors: string[]
} {
    const errors: string[] = []
    let strength: 'weak' | 'medium' | 'strong' = 'weak'

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters')
    }

    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain an uppercase letter')
    }

    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain a lowercase letter')
    }

    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain a number')
    }

    // Determine strength
    if (errors.length === 0) {
        strength = 'strong'
    } else if (errors.length <= 2) {
        strength = 'medium'
    }

    return {
        isValid: errors.length === 0,
        strength,
        errors,
    }
}

export function validateRequired(value: string, fieldName: string): string | null {
    if (!value || value.trim() === '') {
        return `${fieldName} is required`
    }
    return null
}

export function validateFileSize(file: File, maxSizeMB: number): boolean {
    const maxSizeBytes = maxSizeMB * 1024 * 1024
    return file.size <= maxSizeBytes
}

export function validateFileType(file: File, allowedTypes: string[]): boolean {
    return allowedTypes.includes(file.type)
}
