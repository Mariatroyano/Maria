

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
    })

    nav-links.addEventListener('click', () => {
        navLinks.classList.remove('active');
    })
    });
