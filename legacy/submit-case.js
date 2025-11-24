// Submit Case Wizard JavaScript

let currentStep = 1;
let uploadedFiles = [];
let caseData = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeWizard();
    loadDraftIfExists();
});

function initializeWizard() {
    // File upload handlers
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');

    uploadArea.addEventListener('click', () => fileInput.click());

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    // Character counters
    document.getElementById('caseTitle').addEventListener('input', (e) => {
        document.getElementById('titleCounter').textContent = e.target.value.length;
        updatePreview();
        saveDraftData();
    });

    document.getElementById('description').addEventListener('input', (e) => {
        document.getElementById('descCounter').textContent = e.target.value.length;
        updatePreview();
        saveDraftData();
    });

    document.getElementById('category').addEventListener('change', () => {
        updatePreview();
        saveDraftData();
    });

    // Navigation buttons
    document.getElementById('step1Next').addEventListener('click', () => {
        if (validateStep1()) {
            goToStep(2);
            simulateOCR();
        }
    });

    document.getElementById('step2Back').addEventListener('click', () => goToStep(1));
    document.getElementById('step2Next').addEventListener('click', () => goToStep(3));

    document.getElementById('step3Back').addEventListener('click', () => goToStep(2));
    document.getElementById('publishCase').addEventListener('click', publishCase);

    // SMS notification toggle
    document.getElementById('smsNotif').addEventListener('change', (e) => {
        document.getElementById('phoneInput').style.display = e.target.checked ? 'block' : 'none';
    });

    // Terms checkbox
    document.getElementById('acceptTerms').addEventListener('change', (e) => {
        document.getElementById('publishCase').disabled = !e.target.checked;
    });
}

function handleFiles(files) {
    const allowedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.heic'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const maxFiles = 10;

    Array.from(files).forEach(file => {
        // Validate file type
        if (!validateFileType(file, allowedTypes)) {
            showToast(`${file.name} is not a supported file type`, 'error');
            return;
        }

        // Validate file size
        if (file.size > maxSize) {
            showToast(`${file.name} exceeds 5MB limit`, 'error');
            return;
        }

        // Check max files
        if (uploadedFiles.length >= maxFiles) {
            showToast(`Maximum ${maxFiles} files allowed`, 'error');
            return;
        }

        uploadedFiles.push(file);
    });

    renderFileList();
    saveDraftData();
}

