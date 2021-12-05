const toggleButton = document.getElementsByClassName('toggle-btn')[0];

const navbarLinks = document.getElementsByClassName('right-nav')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
