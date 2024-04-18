$(function(){
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset =$(window).scrollTop();

    /*FIXED HEADER*/
    checkscroll(scrolloffset)
    
    $(window).on("scroll",function(){
        scrolloffset = $(this).scrollTop();

        checkscroll(scrolloffset)
    });

    function checkscroll(scrolloffset){
        if(scrolloffset >= introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

    /* SMOOTH SCROLL */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
        blockId = $this.data('scroll'),
        blockoffset = $(blockId).offset().top;
        console.log(blockoffset);
        
        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html,body").animate({
            scrollTop: blockoffset
        }, 500);
    });

    /* MENU NAV TOGGLE */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* COLLAPSE */   
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
        blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

    /* SLIDER */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }); 

});