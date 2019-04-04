$(document).ready(() => {
    $('.about-me-link-btn').on('click', () => {
        $('html, body').animate({
            scrollTop: $('#about-me').offset().top
        }, 500);
    });

    // $('.hire-me').on('click', () => {
    //     $('html, body').animate({
    //         scrollTop: $('#nameInput').offset().top
    //     }, 500);
    // });
});