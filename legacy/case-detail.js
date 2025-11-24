// Case Detail Page JavaScript

function shareCase() {
    const caseId = '#R360-4821';
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: `Case ${caseId} - Resolve360`,
            text: 'Check out this case on Resolve360',
            url: url
        }).catch(err => console.log('Share failed:', err));
    } else {
        copyToClipboard(url);
        showToast('Link copied to clipboard!', 'success');
    }
}

function openEvidence(index) {
    const evidenceFiles = [
        'Invoice.pdf',
        'Product_Photo.jpg',
        'Email_Thread.png'
    ];

    showToast(`Opening: ${evidenceFiles[index]}`, 'info');
    // In a real implementation, this would open a modal with the evidence viewer
}

// Initialize reactions
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for reactions
    document.querySelectorAll('.reaction-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const count = parseInt(this.querySelector('span').textContent);
            this.querySelector('span').textContent = count + 1;
            this.style.background = 'var(--color-primary-light)';
            this.style.borderColor = 'var(--color-primary)';
            this.style.color = 'var(--color-primary)';
        });
    });

    // Add click handlers for attachments
    document.querySelectorAll('.attachment-item').forEach(item => {
        item.addEventListener('click', function () {
            const fileName = this.querySelector('span').textContent;
            showToast(`Opening: ${fileName}`, 'info');
        });
    });
});
