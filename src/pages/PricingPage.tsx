import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PricingPage() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

    const plans = [
        {
            name: 'Free',
            price: { monthly: 0, annual: 0 },
            description: 'For individuals trying out Resolve360',
            features: [
                '1 active case at a time',
                'Public case visibility only',
                'Community support',
                'Basic verification',
                '7-day case history',
            ],
            cta: 'Get Started',
            popular: false,
        },
        {
            name: 'Starter',
            price: { monthly: 29, annual: 290 },
            description: 'For small businesses managing customer issues',
            features: [
                '10 active cases',
                'Public & private cases',
                'Email support',
                'Standard verification',
                'Unlimited case history',
                'Basic analytics',
                'API access',
            ],
            cta: 'Start Free Trial',
            popular: false,
        },
        {
            name: 'Growth',
            price: { monthly: 99, annual: 990 },
            description: 'For growing brands with higher volume',
            features: [
                'Unlimited cases',
                'Priority verification',
                'Dedicated support',
                'Advanced analytics',
                'Custom integrations',
                'Team collaboration (5 seats)',
                'SLA tracking',
                'White-label option',
            ],
            cta: 'Start Free Trial',
            popular: true,
        },
        {
            name: 'Enterprise',
            price: { monthly: null, annual: null },
            description: 'For large organizations with custom needs',
            features: [
                'Everything in Growth',
                'Unlimited team seats',
                'Custom verification rules',
                'Dedicated account manager',
                'Custom SLA agreements',
                'Advanced security',
                'On-premise deployment option',
                'Priority feature requests',
            ],
            cta: 'Contact Sales',
            popular: false,
        },
    ]

    return (
        <>
            <Navbar />

            <section className="pricing-hero">
                <div className="container">
                    <h1 className="hero-title">Simple, transparent pricing</h1>
                    <p className="hero-subtitle">Choose the plan that fits your needs. All plans include a 14-day free trial.</p>

                    <div className="billing-toggle">
                        <button
                            className={billingPeriod === 'monthly' ? 'active' : ''}
                            onClick={() => setBillingPeriod('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={billingPeriod === 'annual' ? 'active' : ''}
                            onClick={() => setBillingPeriod('annual')}
                        >
                            Annual
                            <span className="discount-badge">Save 17%</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="pricing-plans">
                <div className="container">
                    <div className="pricing-grid">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                                {plan.popular && <div className="popular-badge">Most Popular</div>}

                                <div className="plan-header">
                                    <h3 className="plan-name">{plan.name}</h3>
                                    <div className="plan-price">
                                        {plan.price[billingPeriod] !== null ? (
                                            <>
                                                <span className="currency">$</span>
                                                <span className="amount">{plan.price[billingPeriod]}</span>
                                                <span className="period">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                                            </>
                                        ) : (
                                            <span className="custom-price">Custom</span>
                                        )}
                                    </div>
                                    <p className="plan-description">{plan.description}</p>
                                </div>

                                <ul className="plan-features">
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <circle cx="10" cy="10" r="10" fill="#E0F2FE" />
                                                <path d="M6 10L9 13L14 8" stroke="#0B63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={plan.name === 'Free' ? '/signup' : '/signup'}
                                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-large`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-comparison">
                <div className="container">
                    <h2 className="section-title">Compare all features</h2>

                    <div className="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Free</th>
                                    <th>Starter</th>
                                    <th>Growth</th>
                                    <th>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Active cases</td>
                                    <td>1</td>
                                    <td>10</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <td>Case visibility</td>
                                    <td>Public only</td>
                                    <td>Public & Private</td>
                                    <td>Public & Private</td>
                                    <td>Public & Private</td>
                                </tr>
                                <tr>
                                    <td>Verification speed</td>
                                    <td>Standard (48h)</td>
                                    <td>Standard (48h)</td>
                                    <td>Priority (24h)</td>
                                    <td>Custom SLA</td>
                                </tr>
                                <tr>
                                    <td>Support</td>
                                    <td>Community</td>
                                    <td>Email</td>
                                    <td>Priority</td>
                                    <td>Dedicated manager</td>
                                </tr>
                                <tr>
                                    <td>Analytics</td>
                                    <td>❌</td>
                                    <td>Basic</td>
                                    <td>Advanced</td>
                                    <td>Custom reports</td>
                                </tr>
                                <tr>
                                    <td>API access</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </tr>
                                <tr>
                                    <td>Team seats</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <td>White-label</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="pricing-faq">
                <div className="container">
                    <h2 className="section-title">Frequently asked questions</h2>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3 className="faq-question">How does the free trial work?</h3>
                            <p className="faq-answer">All paid plans include a 14-day free trial. No credit card required. You can cancel anytime during the trial period.</p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">Can I change plans later?</h3>
                            <p className="faq-answer">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.</p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">What payment methods do you accept?</h3>
                            <p className="faq-answer">We accept all major credit cards (Visa, MasterCard, American Express) and offer invoice billing for Enterprise customers.</p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">Is there a setup fee?</h3>
                            <p className="faq-answer">No setup fees for any plan. Enterprise customers may have custom onboarding, which is included in the plan.</p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">What happens to my data if I cancel?</h3>
                            <p className="faq-answer">Your data remains accessible for 30 days after cancellation. You can export all your data at any time before deletion.</p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">Do you offer discounts for nonprofits?</h3>
                            <p className="faq-answer">Yes! We offer 50% off for verified nonprofit organizations. Contact our sales team for more information.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2 className="cta-title">Ready to get started?</h2>
                        <p className="cta-subtitle">Start your 14-day free trial today. No credit card required.</p>
                        <div className="cta-buttons">
                            <Link to="/signup" className="btn btn-primary btn-large">Start Free Trial</Link>
                            <Link to="/brand/dashboard" className="btn btn-outline-light btn-large">Schedule Demo</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
