import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import ExplorePage from './pages/ExplorePage'
import SubmitCasePage from './pages/SubmitCasePage'
import CaseDetailPage from './pages/CaseDetailPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import MyCasesPage from './pages/MyCasesPage'
import BrandDashboardPage from './pages/BrandDashboardPage'
import BrandInboxPage from './pages/BrandInboxPage'

function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/case/:id" element={<CaseDetailPage />} />

            {/* Auth Routes */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Consumer Routes */}
            <Route path="/submit-case" element={<SubmitCasePage />} />
            <Route path="/my-cases" element={<MyCasesPage />} />

            {/* Brand Routes */}
            <Route path="/brand/dashboard" element={<BrandDashboardPage />} />
            <Route path="/brand/inbox" element={<BrandInboxPage />} />
        </Routes>
    )
}

export default App
