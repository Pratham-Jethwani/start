// Brand Dashboard JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeBrandDashboard();
});

function initializeBrandDashboard() {
    // Check if brand is authenticated
    const authToken = localStorage.getItem('brand_auth_token');
    if (!authToken) {
        // For demo purposes, set a token
        localStorage.setItem('brand_auth_token', 'demo_brand_token');
    }

    // Initialize chart filters
    const chartFilters = document.querySelectorAll('.chart-filter');
    chartFilters.forEach(filter => {
        filter.addEventListener('change', function () {
            console.log('Chart filter changed:', this.value);
            // In real app, would reload chart data
            showToast(`Updated chart: ${this.value}`, 'info');
        });
    });

    // Initialize quick action buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const action = this.querySelector('span').textContent;
            console.log('Quick action clicked:', action);

            if (action === 'View Inbox') {
                window.location.href = 'brand-inbox.html';
            } else {
                showToast(`Opening: ${action}`, 'info');
            }
        });
    });

    // Mobile sidebar toggle (for responsive)
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.brand-sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
}

// Simulate real-time updates
function simulateRealtimeUpdates() {
    setInterval(() => {
        // Update SLA timers
        const slaTimers = document.querySelectorAll('.sla-warning');
        slaTimers.forEach(timer => {
            const currentText = timer.textContent;
            const match = currentText.match(/(\d+)h/);
            if (match) {
                const hours = parseInt(match[1]);
                if (hours > 0) {
                    timer.textContent = `${hours - 1}h left to respond`;
                }
            }
        });
    }, 3600000); // Update every hour
}
