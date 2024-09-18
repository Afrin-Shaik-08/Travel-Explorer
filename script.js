// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Search Form Functionality
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = searchForm.querySelector('input').value.trim();
        if (searchInput) {
            alert(`Searching for destinations related to: ${searchInput}`);
            // Add your search logic here, e.g., filter destinations or redirect
        } else {
            alert('Please enter a destination to search for.');
        }
    });

    // Featured Destinations Hover Effect
    const featuredItems = document.querySelectorAll('.destination-item');
    featuredItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('highlight');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('highlight');
        });
    });

    // Travel Categories Click Event
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.querySelector('h3').innerText;
            alert(`Explore ${category} travel experiences!`);
            // Implement logic to filter or display specific category content
        });
    });

    // Newsletter Signup Form
    const newsletterForm = document.querySelector('.newsletter form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input').value.trim();
        if (validateEmail(emailInput)) {
            alert(`Thank you for signing up, ${emailInput}!`);
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});

// Highlight Class (CSS can be added for visual feedback)
const style = document.createElement('style');
style.textContent = `
    .highlight {
        transform: scale(1.05);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    }
`;
document.head.append(style);
