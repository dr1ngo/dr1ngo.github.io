window.addEventListener('DOMContentLoaded', () => {
    $('.header-burger').click(function () {
        $('.header-burger').toggleClass('open-menu');
        $('.header-inner-mobile').toggleClass('open-menu');
    });
});