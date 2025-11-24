export default function BrandDashboardPage() {
    const stats = {
        activeCases: 3,
        resolutionRate: 94,
        avgResponseTime: '14h',
        trustScore: 4.8,
    }

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
                    <a href="/brand/dashboard" className="nav-item active">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Dashboard
                    </a>
                    <a href="/brand/inbox" className="nav-item">
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
                        <h1 className="page-title">Dashboard</h1>
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
                    <div className="kpi-grid">
                        <div className="kpi-card">
                            <div className="kpi-header">
                                <div className="kpi-icon active">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="kpi-trend up">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    12%
                                </div>
                            </div>
                            <div className="kpi-value">{stats.activeCases}</div>
                            <div className="kpi-label">Active Cases</div>
                            <div className="kpi-sublabel">2 need response within 24h</div>
                        </div>

                        <div className="kpi-card">
                            <div className="kpi-header">
                                <div className="kpi-icon resolved">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="kpi-trend up">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    8%
                                </div>
                            </div>
                            <div className="kpi-value">{stats.resolutionRate}%</div>
                            <div className="kpi-label">Resolution Rate</div>
                            <div className="kpi-sublabel">Above industry avg (87%)</div>
                        </div>

                        <div className="kpi-card">
                            <div className="kpi-header">
                                <div className="kpi-icon time">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 7V12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="kpi-trend down">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    18%
                                </div>
                            </div>
                            <div className="kpi-value">{stats.avgResponseTime}</div>
                            <div className="kpi-label">Avg Response Time</div>
                            <div className="kpi-sublabel">Target: 24h SLA</div>
                        </div>

                        <div className="kpi-card">
                            <div className="kpi-header">
                                <div className="kpi-icon trust">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L4 6V11C4 16 8 20 12 22C16 20 20 16 20 11V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="kpi-trend up">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    5%
                                </div>
                            </div>
                            <div className="kpi-value">{stats.trustScore}</div>
                            <div className="kpi-label">Trust Score</div>
                            <div className="kpi-sublabel">Based on 127 resolutions</div>
                        </div>
                    </div>

                    <div className="dashboard-message">
                        <h2>Brand Dashboard</h2>
                        <p>Monitor your cases, track KPIs, and manage your reputation.</p>
                        <a href="/brand/inbox" className="btn btn-primary">View Cases Inbox</a>
                    </div>
                </div>
            </main>
        </div>
    )
}
