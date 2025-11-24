import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LandingPage() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Trusted by 10,000+ consumers</span>
                        </div>
                        <h1 className="hero-title">
                            Get your problem fixed. <span className="gradient-text">Publicly. Verified.</span>
                        </h1>
                        <p className="hero-subtitle">
                            The transparent platform that holds brands accountable. Submit your case, we verify it, and help you get resolution—all in the open.
                        </p>

                        <div className="hero-cta">
                            <Link to="/submit-case" className="btn btn-primary btn-large">
                                Submit a Case — Free
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link to="/brand/dashboard" className="btn btn-outline btn-large">For Brands</Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-value">12,847</div>
                                <div className="stat-label">Cases Resolved</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-value">250+</div>
                                <div className="stat-label">Brands Onboarded</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-value">18 hrs</div>
                                <div className="stat-label">Avg Response Time</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="case-preview-card">
                            <div className="case-header">
                                <div className="case-status verified">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.5 8L7.5 10L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Verified Case
                                </div>
                                <div className="case-id">#R360-4821</div>
                            </div>

                            <h3 className="case-title">Defective wireless earbuds — no response to warranty claim</h3>

                            <div className="case-meta">
                                <span className="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <rect x="3" y="4" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M3 6H13" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    Electronics
                                </span>
                                <span className="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    2 days ago
                                </span>
                            </div>

                            <div className="case-thread">
                                <div className="thread-message consumer">
                                    <div className="message-avatar">JD</div>
                                    <div className="message-content">
                                        <div className="message-author">John D. <span className="author-badge">Consumer</span></div>
                                        <p>Purchased these earbuds 3 months ago. Left earbud stopped working after 6 weeks. Contacted support twice with no response.</p>
                                    </div>
                                </div>

                                <div className="thread-message brand">
                                    <div className="message-avatar brand-avatar">TB</div>
                                    <div className="message-content">
                                        <div className="message-author">TechBrand Support <span className="author-badge brand">Brand</span></div>
                                        <p>We apologize for the delay. We've issued a full refund and are sending a replacement unit. Tracking: TB847291</p>
                                    </div>
                                </div>

                                <div className="resolution-banner">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="8" fill="#10B981" />
                                        <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Resolved — Refunded & Replaced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Strip */}
            <section className="trust-strip">
                <div className="container">
                    <p className="trust-label">Trusted by leading brands</p>
                    <div className="trust-logos">
                        <div className="trust-logo">TechBrand</div>
                        <div className="trust-logo">ShopCo</div>
                        <div className="trust-logo">StyleHub</div>
                        <div className="trust-logo">GadgetPro</div>
                        <div className="trust-logo">HomeEssentials</div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works" id="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How it works</h2>
                        <p className="section-subtitle">Three simple steps to get your problem resolved</p>
                    </div>

                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-icon submit">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6V26M16 26L22 20M16 26L10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="step-number">01</div>
                            <h3 className="step-title">Submit Your Case</h3>
                            <p className="step-description">Upload your invoice, receipts, and evidence. Our AI extracts and verifies the details automatically.</p>
                            <div className="step-benefit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5 8L7 10L11 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Takes less than 3 minutes</span>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon verify">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 4L20 8L28 6L26 14L30 18L26 22L28 30L20 28L16 32L12 28L4 30L6 22L2 18L6 14L4 6L12 8L16 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                                    <path d="M11 16L14.5 19.5L21 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="step-number">02</div>
                            <h3 className="step-title">We Verify</h3>
                            <p className="step-description">Our verification engine checks authenticity using OCR, metadata analysis, and human review when needed.</p>
                            <div className="step-benefit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5 8L7 10L11 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>95% verified within 24 hours</span>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon resolve">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2.5" />
                                    <path d="M10 16L14 20L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="step-number">03</div>
                            <h3 className="step-title">Get Resolution</h3>
                            <p className="step-description">We notify the brand publicly. They respond on the thread. Everything is transparent and tracked.</p>
                            <div className="step-benefit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5 8L7 10L11 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>87% resolved within 48 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Built for transparency and trust</h2>
                        <p className="section-subtitle">Everything you need to resolve disputes fairly</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">AI-Powered Verification</h3>
                            <p className="feature-description">OCR, metadata analysis, and fraud detection ensure every case is authentic before going public.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Public Threads</h3>
                            <p className="feature-description">Every conversation is visible. Brands respond publicly, building accountability and trust.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Trust Scores</h3>
                            <p className="feature-description">Brands earn trust scores based on response times, resolution rates, and customer satisfaction.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M9 9H15M9 13H15M9 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Smart Integrations</h3>
                            <p className="feature-description">Connect Shopify, Zendesk, or use our API. Sync orders and automate responses seamlessly.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">SLA Tracking</h3>
                            <p className="feature-description">Real-time countdown timers keep brands accountable to their response commitments.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Mediation Support</h3>
                            <p className="feature-description">Escalate complex cases to our mediation team for expert, neutral resolution assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="social-proof">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Real resolutions, real people</h2>
                        <p className="section-subtitle">See how Resolve360 helped consumers get results</p>
                    </div>

                    <div className="case-studies-grid">
                        <div className="case-study-card">
                            <div className="case-study-header">
                                <div className="case-study-status resolved">Resolved</div>
                                <div className="case-study-time">3 days</div>
                            </div>
                            <h3 className="case-study-title">"Got a full refund after 2 months of ignored emails"</h3>
                            <p className="case-study-excerpt">I'd been trying to return a defective laptop for weeks. Within 48 hours of posting on Resolve360, the brand responded and processed my refund.</p>
                            <div className="case-study-footer">
                                <div className="case-study-author">
                                    <div className="author-avatar">SK</div>
                                    <div>
                                        <div className="author-name">Sarah K.</div>
                                        <div className="author-location">Mumbai, India</div>
                                    </div>
                                </div>
                                <a href="#" className="case-study-link">View case →</a>
                            </div>
                        </div>

                        <div className="case-study-card">
                            <div className="case-study-header">
                                <div className="case-study-status resolved">Resolved</div>
                                <div className="case-study-time">1 day</div>
                            </div>
                            <h3 className="case-study-title">"Replacement sent overnight — transparency works"</h3>
                            <p className="case-study-excerpt">My order arrived damaged. I submitted proof, and the seller responded publicly within 24 hours with a replacement and apology.</p>
                            <div className="case-study-footer">
                                <div className="case-study-author">
                                    <div className="author-avatar">RP</div>
                                    <div>
                                        <div className="author-name">Raj P.</div>
                                        <div className="author-location">Bangalore, India</div>
                                    </div>
                                </div>
                                <a href="#" className="case-study-link">View case →</a>
                            </div>
                        </div>

                        <div className="case-study-card">
                            <div className="case-study-header">
                                <div className="case-study-status resolved">Resolved</div>
                                <div className="case-study-time">5 days</div>
                            </div>
                            <h3 className="case-study-title">"Finally got warranty honored after public case"</h3>
                            <p className="case-study-excerpt">The brand kept denying my warranty claim. After I posted verified proof on Resolve360, they honored it and sent a new unit.</p>
                            <div className="case-study-footer">
                                <div className="case-study-author">
                                    <div className="author-avatar">AM</div>
                                    <div>
                                        <div className="author-name">Anita M.</div>
                                        <div className="author-location">Delhi, India</div>
                                    </div>
                                </div>
                                <a href="#" className="case-study-link">View case →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2 className="cta-title">Ready to get your problem resolved?</h2>
                            <p className="cta-subtitle">Join thousands of consumers who got results through transparency</p>
                            <div className="cta-buttons">
                                <Link to="/submit-case" className="btn btn-primary btn-large">Submit a Case — Free</Link>
                                <Link to="/explore" className="btn btn-outline-light btn-large">Browse Cases</Link>
                            </div>
                        </div>
                        <div className="cta-visual">
                            <div className="floating-badge badge-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" fill="#10B981" />
                                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Verified</span>
                            </div>
                            <div className="floating-badge badge-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 2L12.5 7L18 7.75L14 11.5L15 17L10 14.25L5 17L6 11.5L2 7.75L7.5 7L10 2Z" fill="#FBBF24" />
                                </svg>
                                <span>Trust Score: 92</span>
                            </div>
                            <div className="floating-badge badge-3">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="7" stroke="#0B63FF" strokeWidth="2" />
                                    <path d="M10 6V10L13 12" stroke="#0B63FF" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span>18h response</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
