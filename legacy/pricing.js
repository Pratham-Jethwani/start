// Pricing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billingToggle');

    if (billingToggle) {
        billingToggle.addEventListener('change', function () {
            const isAnnual = this.checked;

            // Toggle price display
            document.querySelectorAll('.monthly-price').forEach(el => {
                el.style.display = isAnnual ? 'none' : 'inline';
            });

            document.querySelectorAll('.annual-price').forEach(el => {
                el.style.display = isAnnual ? 'inline' : 'none';
            });

            // Update period text
            document.querySelectorAll('.period').forEach(el => {
                if (el.textContent.includes('month')) {
                    el.textContent = isAnnual ? '/year' : '/month';
                }
            });
        });
    }
});
