$(window).ready(function () {
    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 150) {
            $(".nav-bar").addClass("active");
        } else {
            $(".nav-bar").removeClass("active")
        }
    })

    //when window loaded 
    $(window).on("load", function () {
        $(".loader-screen").delay(300).fadeOut()
    })

    $(".fa-user").on("click", function () {
        $(".loader-screen").fadeIn().delay(1000).fadeOut("slow")
        $(".hidden.main-menu").slideUp()
        $(".hidden.main-user").fadeIn(1500).css("display","flex")
        $("body").css("overflow","hidden")
    })

    $(".hidden.main-user").on("click", function () {
        $(this).fadeOut()
    })

    //Header Carousel Slider
    $(function () {
        const timing = 3000;
        const targetOne = $("header .txt h1 span").eq(0),
              targetTwo = $("header .txt h1 span").eq(1);
        const container = setInterval(time, timing)
        function time() {
            if (targetOne.hasClass("active")) {
                targetOne.removeClass("active")
                targetTwo.addClass("active")
            } else {
                targetTwo.removeClass("active")
                targetOne.addClass("active")
            }
        }

        $("header .dir-icons i").each(function () {
            $(this).on({
                mouseenter:function () { clearInterval(container) },
                mouseleave:function () { setInterval(time, timing) },
                click:function () { clearInterval(container); time() }
            })
        })
    })

    //all icon
    function allIcon(icon,targetParent) {
        let arr = ["fade", "slide"];
        $(icon).on("click", function () {
            if ($(window).innerWidth() <= 800) {
                for (let i = 0; i < arr.length; i++) {
                    if ($(targetParent).hasClass("fade")) {
                        $(targetParent).fadeIn(1000).css("display", "flex").addClass("active");
                        $(".hidden.main-menu").delay(1500).slideUp()
                    } else  {
                        $(targetParent).slideDown().css("display", "flex")
                        $(".hidden.main-menu").slideUp()
                    }
                }
            } else {
                $(targetParent).slideDown().css("display", "flex")
                $(targetParent).fadeIn().css("display", "flex").addClass("active");
            }
        })
        $(".hidden.main-menu .fa-times, .hidden.main-search .fa-times").on("click", function () {
            $(this).parent().slideUp()
        })
        $(".hidden.main-products .fa-times").on("click", function () {
            $(this).parent().parent().fadeOut().removeClass("active")
        })
    }
    allIcon(".fa-search",".hidden.main-search")
    allIcon(".fa-shopping-bag",".hidden.main-products")
    allIcon(".fa-caret-right", ".hidden.main-video")

    //shopping icon
    $(".hidden.main-products .cart, .hidden.main-video .frame-video, .hidden.main-user .container").on("click", function (e) {
        e.stopPropagation()
    })
    //products section
    $(".hidden.main-products, .hidden.main-video").on("click", function () {
        $(this).slideUp().removeClass("active");
    })
    // menu icon
    $(".nav-bar .fa-bars").on("click", function () {
        $(".hidden.main-menu").slideDown(500).css("display","flex")
    })
})