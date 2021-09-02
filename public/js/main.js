window.addEventListener('scroll', e => {
    var el = document.getElementById('jsScroll');
    if (window.scrollY > 200) {
        el.classList.add('visible');
    } else {
        el.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}




$(document).ready(function () {


   
    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 10;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});