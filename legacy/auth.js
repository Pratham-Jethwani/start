// Authentication JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeAuthForms();
    initializePasswordStrength();
});

function initializeAuthForms() {
    // Sign In Form
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', handleSignIn);
    }

    // Sign Up Form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignUp);
    }
}

function handleSignIn(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Validate
    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }

    // Simulate sign in
    console.log('Signing in:', { email, remember });
    showToast('Signing in...', 'info');

    // Simulate API call
    setTimeout(() => {
        // Store auth token (simulated)
        localStorage.setItem('auth_token', 'demo_token_' + Date.now());
        localStorage.setItem('user_email', email);

        showToast('Welcome back!', 'success');

        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'my-cases.html';
        }, 1000);
    }, 1500);
}

function handleSignUp(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('emailSignup').value;
    const password = document.getElementById('passwordSignup').value;
    const terms = document.getElementById('terms').checked;
    const newsletter = document.getElementById('newsletter').checked;

    // Validate
    if (!firstName || !lastName) {
        showToast('Please enter your full name', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (password.length < 8) {
        showToast('Password must be at least 8 characters', 'error');
        return;
    }

    if (!terms) {
        showToast('Please accept the Terms of Service', 'error');
        return;
    }

    // Simulate sign up
    console.log('Signing up:', { firstName, lastName, email, newsletter });
    showToast('Creating your account...', 'info');

    // Simulate API call
    setTimeout(() => {
        // Store auth token (simulated)
        localStorage.setItem('auth_token', 'demo_token_' + Date.now());
        localStorage.setItem('user_email', email);
        localStorage.setItem('user_name', `${firstName} ${lastName}`);

        showToast('Account created successfully!', 'success');

        // Redirect to onboarding or dashboard
        setTimeout(() => {
            window.location.href = 'my-cases.html';
        }, 1000);
    }, 1500);
}

function togglePassword(inputId = 'password') {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
}

function initializePasswordStrength() {
    const passwordInput = document.getElementById('passwordSignup');
    if (!passwordInput) return;

    passwordInput.addEventListener('input', function () {
        const password = this.value;
        const strengthFill = document.getElementById('strengthFill');
        const strengthText = document.getElementById('strengthText');

        if (!strengthFill || !strengthText) return;

        const strength = calculatePasswordStrength(password);

        // Remove all classes
        strengthFill.classList.remove('weak', 'medium', 'strong');
        strengthText.classList.remove('weak', 'medium', 'strong');

        if (password.length === 0) {
            strengthFill.style.width = '0%';
            strengthText.textContent = 'Use 8+ characters with mix of letters & numbers';
            return;
        }

        if (strength < 40) {
            strengthFill.classList.add('weak');
            strengthText.classList.add('weak');
            strengthText.textContent = 'Weak password - add more characters';
        } else if (strength < 70) {
            strengthFill.classList.add('medium');
            strengthText.classList.add('medium');
            strengthText.textContent = 'Medium strength - add special characters';
        } else {
            strengthFill.classList.add('strong');
            strengthText.classList.add('strong');
            strengthText.textContent = 'Strong password!';
        }
    });
}

function calculatePasswordStrength(password) {
    let strength = 0;

    // Length
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 15;

    // Has lowercase
    if (/[a-z]/.test(password)) strength += 15;

    // Has uppercase
    if (/[A-Z]/.test(password)) strength += 15;

    // Has numbers
    if (/[0-9]/.test(password)) strength += 15;

    // Has special characters
    if (/[^a-zA-Z0-9]/.test(password)) strength += 15;

    return Math.min(strength, 100);
}