function renderFileList() {
    const fileList = document.getElementById('fileList');
    const filePreview = document.getElementById('filePreview');

    if (uploadedFiles.length === 0) {
        filePreview.style.display = 'none';
        return;
    }

    filePreview.style.display = 'block';
    fileList.innerHTML = '';

    uploadedFiles.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 2H11L14 5V16C14 17.1046 13.1046 18 12 18H6C4.89543 18 4 17.1046 4 16V4C4 2.89543 4.89543 2 6 2Z" stroke="white" stroke-width="1.5"/>
                    <path d="M11 2V5H14" stroke="white" stroke-width="1.5"/>
                </svg>
            </div>
            <div class="file-info">
                <div class="file-name">${file.name}</div>
                <div class="file-size">${formatFileSize(file.size)}</div>
            </div>
            <div class="file-actions">
                <button class="btn-icon" onclick="previewFile(${index})" title="Preview">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5Z" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M1 8C1 8 3 3 8 3C13 3 15 8 15 8C15 8 13 13 8 13C3 13 1 8 1 8Z" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                </button>
                <button class="btn-icon delete" onclick="removeFile(${index})" title="Remove">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        `;
        fileList.appendChild(fileItem);
    });
}

function removeFile(index) {
    uploadedFiles.splice(index, 1);
    renderFileList();
    saveDraftData();
}

function previewFile(index) {
    const file = uploadedFiles[index];
    showToast(`Preview: ${file.name}`, 'info');
    // In a real implementation, this would open a modal with file preview
}

function validateStep1() {
    const title = document.getElementById('caseTitle').value.trim();
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value.trim();

    if (uploadedFiles.length === 0) {
        showToast('Please upload at least one file', 'error');
        return false;
    }

    if (!title) {
        showToast('Please enter a case title', 'error');
        return false;
    }

    if (!category) {
        showToast('Please select a category', 'error');
        return false;
    }

    if (!description) {
        showToast('Please describe your issue', 'error');
        return false;
    }

    return true;
}

function simulateOCR() {
    const progressFill = document.getElementById('progressFill');
    const verificationProgress = document.getElementById('verificationProgress');
    const extractedData = document.getElementById('extractedData');
    const step2Next = document.getElementById('step2Next');

    // Show progress
    verificationProgress.style.display = 'block';
    extractedData.style.display = 'none';
    step2Next.disabled = true;

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        progressFill.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                verificationProgress.style.display = 'none';
                extractedData.style.display = 'block';
                step2Next.disabled = false;
                showToast('Verification complete!', 'success');
            }, 500);
        }
    }, 200);
}

function goToStep(step) {
    // Update current step
    currentStep = step;

    // Update step visibility
    document.querySelectorAll('.wizard-step').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');

    // Update progress bar
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        const stepNum = index + 1;
        if (stepNum < step) {
            el.classList.add('completed');
            el.classList.remove('active');
        } else if (stepNum === step) {
            el.classList.add('active');
            el.classList.remove('completed');
        } else {
            el.classList.remove('active', 'completed');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update preview if on step 3
    if (step === 3) {
        updatePreview();
    }
}

function updatePreview() {
    const title = document.getElementById('caseTitle').value || 'Your case title will appear here';
    const category = document.getElementById('category').selectedOptions[0]?.text || 'Category';
    const description = document.getElementById('description').value || 'Your description will appear here...';

    document.getElementById('previewTitle').textContent = title;
    document.getElementById('previewCategory').textContent = category;
    document.getElementById('previewDescription').textContent = description;
}

function publishCase() {
    // Collect all data
    caseData = {
        title: document.getElementById('caseTitle').value,
        category: document.getElementById('category').value,
        purchaseDate: document.getElementById('purchaseDate').value,
        purchaseChannel: document.getElementById('purchaseChannel').value,
        orderId: document.getElementById('orderId').value,
        description: document.getElementById('description').value,
        extractedBrand: document.getElementById('extractedBrand').value,
        extractedInvoice: document.getElementById('extractedInvoice').value,
        extractedDate: document.getElementById('extractedDate').value,
        extractedAmount: document.getElementById('extractedAmount').value,
        anonymize: document.getElementById('anonymize').checked,
        allowContact: document.getElementById('allowContact').checked,
        visibility: document.querySelector('input[name="visibility"]:checked').value,
        emailNotif: document.getElementById('emailNotif').checked,
        smsNotif: document.getElementById('smsNotif').checked,
        files: uploadedFiles.map(f => f.name)
    };

    // In a real app, this would send to the server
    console.log('Publishing case:', caseData);

    // Clear draft
    clearDraft('case-draft');

    // Show success modal
    document.getElementById('successModal').style.display = 'flex';

    // Simulate API call
    setTimeout(() => {
        showToast('Case published successfully!', 'success');
    }, 500);
}

function saveDraftData() {
    const draft = {
        title: document.getElementById('caseTitle').value,
        category: document.getElementById('category').value,
        purchaseDate: document.getElementById('purchaseDate').value,
        purchaseChannel: document.getElementById('purchaseChannel').value,
        orderId: document.getElementById('orderId').value,
        description: document.getElementById('description').value,
        fileCount: uploadedFiles.length,
        timestamp: new Date().toISOString()
    };

    saveDraft('case-draft', draft);
}

function loadDraftIfExists() {
    const draft = loadDraft('case-draft');
    if (!draft) return;

    // Ask user if they want to restore
    if (confirm('We found a saved draft. Would you like to restore it?')) {
        document.getElementById('caseTitle').value = draft.title || '';
        document.getElementById('category').value = draft.category || '';
        document.getElementById('purchaseDate').value = draft.purchaseDate || '';
        document.getElementById('purchaseChannel').value = draft.purchaseChannel || '';
        document.getElementById('orderId').value = draft.orderId || '';
        document.getElementById('description').value = draft.description || '';

        // Update counters
        document.getElementById('titleCounter').textContent = draft.title?.length || 0;
        document.getElementById('descCounter').textContent = draft.description?.length || 0;

        showToast('Draft restored', 'success');
    } else {
        clearDraft('case-draft');
    }
}

function shareCase() {
    const url = window.location.origin + '/case-detail.html?id=R360-4892';

    if (navigator.share) {
        navigator.share({
            title: 'My Case on Resolve360',
            text: 'Check out my case on Resolve360',
            url: url
        }).catch(err => console.log('Share failed:', err));
    } else {
        copyToClipboard(url);
    }
}

// Auto-save every 30 seconds
setInterval(() => {
    if (currentStep === 1) {
        saveDraftData();
    }
}, 30000);
