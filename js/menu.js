$(function() {
    $("#btn_menu").on("click", openMenu);

    function openMenu() {
        if ($(window).innerWidth() <= 800) {
            $("#menu").slideToggle(300);
        }
    }

    $(window).on("resize", clearStyle);

    function clearStyle() {
        if ($(window).innerWidth() > 800) {
            $("#menu").attr("style", "");
        }
    }
});
