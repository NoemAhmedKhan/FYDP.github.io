// Toggle Password Visibility
document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    
    togglePasswordIcons.forEach((icon) => {
        icon.addEventListener('click', function() {
            const inputWrapper = this.parentElement;
            const passwordInput = inputWrapper.querySelector('input');
            
            // Toggle the type attribute
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle the icon
            this.classList.toggle('fa-eye-slash');
            this.classList.toggle('fa-eye');
        });
    });

    // Form Validation
    const signupForm = document.querySelector('.signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.querySelector('#fullname').value.trim();
            const email = document.querySelector('#email').value.trim();
            const password = document.querySelector('#password').value;
            const confirmPassword = document.querySelector('#confirm-password').value;
            const termsAccepted = document.querySelector('#terms').checked;
            
            // Basic validation
            if (!fullname || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            // Full name validation (at least 2 words)
            if (fullname.split(' ').length < 2) {
                alert('Please enter your full name (first and last name)');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Password length validation
            if (password.length < 8) {
                alert('Password must be at least 8 characters long');
                return;
            }
            
            // Password match validation
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Terms acceptance validation
            if (!termsAccepted) {
                alert('Please accept the Terms of Service and Privacy Policy');
                return;
            }
            
            // If all validations pass
            console.log('Form submitted successfully');
            alert('Account created successfully! (This is a demo)');
            
            // Here you would typically send the data to your backend
            // fetch('/api/signup', { 
            //     method: 'POST', 
            //     body: JSON.stringify({fullname, email, password}) 
            // })
        });
    }

    // Real-time password strength indicator (optional enhancement)
    const passwordInput = document.querySelector('#password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const helperText = this.parentElement.nextElementSibling;
            
            if (password.length === 0) {
                helperText.textContent = 'Must be at least 8 characters.';
                helperText.style.color = 'var(--color-gray)';
            } else if (password.length < 8) {
                helperText.textContent = `${8 - password.length} more characters needed.`;
                helperText.style.color = '#dc2626';
            } else {
                helperText.textContent = 'Strong password ✓';
                helperText.style.color = 'var(--color-forest-green)';
            }
        });
    }
});
