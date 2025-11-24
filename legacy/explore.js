// Explore Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeSearch();
    initializeSort();
});

function initializeFilters() {
    // Handle filter checkboxes
    document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Handle date range select
    const dateSelect = document.querySelector('.filter-select');
    if (dateSelect) {
        dateSelect.addEventListener('change', applyFilters);
    }
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
}

function initializeSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', applySorting);
    }
}

function applyFilters() {
    const filters = {
        status: [],
        category: [],
        verification: [],
        dateRange: document.querySelector('.filter-select')?.value || '30'
    };

    // Collect checked filters
    document.querySelectorAll('.filter-checkbox input:checked').forEach(checkbox => {
        const value = checkbox.value;
        if (['resolved', 'pending', 'disputed'].includes(value)) {
            filters.status.push(value);
        } else if (['electronics', 'apparel', 'home', 'services'].includes(value)) {
            filters.category.push(value);
        } else if (['high', 'medium'].includes(value)) {
            filters.verification.push(value);
        }
    });

    console.log('Applying filters:', filters);
    // In a real app, this would make an API call to filter cases
    updateResultsCount(filters);
}

function performSearch(query) {
    console.log('Searching for:', query);
    // In a real app, this would make an API call
    showToast(`Searching for: ${query}`, 'info');
}

function applySorting() {
    const sortBy = document.getElementById('sortSelect').value;
    console.log('Sorting by:', sortBy);
    // In a real app, this would re-sort the results
    showToast(`Sorted by: ${sortBy}`, 'info');
}

function clearFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset date range
    const dateSelect = document.querySelector('.filter-select');
    if (dateSelect) {
        dateSelect.value = '30';
    }

    // Check default filters (resolved, high verification)
    document.querySelectorAll('.filter-checkbox input[value="resolved"], .filter-checkbox input[value="high"]').forEach(checkbox => {
        checkbox.checked = true;
    });

    applyFilters();
    showToast('Filters cleared', 'success');
}

function updateResultsCount(filters) {
    // Simulate count update based on filters
    const baseCount = 847;
    const statusMultiplier = filters.status.length > 0 ? filters.status.length / 3 : 1;
    const newCount = Math.floor(baseCount * statusMultiplier);

    const resultsCount = document.querySelector('.results-count');
    if (resultsCount) {
        resultsCount.textContent = `${newCount} cases found`;
    }
}
