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
            isClickable = true; // Re-enable the button after 500 milliseconds
        }, 500); // 500ms = 0.5 seconds

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
            isClickable = true; // Re-enable the button after 500 milliseconds
        }, 500); // 500ms = 0.5 seconds

        // Disable scroll-behavior: smooth on the HTML element when closing the menu
        document.documentElement.style.scrollBehavior = 'auto';

        burgerIcon.classList.remove('is-open');
        menu.classList.remove('is-open');

        // Re-enable scrolling by resetting body styles
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, initialScrollPosition); // Restore the scroll position

        // Re-enable scroll-behavior: smooth after a delay of 500ms
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 500); // 500ms = 0.5 seconds
    }

    // Function to close the menu when a link is clicked or touched
    function closeMenuOnClick(event) {
        // Check if the clicked element is not a menu link
        if (!event.target.classList.contains('menu-nav-link')) {
            closeMenu();
        }
        else {
            // Close the menu if a menu link is clicked
            closeMenu();
        }
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
