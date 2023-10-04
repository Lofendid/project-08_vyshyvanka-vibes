document.addEventListener('DOMContentLoaded', function () {
    // Get references to the burger icon, menu, and close button
    const burgerIcon = document.getElementById('open-menu');
    const menu = document.getElementById('menu-backdrop');
    const closeButton = document.getElementById('close-menu');

    // Function to open the menu
    function openMenu() {
        burgerIcon.classList.add('is-open');
        menu.classList.add('is-open');
    }

    // Function to close the menu
    function closeMenu() {
        burgerIcon.classList.remove('is-open');
        menu.classList.remove('is-open');
    }

    // Function to close the menu when a link is clicked or touched
    function closeMenuOnClick() {
        closeMenu();
    }

    // Add click event listeners
    burgerIcon.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    // Add touch event listeners (for touch screens)
    burgerIcon.addEventListener('touchstart', openMenu);
    closeButton.addEventListener('touchstart', closeMenu);

    // Add event listeners to menu links
    const menuLinks = document.querySelectorAll('.menu-nav-link');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', closeMenuOnClick);
        link.addEventListener('touchstart', closeMenuOnClick);
    });
});