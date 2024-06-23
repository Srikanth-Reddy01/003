document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            
            if (form.checkValidity()) {
                // Perform form submission tasks here
                console.log('Form is valid and ready for submission.');
                // For demonstration, you can alert the user
                alert('Form submitted successfully!');
                // Here you would typically send form data to the server
            } else {
                form.classList.add('was-validated');
            }
        }, false);
    });

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', event => {
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            if (password !== confirmPassword) {
                event.preventDefault();
                event.stopPropagation();
                document.getElementById('register-confirm-password').setCustomValidity('Passwords do not match');
                document.getElementById('register-confirm-password').reportValidity();
            } else {
                document.getElementById('register-confirm-password').setCustomValidity('');
            }
        });
    }
});
