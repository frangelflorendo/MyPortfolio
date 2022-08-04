$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 500) {
            $('.box').addClass('show');
        } else {
            $('.box').removeClass('show');
        }
    });

    $('.burger').click(function() {
        $('nav .menu').toggleClass('active');
    })
    $('nav .menu li a').click(function() {
        $('nav .menu').toggleClass('active');
    })
});