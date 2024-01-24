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
        
        $('.searchLang_l > li').on('mouseover', function(){
            $('.sub-wrap').stop().slideUp(200)
            $(this).children('.sub-wrap').stop().slideDown(200)
        });
        
        $('.searchLang_l > li').on('mouseleave', function(){
            $(this).children('.sub-wrap').stop().slideUp(200)
        });

        $(function(){
 
            $(".toggle").click(function()    {
              if($(".toggle").hasClass('on')){
                $(".toggle").removeClass('on');
                $("#slide").removeClass('on');
               
              } else{
                $("#toggle").addClass('on');
               $("#slide").addClass('on'); 
              }
            });
            
          });

    // $(".toggle").on("click", function () {
    //     $(".bg").fadeIn();
    // });
    // $(".toggle").on("click", function () {
    //     $(".bg").fadeOut();
    // });

    $('.toggel').click(function(){
        $(this).addClass('.bg')
    });

    $('.toggle').click(function(){
        $('this').removeClass('.bg')
    });

    });