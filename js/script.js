$(function () {
    // 스크롤 페이드인
    $(document).ready(function () {
        /* 1 */
        $(window).scroll(function () {
            /* 2 */
            $('.Ptext1, .Ptext2, .Ptext3, .Ptext4, .Ptext5, .minLogo, .InDbtn>a').each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
                var bottom_of_window = $(window).scrollTop() + $(window).height(); /* 3 */
                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({
                        'opacity': '1'
                    }, 700);
                }
            });
        });
    });

});
