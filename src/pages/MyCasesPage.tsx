import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { formatDate } from '../utils/formatters'

export default function MyCasesPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'active' | 'resolved'>('all')
    const [searchQuery, setSearchQuery] = useState('')

    // Mock data - replace with real API call
    const cases = [
        {
            id: '1',
            caseNumber: 'R360-2847',
            title: 'Defective wireless earbuds — no response to warranty claim',
            status: 'active',
            category: 'Electronics',
            brand: 'TechBrand Inc.',
            createdAt: '2025-01-20T10:00:00Z',
            lastUpdate: '2025-01-22T14:30:00Z',
            priority: 'high',
            slaRemaining: '18h',
        },
        {
            id: '2',
            caseNumber: 'R360-2831',
            title: 'Subscription charged after cancellation',
            status: 'active',
            category: 'Billing',
            brand: 'StreamService',
            createdAt: '2025-01-18T09:00:00Z',
            lastUpdate: '2025-01-21T16:00:00Z',
            priority: 'medium',
            slaRemaining: '1 day',
        },
        {
            id: '3',
            caseNumber: 'R360-2798',
            title: 'Wrong size delivered — exchange processed',
            status: 'resolved',
            category: 'Shipping',
            brand: 'FashionHub',
            createdAt: '2025-01-15T11:00:00Z',
            lastUpdate: '2025-01-19T10:00:00Z',
            priority: 'low',
            resolution: 'Exchanged',
        },
    ]

    const filteredCases = cases.filter(c => {
        if (activeTab !== 'all' && c.status !== activeTab) return false
        if (searchQuery && !c.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
        return true
    })

    const stats = {
        total: cases.length,
        active: cases.filter(c => c.status === 'active').length,
        resolved: cases.filter(c => c.status === 'resolved').length,
    }

    return (
        <>
            <Navbar />

            <div className="dashboard-layout">
                <div className="dashboard-header">
                    <div className="container">
                        <h1 className="page-title">My Cases</h1>
                        <Link to="/submit-case" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Submit New Case
                        </Link>
                    </div>
                </div>

                <div className="dashboard-content">
                    <div className="container">
                        {/* Stats */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon total">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="stat-value">{stats.total}</div>
                                <div className="stat-label">Total Cases</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon active">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="stat-value">{stats.active}</div>
                                <div className="stat-label">Active Cases</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon resolved">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="stat-value">{stats.resolved}</div>
                                <div className="stat-label">Resolved Cases</div>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="cases-filters">
                            <div className="filter-tabs">
                                <button
                                    className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('all')}
                                >
                                    All Cases
                                </button>
                                <button
                                    className={`filter-tab ${activeTab === 'active' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('active')}
                                >
                                    Active ({stats.active})
                                </button>
                                <button
                                    className={`filter-tab ${activeTab === 'resolved' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('resolved')}
                                >
                                    Resolved ({stats.resolved})
                                </button>
                            </div>

                            <div className="search-box">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M14 14L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search cases..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Cases List */}
                        <div className="cases-list">
                            {filteredCases.length === 0 ? (
                                <div className="empty-state">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                        <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 20H56" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    <h3>No cases found</h3>
                                    <p>Try adjusting your filters or submit a new case</p>
                                    <Link to="/submit-case" className="btn btn-primary">Submit New Case</Link>
                                </div>
                            ) : (
                                filteredCases.map((caseItem) => (
                                    <Link
                                        key={caseItem.id}
                                        to={`/case/${caseItem.id}`}
                                        className={`case-item ${caseItem.status}`}
                                    >
                                        <div className="case-item-header">
                                            <div className="case-status-badge">
                                                {caseItem.status === 'active' ? (
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="6" fill="#F59E0B" />
                                                    </svg>
                                                ) : (
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="6" fill="#10B981" />
                                                        <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                                <span>{caseItem.status === 'active' ? 'Active' : 'Resolved'}</span>
                                            </div>
                                            <div className="case-number">{caseItem.caseNumber}</div>
                                        </div>

                                        <h3 className="case-item-title">{caseItem.title}</h3>

                                        <div className="case-item-meta">
                                            <span className="meta-item">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <rect x="3" y="4" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M3 6H13" stroke="currentColor" strokeWidth="1.5" />
                                                </svg>
                                                {caseItem.category}
                                            </span>
                                            <span className="meta-item">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M2 14C2 11.8 4.7 10 8 10C11.3 10 14 11.8 14 14" stroke="currentColor" strokeWidth="1.5" />
                                                </svg>
                                                {caseItem.brand}
                                            </span>
                                            <span className="meta-item">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                {formatDate(caseItem.createdAt)}
                                            </span>
                                        </div>

                                        <div className="case-item-footer">
                                            <div className="last-update">
                                                Last updated {formatDate(caseItem.lastUpdate)}
                                            </div>
                                            {caseItem.status === 'active' && caseItem.slaRemaining && (
                                                <div className="sla-timer">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                    {caseItem.slaRemaining} left to respond
                                                </div>
                                            )}
                                            {caseItem.status === 'resolved' && caseItem.resolution && (
                                                <div className="resolution-badge">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="6" fill="#10B981" />
                                                        <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {caseItem.resolution}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
