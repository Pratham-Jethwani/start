export default function BrandInboxPage() {
    return (
        <div className="brand-layout">
            <aside className="brand-sidebar">
                <div className="sidebar-header">
                    <div className="brand-logo-sidebar">
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
                        <span>Resolve360</span>
                    </div>
                    <div className="brand-name-display">
                        <div className="brand-avatar-large">TB</div>
                        <div className="brand-info">
                            <div className="brand-name-text">TechBrand Inc.</div>
                            <div className="brand-plan">Growth Plan</div>
                        </div>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <a href="/brand/dashboard" className="nav-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Dashboard
                    </a>
                    <a href="/brand/inbox" className="nav-item active">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="4" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M3 7H17" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Cases Inbox
                        <span className="nav-badge">3</span>
                    </a>
                    <div className="nav-divider"></div>
                    <a href="/" className="nav-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 17H4C3.4 17 3 16.6 3 16V4C3 3.4 3.4 3 4 3H7M13 14L17 10L13 6M17 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Sign Out
                    </a>
                </nav>
            </aside>

            <main className="brand-main">
                <div className="brand-topbar">
                    <div className="topbar-left">
                        <h1 className="page-title">Cases Inbox</h1>
                    </div>
                    <div className="topbar-right">
                        <button className="icon-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2C7.8 2 6 3.8 6 6V9L4 11V13H16V11L14 9V6C14 3.8 12.2 2 10 2Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 13V14C8 15.1 8.9 16 10 16C11.1 16 12 15.1 12 14V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span className="notification-badge">2</span>
                        </button>
                        <div className="user-avatar">AM</div>
                    </div>
                </div>

                <div className="brand-content">
                    <div className="dashboard-message">
                        <h2>Cases Inbox</h2>
                        <p>Manage and respond to customer cases. Priority cases require response within 24h.</p>
                        <a href="/brand/dashboard" className="btn btn-outline">Back to Dashboard</a>
                    </div>
                </div>
            </main>
        </div>
    )
}
