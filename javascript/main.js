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
        $(this).fadeOut(hiddenTime).removeClass("active");
    })
    const hiddenTime = 100;
    // menu icon
    $(".nav-bar .fa-bars").on("click", function () {
        $(".hidden.main-menu").slideDown(500).css("display","flex")
    })
    $(".hidden.main-menu .fa-times").on("click", function () {
        $(".hidden.main-menu").slideUp(500)
    })
    //products icon
    $(".nav-bar .fa-shopping-bag").on("click", function () {
        $(".hidden.main-products").fadeIn(hiddenTime).css("display","flex").addClass("active");
    })
    $(".hidden.main-products .cart .fa-times").on("click", function () {
        $(".hidden.main-products").fadeOut(hiddenTime).removeClass("active");
    })
    $(".hidden.main-products .cart, .hidden.main-search .search").on("click", function (e) {
        e.stopPropagation()
    })
    //search icon
    $(".nav-bar .fa-search").on("click", function () {
        $(".hidden.main-search").slideDown().css("display", "flex")
    })
    $(".hidden.main-search .fa-times").on("click", function () {
        $(this).parent().slideUp()
    })

    
})