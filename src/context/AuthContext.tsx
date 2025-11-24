import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '../types'

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    signup: (name: string, email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        // Check for stored auth token
        const token = localStorage.getItem('auth_token')
        const storedUser = localStorage.getItem('user')

        if (token && storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const login = async (email: string, password: string) => {
        // Simulate API call
        const mockUser: User = {
            id: '1',
            name: 'John Doe',
            email,
            role: 'consumer',
        }

        localStorage.setItem('auth_token', 'demo_token')
        localStorage.setItem('user', JSON.stringify(mockUser))
        setUser(mockUser)
    }

    const logout = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
        setUser(null)
    }

    const signup = async (name: string, email: string, password: string) => {
        // Simulate API call
        const mockUser: User = {
            id: '1',
            name,
            email,
            role: 'consumer',
        }

        localStorage.setItem('auth_token', 'demo_token')
        localStorage.setItem('user', JSON.stringify(mockUser))
        setUser(mockUser)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                logout,
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
