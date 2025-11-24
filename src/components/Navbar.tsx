import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { isAuthenticated, user, logout } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" fill="url(#logo-gradient)" />
                        <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="white" />
                        <defs>
                            <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                                <stop offset="0%" stopColor="#0B63FF" />
                                <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="logo-text">Resolve360</span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinks">
                    <Link to="/#how-it-works" className="nav-link">How it works</Link>
                    <Link to="/explore" className="nav-link">Explore</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                </div>

                <div className="nav-actions">
                    {isAuthenticated ? (
                        <>
                            <Link to="/my-cases" className="btn btn-secondary">My Cases</Link>
                            <div className="user-menu">
                                <div className="user-avatar">{user?.name.charAt(0) || 'U'}</div>
                                <div className="user-dropdown">
                                    <Link to="/my-cases">My Cases</Link>
                                    <Link to="/submit-case">Submit Case</Link>
                                    <button onClick={logout}>Sign Out</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/brand/dashboard" className="btn btn-secondary">For Brands</Link>
                            <Link to="/submit-case" className="btn btn-primary">Get Help</Link>
                            <Link to="/signin" className="nav-link">Sign in</Link>
                        </>
                    )}
                </div>

                <button
                    className="nav-toggle"
                    id="navToggle"
                    aria-label="Toggle navigation"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
