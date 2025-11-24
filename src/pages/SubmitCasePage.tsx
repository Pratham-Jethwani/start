import { useState, useRef, DragEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useToast } from '../context/ToastContext'

export default function SubmitCasePage() {
    const navigate = useNavigate()
    const { showToast } = useToast()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        brandName: '',
        orderNumber: '',
        purchaseDate: '',
        visibility: 'public',
        acceptTerms: false,
    })
    const [files, setFiles] = useState<File[]>([])
    const [dragOver, setDragOver] = useState(false)

    const maxTitleLength = 100
    const maxDescLength = 1000

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files)
            setFiles(prev => [...prev, ...newFiles])
            showToast(`${newFiles.length} file(s) uploaded successfully`, 'success')
        }
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(true)
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(false)
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(false)

        if (e.dataTransfer.files) {
            const newFiles = Array.from(e.dataTransfer.files)
            setFiles(prev => [...prev, ...newFiles])
            showToast(`${newFiles.length} file(s) uploaded successfully`, 'success')
        }
    }

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index))
        showToast('File removed', 'info')
    }

    const handleSubmit = () => {
        if (!formData.acceptTerms) {
            showToast('Please accept the terms and conditions', 'error')
            return
        }
        showToast('Case submitted successfully! Redirecting...', 'success')
        setTimeout(() => navigate('/my-cases'), 1500)
    }

    const canContinueStep1 = formData.title && formData.description && formData.category && formData.brandName

    return (
        <>
            <Navbar />

            <div className="wizard-container">
                <div className="wizard-header">
                    <h1 className="wizard-title">Submit a Case</h1>
                    <p className="wizard-subtitle">We'll verify your evidence and help you get resolution</p>
                </div>

                {/* Progress Bar */}
                <div className="wizard-progress">
                    <div className={`progress-step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                        <div className="step-number">
                            {currentStep > 1 ? (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : '1'}
                        </div>
                        <div className="step-label">Basic Info</div>
                    </div>
                    <div className={`progress-line ${currentStep > 1 ? 'completed' : ''}`}></div>
                    <div className={`progress-step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                        <div className="step-number">
                            {currentStep > 2 ? (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : '2'}
                        </div>
                        <div className="step-label">Verification</div>
                    </div>
                    <div className={`progress-line ${currentStep > 2 ? 'completed' : ''}`}></div>
                    <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
                        <div className="step-number">3</div>
                        <div className="step-label">Publish</div>
                    </div>
                </div>

                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                    <div className="wizard-step active">
                        <h2 className="step-title">Tell us what happened</h2>

                        <div
                            className={`upload-area ${dragOver ? 'drag-over' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
                                <path d="M24 16V32M16 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <h3>Upload Evidence</h3>
                            <p>Drag and drop files here, or click to browse</p>
                            <p style={{ fontSize: '13px', color: '#9CA3AF' }}>Receipts, screenshots, emails, or photos (Max 10MB each)</p>
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept="image/*,.pdf"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>

                        {files.length > 0 && (
                            <div className="uploaded-files">
                                {files.map((file, index) => (
                                    <div key={index} className="file-item">
                                        <span style={{ flex: 1 }}>{file.name}</span>
                                        <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                                            {(file.size / 1024).toFixed(1)} KB
                                        </span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                removeFile(index)
                                            }}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: '#EF4444',
                                                cursor: 'pointer',
                                                padding: '4px',
                                                fontSize: '18px',
                                            }}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label">Case Title *</label>
                            <div className="input-with-icon">
                                <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M3 6H17M3 10H17M3 14H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Brief description of your issue"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    maxLength={maxTitleLength}
                                />
                            </div>
                            <div className={`char-counter ${formData.title.length > maxTitleLength * 0.9 ? 'warning' : ''}`}>
                                {formData.title.length}/{maxTitleLength}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Full Description *</label>
                            <textarea
                                className="form-textarea"
                                placeholder="Explain what happened in detail... Include dates, order numbers, and any communication with the brand."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={6}
                                maxLength={maxDescLength}
                            />
                            <div className={`char-counter ${formData.description.length > maxDescLength * 0.9 ? 'warning' : ''}`}>
                                {formData.description.length}/{maxDescLength}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Category *</label>
                                <select
                                    className="form-select"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="">Select category</option>
                                    <option value="electronics">📱 Electronics</option>
                                    <option value="shipping">📦 Shipping & Delivery</option>
                                    <option value="billing">💳 Billing & Payments</option>
                                    <option value="service">🎧 Customer Service</option>
                                    <option value="quality">⭐ Product Quality</option>
                                    <option value="warranty">🛡️ Warranty Claims</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Brand Name *</label>
                                <div className="input-with-icon">
                                    <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="e.g., TechBrand Inc."
                                        value={formData.brandName}
                                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Order Number (Optional)</label>
                                <div className="input-with-icon">
                                    <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M3 4H17L15 14H5L3 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        <circle cx="7" cy="17" r="1" fill="currentColor" />
                                        <circle cx="13" cy="17" r="1" fill="currentColor" />
                                    </svg>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="e.g., ORD-123456"
                                        value={formData.orderNumber}
                                        onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Purchase Date (Optional)</label>
                                <input
                                    type="date"
                                    className="form-input"
                                    value={formData.purchaseDate}
                                    onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            className="btn btn-primary btn-large"
                            onClick={() => setCurrentStep(2)}
                            disabled={!canContinueStep1}
                            style={{ width: '100%', marginTop: '8px' }}
                        >
                            Continue to Verification
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Step 2: Verification */}
                {currentStep === 2 && (
                    <div className="wizard-step active">
                        <h2 className="step-title">Verifying your evidence</h2>
                        <div className="verification-progress">
                            <div className="verification-icon">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <circle cx="32" cy="32" r="30" stroke="#0B63FF" strokeWidth="2" />
                                    <path d="M20 32L28 40L44 24" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Verification Complete!</h3>
                            <p>Your evidence has been authenticated and verified</p>
                        </div>

                        <div className="verification-results">
                            <div className="result-item success">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" fill="#10B981" />
                                    <path d="M6 10L9 13L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Purchase receipt verified</span>
                            </div>
                            <div className="result-item success">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" fill="#10B981" />
                                    <path d="M6 10L9 13L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Product images authenticated</span>
                            </div>
                            <div className="result-item success">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" fill="#10B981" />
                                    <path d="M6 10L9 13L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Timeline verified</span>
                            </div>
                        </div>

                        <div className="wizard-actions">
                            <button className="btn btn-outline" onClick={() => setCurrentStep(1)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                    <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Back
                            </button>
                            <button className="btn btn-primary btn-large" onClick={() => setCurrentStep(3)}>
                                Continue to Publish
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Publish */}
                {currentStep === 3 && (
                    <div className="wizard-step active">
                        <h2 className="step-title">Review and publish</h2>

                        <div className="visibility-section">
                            <h3>Case Visibility</h3>
                            <div className="visibility-options">
                                <label className={`visibility-card ${formData.visibility === 'public' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="visibility"
                                        value="public"
                                        checked={formData.visibility === 'public'}
                                        onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
                                    />
                                    <div className="visibility-content">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12.5" r="3.5" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                        <div>
                                            <div className="visibility-title">Public</div>
                                            <div className="visibility-description">Visible to everyone. Recommended for accountability.</div>
                                        </div>
                                    </div>
                                </label>

                                <label className={`visibility-card ${formData.visibility === 'private' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="visibility"
                                        value="private"
                                        checked={formData.visibility === 'private'}
                                        onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
                                    />
                                    <div className="visibility-content">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M8 11V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V11" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                        <div>
                                            <div className="visibility-title">Private</div>
                                            <div className="visibility-description">Only visible to you and the brand.</div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="case-preview">
                            <h3>Preview</h3>
                            <div className="preview-card">
                                <h4>{formData.title || 'Your case title will appear here'}</h4>
                                <p>{formData.description || 'Your description will appear here...'}</p>
                                <div className="preview-meta">
                                    <span>{formData.category || 'Category'}</span>
                                    <span>•</span>
                                    <span>{formData.brandName || 'Brand Name'}</span>
                                    {files.length > 0 && (
                                        <>
                                            <span>•</span>
                                            <span>{files.length} file(s) attached</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={formData.acceptTerms}
                                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                            />
                            <span>I confirm that all information provided is accurate and I accept the <a href="#" className="link-primary">Terms of Service</a></span>
                        </label>

                        <div className="wizard-actions">
                            <button className="btn btn-outline" onClick={() => setCurrentStep(2)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                    <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Back
                            </button>
                            <button
                                className="btn btn-primary btn-large"
                                onClick={handleSubmit}
                                disabled={!formData.acceptTerms}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                                    <path d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z" fill="currentColor" />
                                </svg>
                                Publish Case — Free
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
