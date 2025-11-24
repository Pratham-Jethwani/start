// Core types for the application

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: 'consumer' | 'brand' | 'admin';
}

export interface Brand {
    id: string;
    name: string;
    logo?: string;
    trustScore: number;
    plan: 'free' | 'starter' | 'growth' | 'enterprise';
    responseTime: string;
    resolutionRate: number;
}

export interface Case {
    id: string;
    caseNumber: string;
    title: string;
    description: string;
    status: 'pending' | 'verified' | 'active' | 'resolved' | 'closed';
    category: string;
    createdAt: string;
    updatedAt: string;
    consumer: User;
    brand: Brand;
    visibility: 'public' | 'private';
    verificationLevel: 'high' | 'medium' | 'low';
    evidence: Evidence[];
    messages: Message[];
    resolution?: Resolution;
}

export interface Evidence {
    id: string;
    type: 'image' | 'document' | 'receipt';
    url: string;
    filename: string;
    uploadedAt: string;
    verified: boolean;
}

export interface Message {
    id: string;
    caseId: string;
    author: User;
    authorType: 'consumer' | 'brand' | 'system';
    content: string;
    timestamp: string;
    attachments?: Evidence[];
}

export interface Resolution {
    type: 'refunded' | 'replaced' | 'resolved' | 'closed';
    description: string;
    resolvedAt: string;
}

export interface FilterOptions {
    status?: string[];
    category?: string[];
    verification?: string[];
    dateRange?: {
        from?: string;
        to?: string;
    };
}

export interface SubmitCaseFormData {
    title: string;
    description: string;
    category: string;
    brandName: string;
    orderNumber?: string;
    purchaseDate?: string;
    evidence: File[];
    visibility: 'public' | 'private';
    acceptTerms: boolean;
}

export interface SignInFormData {
    email: string;
    password: string;
    remember: boolean;
}

export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

export interface ToastMessage {
    id: string;
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    duration?: number;
}
