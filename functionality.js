/**
 * Intended as Global site interactions script.
 */
document.addEventListener('DOMContentLoaded', () => {
    // make brand clickable navigating to home
    const header = document.querySelector('h1 span');
    if (header) {
        header.style.cursor = "pointer";
        header.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    // (hero section) -> go to order page
    const orderNowBtn = document.getElementById('order-now-btn');
    if (orderNowBtn) {
        orderNowBtn.addEventListener('click', function() {
            window.location.href = 'order.html';
        });
    }

    // (menu section) -> also route to order page
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'order.html';
        });
    });

    // Hamburger menu toggle (mobile nav)
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('nav ul');

    if (hamburgerBtn && navList) {
        hamburgerBtn.addEventListener('click', () => {
            // Toggle the active class on both the button and the list
            hamburgerBtn.classList.toggle('active');
            navList.classList.toggle('active');

            // Update ARIA attributes for accessibility
            const isExpanded = navList.classList.contains('active');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when any nav link is clicked (improves UX on mobile)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navList.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// This file was meant to centralize generic interactions; retained even if not all
// features are included, to act as a reference for future behavior.

