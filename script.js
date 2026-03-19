// Simple form handler (no backend)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out! (Form submission is a placeholder.)');
            form.reset();
        });
    }
});