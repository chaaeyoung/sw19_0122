$(function () {
    // 로고와 하단화살표 클릭시 최상단으로 이동
    $(" .logo, .btn_top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });
    // 하단 버튼이 스크롤 500픽셀 도달시 나타남
    // .scrollTop()- '현재 스크롤의 위치'를 가져오는 메서드 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });

    // 스크롤 페이드인
    $(document).ready(function () {
        /* 1 */
        $(window).scroll(function () {
            /* 2 */
            $('.Ptext1, .Ptext2, .Ptext3, .Ptext4, .Ptext5, .minLogo').each(function (i) {
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
