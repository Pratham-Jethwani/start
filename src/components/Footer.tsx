import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="14" fill="url(#footer-logo-gradient)" />
                                <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="white" />
                                <defs>
                                    <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32">
                                        <stop offset="0%" stopColor="#0B63FF" />
                                        <stop offset="100%" stopColor="#06B6D4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>Resolve360</span>
                        </div>
                        <p className="footer-tagline">Transparent dispute resolution for the modern consumer.</p>
                        <div className="footer-social">
                            <a href="#" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0020 3.92a8.18 8.18 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6 1 4.1 4.1 0 00-6.99 3.74 11.65 11.65 0 01-8.46-4.29 4.1 4.1 0 001.27 5.48A4.07 4.07 0 01.8 7.7v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M18.52 0H1.48C.66 0 0 .65 0 1.45v17.1C0 19.35.66 20 1.48 20h17.04c.82 0 1.48-.65 1.48-1.45V1.45C20 .65 19.34 0 18.52 0zM5.93 17.04H2.96V7.5h2.97v9.54zM4.45 6.2a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zM17.04 17.04h-2.96v-4.64c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.72H7.8V7.5h2.85v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.54 1.97 3.54 4.53v5.25z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Product</h4>
                        <Link to="/#how-it-works">How it works</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/explore">Explore cases</Link>
                        <a href="#">Trust scores</a>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">For Brands</h4>
                        <Link to="/brand/dashboard">Brand Dashboard</Link>
                        <a href="#">Integrations</a>
                        <a href="#">API docs</a>
                        <a href="#">Case studies</a>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Resources</h4>
                        <a href="#">Help center</a>
                        <a href="#">FAQ</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact us</a>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Legal</h4>
                        <a href="#">Terms of service</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Takedown policy</a>
                        <a href="#">Cookie policy</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Resolve360. All rights reserved.</p>
                    <div className="footer-newsletter">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
