function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        const errors = [];

        // Validate Name
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(fname) || !nameRegex.test(lname)) {
            errors.push('First and Last names must contain only letters.');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address.');
            isValid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            errors.push('Phone number must be exactly 10 digits.');
            isValid = false;
        }

        // Validate Budget
        const budget = document.getElementById('budget').value;
        const budgetRegex = /^\d+$/;
        if (!budgetRegex.test(budget)) {
            errors.push('Budget must be a numeric value.');
            isValid = false;
        }

        // Validate Due Date
        const dueDate = new Date(document.getElementById('due_date').value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
        const oneWeekFromNow = new Date(today);
        oneWeekFromNow.setDate(today.getDate() + 7);
        if (dueDate < oneWeekFromNow) {
            errors.push('Due date must be at least one week from today.');
            isValid = false;
        }

        // Display errors if any
        if (!isValid) {
            event.preventDefault();
            alert(errors.join('\n'));
        }
    });
});


