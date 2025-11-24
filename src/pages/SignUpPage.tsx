import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { validateEmail, validatePassword } from '../utils/validation'

export default function SignUpPage() {
    const navigate = useNavigate()
    const { signup } = useAuth()
    const { showToast } = useToast()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    })
    const [loading, setLoading] = useState(false)

    const passwordValidation = validatePassword(formData.password)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!formData.name) {
            showToast('Please enter your name', 'error')
            return
        }

        if (!validateEmail(formData.email)) {
            showToast('Please enter a valid email', 'error')
            return
        }

        if (!passwordValidation.isValid) {
            showToast(passwordValidation.errors[0], 'error')
            return
        }

        if (formData.password !== formData.confirmPassword) {
            showToast('Passwords do not match', 'error')
            return
        }

        if (!formData.acceptTerms) {
            showToast('Please accept the terms and conditions', 'error')
            return
        }

        setLoading(true)
        try {
            await signup(formData.name, formData.email, formData.password)
            showToast('Account created successfully!', 'success')
            navigate('/my-cases')
        } catch (error) {
            showToast('Failed to create account', 'error')
        } finally {
            setLoading(false)
        }
    }

    const getPasswordStrengthColor = () => {
        switch (passwordValidation.strength) {
            case 'strong': return '#10B981'
            case 'medium': return '#F59E0B'
            case 'weak': return '#EF4444'
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-branding">
                <Link to="/" className="auth-logo">
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" fill="url(#auth-logo-gradient)" />
                        <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="white" />
                        <defs>
                            <linearGradient id="auth-logo-gradient" x1="0" y1="0" x2="32" y2="32">
                                <stop offset="0%" stopColor="#0B63FF" />
                                <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>Resolve360</span>
                </Link>
                <h1 className="auth-title">Get started</h1>
                <p className="auth-subtitle">Create your account and start resolving disputes transparently</p>
            </div>

            <div className="auth-form-container">
                <div className="auth-form-card">
                    <h2 className="form-title">Create your account</h2>

                    <div className="social-auth">
                        <button className="social-btn google">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.8 10.2c0-.7-.1-1.4-.2-2H10v3.8h5.5c-.2 1.2-1 2.2-2.1 2.9v2.5h3.4c2-1.8 3-4.5 3-7.2z" fill="#4285F4" />
                                <path d="M10 20c2.7 0 5-1 6.6-2.6l-3.4-2.5c-.9.6-2.1 1-3.2 1-2.5 0-4.6-1.7-5.3-4H1.3v2.6C2.9 17.9 6.2 20 10 20z" fill="#34A853" />
                                <path d="M4.7 12c-.4-1.2-.4-2.5 0-3.7V5.7H1.3c-1.3 2.5-1.3 5.5 0 8l3.4-2.6z" fill="#FBBC04" />
                                <path d="M10 4c1.4 0 2.6.5 3.6 1.4l2.7-2.7C14.5 1.1 12.3 0 10 0 6.2 0 2.9 2.1 1.3 5.4l3.4 2.6C5.4 5.7 7.5 4 10 4z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                        <button className="social-btn apple">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M15.5 10.8c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.8-3.2-.8-1.6 0-3.1 1-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.1 2.9-2.3.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.4-.9-2.4-3.6M13.3 3.8c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4" />
                            </svg>
                            Continue with Apple
                        </button>
                    </div>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                            {formData.password && (
                                <div className="password-strength">
                                    <div className="strength-bar">
                                        <div
                                            className="strength-fill"
                                            style={{
                                                width: passwordValidation.strength === 'strong' ? '100%' :
                                                    passwordValidation.strength === 'medium' ? '66%' : '33%',
                                                background: getPasswordStrengthColor()
                                            }}
                                        />
                                    </div>
                                    <span className="strength-label" style={{ color: getPasswordStrengthColor() }}>
                                        {passwordValidation.strength.charAt(0).toUpperCase() + passwordValidation.strength.slice(1)}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-input"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                required
                            />
                        </div>

                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={formData.acceptTerms}
                                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                            />
                            I agree to the <a href="#" className="link-primary">Terms of Service</a> and <a href="#" className="link-primary">Privacy Policy</a>
                        </label>

                        <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
                            {loading ? 'Creating account...' : 'Create account'}
                        </button>
                    </form>

                    <p className="auth-footer">
                        Already have an account? <Link to="/signin" className="link-primary">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
