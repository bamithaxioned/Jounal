//=============================== header scroll start
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0)
});
//=============================== header scroll end

$(document).ready(function () {
    //=============================== back to top start
        $(".back-top-top-btn").click(() => $(window).scrollTop(0));
    //=============================== back to top end

    //=============================== Hamburger start
    $(".hamburger").click(function() {
        $(this).toggleClass("active-hamburger");
        $(".nav-left").toggleClass("active");
        $(".nav-right").toggleClass("active");
    })
    //=============================== Hamburger end

})