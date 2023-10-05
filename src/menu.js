document.addEventListener('DOMContentLoaded', function () {
    // Get references to the burger icon, menu, and close button
    const burgerIcon = document.getElementById('open-menu');
    const menu = document.getElementById('menu-backdrop');
    const closeButton = document.getElementById('close-menu');
    let initialScrollPosition = 0; // Store the initial scroll position
    let isClickable = true; // Flag to track button clickability

    // Function to open the menu
    function openMenu() {
        if (!isClickable) return; // Check if the button is clickable
        isClickable = false; // Disable the button for the delay
        setTimeout(() => {
            isClickable = true; // Re-enable the button after 1 second
        }, 500); // 500ms = 0.5 second

        burgerIcon.classList.add('is-open');
        menu.classList.add('is-open');

        // Store the initial scroll position
        initialScrollPosition = window.pageYOffset;

        // Prevent scrolling by setting the body to a fixed position
        document.body.style.position = 'fixed';
        document.body.style.top = `-${initialScrollPosition}px`;
    }

    // Function to close the menu
    function closeMenu() {
        if (!isClickable) return; // Check if the button is clickable
        isClickable = false; // Disable the button for the delay
        setTimeout(() => {
            isClickable = true; // Re-enable the button after 1 second
        }, 500); // 500ms = 0.5 second

        burgerIcon.classList.remove('is-open');
        menu.classList.remove('is-open');

        // Re-enable scrolling by resetting body styles
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, initialScrollPosition); // Restore the scroll position
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


