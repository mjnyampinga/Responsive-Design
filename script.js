document.addEventListener("DOMContentLoaded", function () {
    const mobileNav = document.querySelector('.mobile-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    // Function to toggle the navigation menu on/off
    function toggleNav() {
        nav.classList.toggle('show');
    }

    // Add a click event listener to the mobile navigation button
    mobileNav.addEventListener('click', toggleNav);
});







