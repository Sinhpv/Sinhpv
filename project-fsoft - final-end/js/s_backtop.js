// Scroll top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.scrollup').fadeIn();
            $('.scrollup').addClass('move_top');
            //     $(".fixed").animate({
            //     height: 'toggle'
            // });
        } else {
            $('.scrollup').fadeOut();
            $('.scrollup').removeClass('move_top');
            // $(".scrollup").stop();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});