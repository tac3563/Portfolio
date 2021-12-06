// Nav Toggle

const toggleButton = document.getElementsByClassName('toggle-btn')[0];

const navbarLinks = document.getElementsByClassName('right-nav')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Scroll Animations

$('.back-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate(
            {
                scrollTop: target.offset().top
            },
            1000
        );
    }
});
