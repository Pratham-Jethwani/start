import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { ToastMessage } from '../types'

interface ToastContextType {
    toasts: ToastMessage[]
    showToast: (message: string, type?: ToastMessage['type'], duration?: number) => void
    removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<ToastMessage[]>([])

    const showToast = useCallback(
        (message: string, type: ToastMessage['type'] = 'info', duration = 3000) => {
            const id = Math.random().toString(36).substring(7)
            const toast: ToastMessage = { id, message, type, duration }

            setToasts((prev) => [...prev, toast])

            if (duration > 0) {
                setTimeout(() => {
                    removeToast(id)
                }, duration)
            }
        },
        []
    )

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} onRemove={removeToast} />
        </ToastContext.Provider>
    )
}

function ToastContainer({
    toasts,
    onRemove,
}: {
    toasts: ToastMessage[]
    onRemove: (id: string) => void
}) {
    if (toasts.length === 0) return null

    return (
        <div
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
            }}
        >
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    style={{
                        padding: '16px 24px',
                        borderRadius: '12px',
                        background: getToastColor(toast.type),
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        minWidth: '300px',
                        animation: 'slideIn 0.3s ease-out',
                    }}
                >
                    <span style={{ flex: 1 }}>{toast.message}</span>
                    <button
                        onClick={() => onRemove(toast.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            padding: 0,
                            lineHeight: 1,
                        }}
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    )
}

function getToastColor(type: ToastMessage['type']): string {
    switch (type) {
        case 'success':
            return '#10B981'
        case 'error':
            return '#EF4444'
        case 'warning':
            return '#F59E0B'
        case 'info':
        default:
            return '#0B63FF'
    }
}

export function useToast() {
    const context = useContext(ToastContext)
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}
