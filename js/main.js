$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    })

    let header = $("#header");
    let top__inner = $("#top__inner");
    let top__innerH = top__inner.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, top__innerH);

    $(window).on("scroll ", function() {
        top__innerH = top__inner.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, top__innerH);
    });

    function checkScroll(scrollPos, top__innerH) {
        if(scrollPos > top__innerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");

        }
    }

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        console.log(blockOffset);

        $("html, body").animate({
            scrollTop: blockOffset - 52
        }, 1000);
    });

});