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



            $(".toggle").click(function (event) {
                event.stopPropagation(); // 슬라이드 토글 버튼 클릭 시, 이벤트 전파 중지
                if ($("#toggle").hasClass('on')) {
                    $(".toggle").removeClass('on');
                    $("#slide").removeClass('on');
                    $(".bg").removeClass('overlay'); // 슬라이드가 닫힐 때 overlay 클래스 제거
                    // $(".Xbtn").hide();
                } else {
                    $("#toggle").addClass('on');
                    $("#slide").addClass('on');
                    $(".bg").addClass('overlay'); // 슬라이드가 열릴 때 overlay 클래스 추가
                    // $(".Xbtn").show();
                }
            });
        
            // document에 클릭 이벤트 추가
            $(document).click(function (event) {
                // 클릭된 요소가 슬라이드 내부인지 확인
                // 이벤트 타겟이 #slide 요소의 자손이 아닌 경우를 확인. #slide 요소의 자손이 아니면 참이 됨.
                // !$(event.target).hasClass('toggle'): 이 부분은 이벤트 타겟이 toggle 클래스를 가진 요소가 아닌 경우를 확인
                if (!$(event.target).closest('#slide').length && !$(event.target).hasClass('toggle')) {
                    // 슬라이드 닫기
                    $(".toggle").removeClass('on');
                    $("#slide").removeClass('on');
                    $(".bg").removeClass('overlay'); // 슬라이드가 닫힐 때 overlay 클래스 제거
                }
            });

            
        $(".toggle").on("click", function () {
        $(".bg").fadeIn();
    });
    });