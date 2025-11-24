import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ExplorePage() {
    const [filters, setFilters] = useState({
        status: [] as string[],
        category: [] as string[],
        verification: [] as string[],
    })
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('recent')

    // Mock data
    const cases = [
        {
            id: '1',
            caseNumber: 'R360-4821',
            title: 'Defective wireless earbuds — no response to warranty claim',
            excerpt: 'Purchased these earbuds 3 months ago. Left earbud stopped working after 6 weeks...',
            status: 'resolved',
            category: 'Electronics',
            verification: 'high',
            brand: { name: 'TechBrand Inc.', avatar: 'TB' },
            createdAt: '2 days ago',
            resolutionTime: '3 days',
        },
        {
            id: '2',
            caseNumber: 'R360-4802',
            title: 'Wrong item shipped — still waiting for replacement',
            excerpt: 'Ordered a blue jacket size M, received a red sweater size L. Contacted support...',
            status: 'pending',
            category: 'Shipping',
            verification: 'high',
            brand: { name: 'FashionHub', avatar: 'FH' },
            createdAt: '5 days ago',
            slaRemaining: '18h',
        },
        {
            id: '3',
            caseNumber: 'R360-4789',
            title: 'Subscription auto-renewed despite cancellation',
            excerpt: 'Cancelled my subscription 2 weeks before renewal date. Still got charged...',
            status: 'resolved',
            category: 'Billing',
            verification: 'medium',
            brand: { name: 'StreamCo', avatar: 'SC' },
            createdAt: '1 week ago',
            resolutionTime: '2 days',
        },
    ]

    const toggleFilter = (type: keyof typeof filters, value: string) => {
        setFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter(v => v !== value)
                : [...prev[type], value],
        }))
    }

    return (
        <>
            <Navbar />

            <section className="explore-hero">
                <div className="container">
                    <h1 className="hero-title">Explore Cases</h1>
                    <p className="hero-subtitle">Browse verified consumer disputes and see how brands respond</p>

                    <div className="search-bar">
                        <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M14 14L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search cases by brand, category, or keywords..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <section className="explore-content">
                <div className="container">
                    <div className="explore-layout">
                        {/* Filters Sidebar */}
                        <aside className="filters-sidebar">
                            <div className="filters-header">
                                <h3>Filters</h3>
                                <button className="link-primary">Clear all</button>
                            </div>

                            <div className="filter-group">
                                <div className="filter-title">Status</div>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.status.includes('pending')}
                                        onChange={() => toggleFilter('status', 'pending')}
                                    />
                                    <span>Pending</span>
                                    <span className="filter-count">12</span>
                                </label>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.status.includes('active')}
                                        onChange={() => toggleFilter('status', 'active')}
                                    />
                                    <span>Active</span>
                                    <span className="filter-count">28</span>
                                </label>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.status.includes('resolved')}
                                        onChange={() => toggleFilter('status', 'resolved')}
                                    />
                                    <span>Resolved</span>
                                    <span className="filter-count">847</span>
                                </label>
                            </div>

                            <div className="filter-group">
                                <div className="filter-title">Category</div>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.category.includes('electronics')}
                                        onChange={() => toggleFilter('category', 'electronics')}
                                    />
                                    <span>Electronics</span>
                                    <span className="filter-count">234</span>
                                </label>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.category.includes('shipping')}
                                        onChange={() => toggleFilter('category', 'shipping')}
                                    />
                                    <span>Shipping</span>
                                    <span className="filter-count">189</span>
                                </label>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.category.includes('billing')}
                                        onChange={() => toggleFilter('category', 'billing')}
                                    />
                                    <span>Billing</span>
                                    <span className="filter-count">156</span>
                                </label>
                            </div>

                            <div className="filter-group">
                                <div className="filter-title">Verification</div>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.verification.includes('high')}
                                        onChange={() => toggleFilter('verification', 'high')}
                                    />
                                    <span>High</span>
                                    <span className="filter-count">542</span>
                                </label>
                                <label className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.verification.includes('medium')}
                                        onChange={() => toggleFilter('verification', 'medium')}
                                    />
                                    <span>Medium</span>
                                    <span className="filter-count">287</span>
                                </label>
                            </div>
                        </aside>

                        {/* Results */}
                        <div className="results-main">
                            <div className="results-header">
                                <div>
                                    <h2 className="results-count">887 cases found</h2>
                                    <p className="results-subtitle">Showing verified disputes from the last 30 days</p>
                                </div>
                                <div className="results-sort">
                                    <label>Sort by:</label>
                                    <select
                                        className="sort-select"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="recent">Most Recent</option>
                                        <option value="popular">Most Popular</option>
                                        <option value="resolved">Recently Resolved</option>
                                    </select>
                                </div>
                            </div>

                            <div className="cases-grid">
                                {cases.map((caseItem) => (
                                    <Link key={caseItem.id} to={`/case/${caseItem.id}`} className="case-card">
                                        <div className="case-card-header">
                                            <div className={`status-badge ${caseItem.status}`}>
                                                {caseItem.status === 'resolved' ? (
                                                    <>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <circle cx="8" cy="8" r="6" fill="currentColor" />
                                                            <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        Resolved
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <circle cx="8" cy="8" r="6" fill="currentColor" />
                                                        </svg>
                                                        Pending
                                                    </>
                                                )}
                                            </div>
                                            <div className={`verification-badge ${caseItem.verification}`}>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8 2L9.5 5L13 5.5L10.5 7.8L11.2 11L8 9.3L4.8 11L5.5 7.8L3 5.5L6.5 5L8 2Z" fill="currentColor" />
                                                </svg>
                                                {caseItem.verification === 'high' ? 'High' : 'Medium'} Verification
                                            </div>
                                        </div>

                                        <h3 className="case-card-title">{caseItem.title}</h3>

                                        <div className="case-card-meta">
                                            <span className="meta-item">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <rect x="3" y="4" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M3 6H13" stroke="currentColor" strokeWidth="1.5" />
                                                </svg>
                                                {caseItem.category}
                                            </span>
                                            <span className="meta-item">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                {caseItem.createdAt}
                                            </span>
                                        </div>

                                        <p className="case-card-excerpt">{caseItem.excerpt}</p>

                                        <div className="case-card-footer">
                                            <div className="brand-info">
                                                <div className="brand-avatar">{caseItem.brand.avatar}</div>
                                                <span className="brand-name">{caseItem.brand.name}</span>
                                            </div>
                                            {caseItem.status === 'resolved' ? (
                                                <div className="resolution-time">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                    Resolved in {caseItem.resolutionTime}
                                                </div>
                                            ) : (
                                                <div className="sla-timer">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                    {caseItem.slaRemaining} left
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="load-more">
                                <button className="btn btn-outline">Load More Cases</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
