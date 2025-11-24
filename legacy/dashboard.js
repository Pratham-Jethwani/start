// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
    initializeUserMenu();
    initializeFilters();
});

function initializeDashboard() {
    // Check if user is authenticated
    const authToken = localStorage.getItem('auth_token');
    if (!authToken) {
        // Redirect to sign in if not authenticated
        window.location.href = 'signin.html';
        return;
    }

    // Load user info
    const userName = localStorage.getItem('user_name') || 'User';
    const userEmail = localStorage.getItem('user_email') || 'user@example.com';

    // Update user info in dropdown
    const userNameEl = document.querySelector('.user-name');
    const userEmailEl = document.querySelector('.user-email');
    const userAvatar = document.querySelector('.user-avatar span');

    if (userNameEl) userNameEl.textContent = userName;
    if (userEmailEl) userEmailEl.textContent = userEmail;
    if (userAvatar) {
        const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase();
        userAvatar.textContent = initials;
    }
}

function initializeUserMenu() {
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');

    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });
    }

    // Handle sign out
    const signOutLink = document.querySelector('.dropdown-item[href="index.html"]');
    if (signOutLink) {
        signOutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_email');
            localStorage.removeItem('user_name');
            showToast('Signed out successfully', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
}

function initializeFilters() {
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            this.classList.add('active');

            // Filter cases
            const filter = this.getAttribute('data-filter');
            filterCases(filter);
        });
    });

    // Search
    const searchInput = document.getElementById('caseSearch');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function () {
            searchCases(this.value);
        }, 300));
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            sortCases(this.value);
        });
    }
}

function filterCases(filter) {
    const caseItems = document.querySelectorAll('.case-item');
    const casesList = document.getElementById('casesList');
    const emptyState = document.getElementById('emptyState');

    let visibleCount = 0;

    caseItems.forEach(item => {
        const status = item.getAttribute('data-status');

        if (filter === 'all' || status === filter) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Show/hide empty state
    if (visibleCount === 0) {
        casesList.style.display = 'none';
        emptyState.style.display = 'flex';
    } else {
        casesList.style.display = 'flex';
        emptyState.style.display = 'none';
    }
}

function searchCases(query) {
    const caseItems = document.querySelectorAll('.case-item');
    const lowerQuery = query.toLowerCase();

    caseItems.forEach(item => {
        const title = item.querySelector('.case-item-title a').textContent.toLowerCase();
        const caseId = item.querySelector('.case-id').textContent.toLowerCase();

        if (title.includes(lowerQuery) || caseId.includes(lowerQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function sortCases(sortBy) {
    const casesList = document.getElementById('casesList');
    const caseItems = Array.from(document.querySelectorAll('.case-item'));

    // Simple sort simulation (in real app, would re-fetch from API)
    if (sortBy === 'recent') {
        // Already in recent order
        console.log('Sorting by most recent');
    } else if (sortBy === 'oldest') {
        caseItems.reverse();
    } else if (sortBy === 'updated') {
        // Would sort by last update time
        console.log('Sorting by recently updated');
    }

    // Re-append in new order
    caseItems.forEach(item => {
        casesList.appendChild(item);
    });

    showToast(`Sorted by: ${sortBy}`, 'info');
}
