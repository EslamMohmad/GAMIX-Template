$(window).ready(function () {
    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 150) {
            $(".nav-bar").addClass("active");
        } else {
            $(".nav-bar").removeClass("active")
        }
    })

    //hidden section
    $(".hidden.main-products").on("click", function () {
        $(this).fadeOut().removeClass("active");
    })
    const hiddenTime = 100;
    // menu icon
    $(".nav-bar .fa-bars").on("click", function () {
        $(".hidden.main-menu").slideDown(500).css("display","flex")
    })
    
    
    //search icon
    function allIcon(icon,targetParent) {
        let arr = ["fade", "slide"];
        $(icon).on("click", function () {
            if ($(window).innerWidth() <= 800) {
                for (let i = 0; i < arr.length; i++) {
                    if ($(targetParent).hasClass("fade")) {
                        $(targetParent).fadeIn(1000).css("display", "flex").addClass("active");
                         $(".hidden.main-menu").delay(1500).slideUp()
                        console.log("fade")
                    } else  {
                        $(targetParent).slideDown().css("display", "flex")
                        $(".hidden.main-menu").slideUp()
                        console.log("slide")

                    }
                }
            } else {
                $(targetParent).slideDown().css("display", "flex")
                $(targetParent).fadeIn().css("display", "flex").addClass("active");
            }
        })
        $(".hidden.main-menu .fa-times").on("click", function () {
            $(this).parent().slideUp()
        })
        $(".hidden.main-search .fa-times").on("click", function () {
            $(this).parent().slideUp()
        })
        $(".hidden.main-products .fa-times").on("click", function () {
            $(this).parent().parent().fadeOut().removeClass("active")
        })
    }
    allIcon(".fa-search",".hidden.main-search")
    allIcon(".fa-shopping-bag",".hidden.main-products")

    //shopping icon
    $(".hidden.main-products .cart").on("click", function (e) {
        e.stopPropagation()
    })
})