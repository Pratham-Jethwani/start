import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { formatDate } from '../utils/formatters'

export default function CaseDetailPage() {
    const { id } = useParams()

    // Mock data - replace with API call
    const caseData = {
        id,
        caseNumber: 'R360-4821',
        title: 'Defective wireless earbuds — no response to warranty claim',
        status: 'resolved',
        category: 'Electronics',
        verification: 'high',
        createdAt: '2025-01-20T10:00:00Z',
        consumer: { name: 'John D.', avatar: 'JD' },
        brand: { name: 'TechBrand Inc.', avatar: 'TB' },
        description: 'I purchased these wireless earbuds 3 months ago from your official store. After just 6 weeks of normal use, the left earbud completely stopped working. I\'ve contacted your support team twice via email with no response. This is clearly a manufacturing defect covered under warranty.',
        evidence: [
            { id: '1', type: 'receipt', url: '/receipt.pdf', verified: true },
            { id: '2', type: 'image', url: '/earbuds.jpg', verified: true },
        ],
        messages: [
            {
                id: '1',
                author: 'John D.',
                authorType: 'consumer',
                content: 'Purchased these earbuds 3 months ago. Left earbud stopped working after 6 weeks. Contacted support twice with no response.',
                timestamp: '2025-01-20T10:00:00Z',
            },
            {
                id: '2',
                authorType: 'system',
                content: 'Case verified. Evidence authenticated. Brand has been notified.',
                timestamp: '2025-01-20T14:00:00Z',
            },
            {
                id: '3',
                author: 'TechBrand Support',
                authorType: 'brand',
                content: 'We apologize for the delay in responding. We\'ve reviewed your case and confirmed the defect. We\'re issuing a full refund and sending a replacement unit. Tracking: TB847291',
                timestamp: '2025-01-22T09:00:00Z',
            },
        ],
        resolution: {
            type: 'refunded',
            description: 'Full refund issued + replacement sent',
            resolvedAt: '2025-01-22T09:00:00Z',
        },
    }

    return (
        <>
            <Navbar />

            <div className="case-detail-layout">
                <div className="container">
                    <div className="case-detail-grid">
                        {/* Sidebar */}
                        <aside className="case-sidebar">
                            <div className="case-info-card">
                                <div className="info-row">
                                    <span className="info-label">Case Number</span>
                                    <span className="info-value">{caseData.caseNumber}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Status</span>
                                    <span className={`status-badge ${caseData.status}`}>
                                        {caseData.status === 'resolved' ? 'Resolved' : 'Active'}
                                    </span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Category</span>
                                    <span className="info-value">{caseData.category}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Verification</span>
                                    <span className="verification-badge high">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 2L9.5 5L13 5.5L10.5 7.8L11.2 11L8 9.3L4.8 11L5.5 7.8L3 5.5L6.5 5L8 2Z" fill="currentColor" />
                                        </svg>
                                        High Verification
                                    </span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Created</span>
                                    <span className="info-value">{formatDate(caseData.createdAt)}</span>
                                </div>
                            </div>

                            <div className="case-info-card">
                                <h3 className="card-title">Evidence</h3>
                                <div className="evidence-list">
                                    {caseData.evidence.map((item) => (
                                        <div key={item.id} className="evidence-item">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <rect x="4" y="4" width="12" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M7 8H13M7 11H13M7 14H10" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                            <span>{item.type === 'receipt' ? 'Purchase Receipt' : 'Product Image'}</span>
                                            {item.verified && (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <circle cx="8" cy="8" r="6" fill="#10B981" />
                                                    <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="case-actions">
                                <button className="btn btn-outline">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 8V5C15 3.9 14.1 3 13 3H5C3.9 3 3 3.9 3 5V13C3 14.1 3.9 15 5 15H8" stroke="currentColor" strokeWidth="1.5" />
                                        <rect x="9" y="9" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    Share Case
                                </button>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="case-main">
                            {caseData.resolution && (
                                <div className="resolution-banner">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#10B981" />
                                        <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <div className="resolution-title">Case Resolved</div>
                                        <div className="resolution-description">{caseData.resolution.description}</div>
                                    </div>
                                </div>
                            )}

                            <div className="case-header">
                                <h1 className="case-title">{caseData.title}</h1>
                                <p className="case-description">{caseData.description}</p>
                            </div>

                            <div className="case-thread">
                                <h2 className="thread-title">Discussion Thread</h2>

                                {caseData.messages.map((message) => (
                                    <div key={message.id} className={`thread-message ${message.authorType}`}>
                                        {message.authorType !== 'system' && (
                                            <div className="message-avatar">
                                                {message.authorType === 'consumer' ? caseData.consumer.avatar : caseData.brand.avatar}
                                            </div>
                                        )}
                                        <div className="message-content">
                                            {message.authorType === 'system' ? (
                                                <div className="system-message">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="6" fill="#0B63FF" />
                                                        <path d="M8 5V8M8 10V10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                    {message.content}
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="message-author">
                                                        {message.author}
                                                        <span className={`author-badge ${message.authorType}`}>
                                                            {message.authorType === 'consumer' ? 'Consumer' : 'Brand'}
                                                        </span>
                                                        <span className="message-time">{formatDate(message.timestamp)}</span>
                                                    </div>
                                                    <p className="message-text">{message.content}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
