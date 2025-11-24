import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import './styles/global.css'
import './styles/auth.css'
import './styles/pricing.css'
import './styles/dashboard.css'
import './styles/explore.css'
import './styles/case-detail.css'
import './styles/submit-case.css'
import './styles/brand-dashboard.css'
import './styles/enhanced-forms.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ToastProvider>
                    <App />
                </ToastProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
