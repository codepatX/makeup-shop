// index.js

// Get current URL path
const currentPath = window.location.pathname;

// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-links a');

// Loop through each link
navbarLinks.forEach(link => {
    // If link's href matches the current path, add 'active' class to its parent <li>
    if (link.getAttribute('href') === currentPath) {
        link.parentElement.classList.add('active');
    }
});
